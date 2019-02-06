using System;
using System.ComponentModel.DataAnnotations;

namespace GUID.Models
{
    public class GUIDData
    {
        [Key]
        public string guid { get; set; }
        public long expire { get; set; }
        public string user { get; set; }
        public GUIDData() { }
        public GUIDData(string guid)
        {
            this.guid = guid;
        }
    }
}