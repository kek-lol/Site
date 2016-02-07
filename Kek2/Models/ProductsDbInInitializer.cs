using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace Kek2.Models
{
    public class ProductsDbInInitializer : DropCreateDatabaseAlways<ProductContext>
    {
        protected override void Seed(ProductContext context)
        {
            context.Products.Add(new Product() { brand = "Lesproom", kind = "Sosna", product = "Doska", grade = "1-5", width = 180, length = 3985, thickness = 50, volume = 30000, place = "Ust-Ilimsk", date = new DateTime(2016,1,24), photo = "irk.ru/kartinka.jpg", Id = 1 });
            context.Products.Add(new Product() { brand = "Lesproom", kind = "Sosna", product = "Doska", grade = "1-5", width = 180, length = 3985, thickness = 50, volume = 30000, place = "Ust-Ilimsk", date = new DateTime(2016, 1, 24), photo = "irk.ru/kartinka.jpg", Id = 2 });
            context.Products.Add(new Product() { brand = "Lesproom", kind = "Sosna", product = "Doska", grade = "1-5", width = 180, length = 3985, thickness = 50, volume = 30000, place = "Ust-Ilimsk", date = new DateTime(2016, 1, 24), photo = "irk.ru/kartinka.jpg", Id = 3 });
            context.Products.Add(new Product() { brand = "Lesproom", kind = "Sosna", product = "Doska", grade = "1-5", width = 180, length = 3985, thickness = 50, volume = 30000, place = "Ust-Ilimsk", date = new DateTime(2016, 1, 24), photo = "irk.ru/kartinka.jpg", Id = 4});

            base.Seed(context);
        }
    }
}