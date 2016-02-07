using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Kek2.Models
{
    public class ProductContext : DbContext
    {
        public ProductContext() : base ("ProductConnection")
        {

        }

        public DbSet<Product> Products { get; set; }
    }
}