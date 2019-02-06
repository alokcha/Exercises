using Microsoft.EntityFrameworkCore;

namespace GUID.Models
{
    public class GUIDContext: DbContext     
    {
        public GUIDContext(DbContextOptions<GUIDContext> options) : base(options)         
        {         

        }       
        public DbSet<GUIDData> GUIDs { get; set; }             
    }
}