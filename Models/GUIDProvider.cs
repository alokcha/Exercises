using System;
using System.Collections.Generic;
using System.Net;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using GUID.Helpers;

namespace GUID.Models
{
    public class GUIDProvider
    {
        readonly GUIDContext guidDataContext;
        public GUIDProvider(GUIDContext dataContext)
        {
            guidDataContext = dataContext;
        }

    }
}