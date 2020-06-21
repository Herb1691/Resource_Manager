using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using capstone.Data;
using capstone.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace capstone.Controllers
{
    [Authorize]
    [ApiController]
    [Route("[controller]")]
    public class DevicesController : ControllerBase
    {

        [HttpGet]
        public IEnumerable<Devices> Get()
        {
            Devices[] devices = null;
            using (var context = new ApplicationDbContext())
            {
                devices = context.Devices.ToArray();
            }
            return devices;

        }
        [HttpPost]
        public Devices Post([FromBody]Devices devices)
        {
            using (var context = new ApplicationDbContext())
            {
                context.Devices.Add(devices);
                context.SaveChanges();
            }
            return devices;
        }
    }
}
