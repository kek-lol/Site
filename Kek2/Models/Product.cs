using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Kek2.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        public DateTime date { get; set; }
        public String kind { get; set; }
        public String product { get; set; }
        public String grade { get; set; }
        public int thickness { get; set; }
        public int width { get; set; }
        public int length { get; set; }
        public int volume { get; set; }
        public String place { get; set; }
        public String brand { get; set; }
        public String photo { get; set; }
    }
}