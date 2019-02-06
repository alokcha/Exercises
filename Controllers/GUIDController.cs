using System;
using System.Collections.Generic;
using System.Net;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GUID.Models;
using GUID.Helpers;

namespace GUID.Controllers
{
    /// <summary>API to maintain an expirable set of user-assigned GUIDs</summary>
    [Route("api/[controller]")]
    [ApiController]
    public class GUIDController : ControllerBase
    {
        readonly GUIDContext guidDataContext;

        public GUIDController(GUIDContext dataContext)
        {
            guidDataContext = dataContext;
        }
        /// <summary>Create or Update</summary>
        /// <remark>If the passed guid doesnt exist in db or has already expired, this api will behave as a Create request</remark>
        /// <remarky>If the passed guid does exist in db and has not yet expired, this api will behave as an Update request</remark>
        // POST api/guid
        // POST api/guid/9094E4C980C74043A4B586B420E69DDF
        [HttpPost("{guid}")]
        [HttpPost]
        public async Task<ActionResult<GUIDData>> PostGUIDData(string guid, [FromBody]GUIDData guidObj)
        {
            // create a new guid if a it is not passed as input
            guid = guid ?? (guidObj != null && !string.IsNullOrWhiteSpace(guidObj.guid) ? guidObj.guid : Guid.NewGuid().ToString());
            Guid hxGuid;
            // error response for an invalid guid
            if (string.IsNullOrWhiteSpace(guid) || !Guid.TryParse(guid, out hxGuid))
            {
                return StatusCode((int)HttpStatusCode.BadRequest, "Not a valid Guid.");
            }
            // error response for a guid mismatch between path input vs post data
            if (guidObj != null && !string.IsNullOrWhiteSpace(guidObj.guid) && guid != guidObj.guid)
            {
                return StatusCode((int)HttpStatusCode.Conflict, "Conflicting Input.");
            }
            guidObj = guidObj ?? new GUIDData(guid);
            guidObj.guid = guid;
            // If no expire times is passed in input, set it to 30 days from now
            if (guidObj.expire == 0)
            {
                guidObj.expire = new DateTimeOffset(DateTime.Now.AddDays(30)).ToUnixTimeSeconds();
            }
            // look for existing data with the guid passed as input
            GUIDData existingGuidObj = (GUIDData)CacheHelper.Get(guid, typeof(GUIDData));

            // no existing guid is treated as a Create reuest
            if (existingGuidObj == null)
            {
                // if the input expire time is already in the past, no data is created and a null will be returned
                if (guidObj.expire > new DateTimeOffset(DateTime.Now).ToUnixTimeSeconds())
                {
                    guidDataContext.GUIDs.Add(guidObj);
                    existingGuidObj = guidObj;
                }
            }
            // already existing guid is treated as an Update reuest
            else
            {
                // assign the new expire time from input to the existing metadata object
                existingGuidObj.expire = guidObj.expire;
                // if the expire time set in the updated guid object is already in the past, the object is deleted and a null will be returned
                if (existingGuidObj.expire <= new DateTimeOffset(DateTime.Now).ToUnixTimeSeconds())
                {
                    await this.DeleteGUIDData(existingGuidObj.guid);
                    existingGuidObj = null;
                }
                else
                {
                    // assign the new user name from input to the existing metadata object
                    if (!string.IsNullOrWhiteSpace(guidObj.user)) existingGuidObj.user = guidObj.user;
                    guidDataContext.GUIDs.Update(existingGuidObj);
                }
            }
            // for both Create and Update requests, 'existingGuidObj' will be null if the request was invalid or the expiry time is already in the past
            if (existingGuidObj != null)
            {
                //var SaveTask = guidDataContext.SaveChangesAsync();
                guidDataContext.SaveChanges(); // Asycn call commented - was causing concurrency issues with postgres
                // update the cache while the data is being persisted to db
                CacheHelper.Set(existingGuidObj.guid, existingGuidObj);
                //await SaveTask;
            }
            return existingGuidObj;
        }
        // Read API
        // GET api/guid/9094E4C980C74043A4B586B420E69DDF
        [HttpGet("{guid}", Name = "GetGUID")]
        public async Task<ActionResult<GUIDData>> GetById(string guid)
        {
            if (string.IsNullOrWhiteSpace(guid))
                return NotFound();
            GUIDData guidObj = null;
            // check if the guid is available in cache
            var cacheData = CacheHelper.Get(guid, typeof(GUIDData));
            if (cacheData != null)
            {
                guidObj = (GUIDData)cacheData;
            }
            else
            {
                // find guid metada from the db
                guidObj = guidDataContext.GUIDs.Find(guid);
                if (guidObj != null)
                {
                    // if found, add the metadata to cache
                    CacheHelper.Set(guidObj.guid, guidObj);
                }
            }
            // if the expire time in the found guid objet is already in the past, the data is deleted from the db and the cache. null value is retuned.
            if (guidObj != null && guidObj.expire < new DateTimeOffset(DateTime.Now).ToUnixTimeSeconds())
            {
                await this.DeleteGUIDData(guidObj.guid);
                guidObj = null;
            }
            return guidObj ?? (ActionResult<GUIDData>)NotFound();
        }
        // Delete API
        // DELETE: api/guid/9094E4C980C74043A4B586B420E69DDF
        [HttpDelete("{guid}")]
        public async Task<ActionResult> DeleteGUIDData(string guid)
        {
            // find if data exists for the guid passed in input
            var guidObj = await guidDataContext.GUIDs.FindAsync(guid);
            if (guidObj == null)
            {
                return NotFound();
            }
            // delete metadata from db
            guidDataContext.GUIDs.Remove(guidObj);
            //var deleteTask = guidDataContext.SaveChangesAsync();
            guidDataContext.SaveChanges(); // Asycn call commented - was causing concurrency issues with postgres
            // remove from cache while the data is being deleted from the db
            CacheHelper.Remove(guid);
            //await deleteTask;
            
            return NoContent();
        }
    }
}
