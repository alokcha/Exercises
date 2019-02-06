using System;
using ServiceStack.Redis;
using System.Text;
using Newtonsoft.Json;

namespace GUID.Helpers
{
    /// <summary>Helper class for REDIS cache</summary>
    public class CacheHelper
    {
        /// <summary>Input - Key and Value objects to be cached</summary>
        public static void Set(string Key, object ValueObj)
        {
            using (RedisClient redisClient = new RedisClient())
            {
                // the Value object is cached as a Json string
                var cacheString = Encoding.ASCII.GetBytes(JsonConvert.SerializeObject(ValueObj));
                redisClient.Set(Key, cacheString);
            }
        }
        /// <summary>Input - Key and the explicit type of the Value object</summary>
        public static object Get(string Key, System.Type ObjType)
        {
            object cacheObj = null;
            using (RedisClient redisClient = new RedisClient())
            {
                var cacheData = redisClient.Get(Key);
                if (cacheData != null)
                {
                    var cacheString = Encoding.ASCII.GetString(cacheData);
                    // string value from cache is deserialized to its explicit type
                    cacheObj = JsonConvert.DeserializeObject(cacheString, ObjType);
                }
            }
            return cacheObj;
        }
        /// <summary>Input - cache Key string</summary>
        public static void Remove(string Key)
        {
            using (RedisClient redisClient = new RedisClient())
            {
                var cacheData = redisClient.Get(Key);
                if (cacheData != null)
                {
                    redisClient.Remove(Key);
                }
            }
        }
    }
}