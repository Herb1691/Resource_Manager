using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace capstone.Models
{
    public class Devices
    {
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [Key]
        public int Id { get; set; }
        public string SystemType { get; set; }
        public string Maker { get; set; }
        public string SystemName { get; set; }
        public DateTime DatePurchased { get; set; }
        public bool IsAssigned { get; set; }
        public string Organization { get; set; }
        public string Department { get; set; }

        public String UserId { get; set; }
        public ApplicationUser User { get; set; }
    }
}
