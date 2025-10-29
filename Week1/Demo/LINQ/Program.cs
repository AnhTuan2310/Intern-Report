using System;
using System.Collections.Generic;
using System.Linq;

class Product
{
    public int id { get; set; }
    required public string name { get; set; }
    public double price { get; set; }
}
class Program
{
    public static void Main(string[] args)
    {
        List<Product> products = new(){
            new Product{ id=1, name="Laptop", price=20000 },
            new Product{ id=2, name="Phone", price=12000 },
            new Product{ id=3, name="Mouse", price=500 },
            new Product{ id=4, name="Tablet", price=15000 }
        };
        //Loc du lieu voi Where
        var expensiveProd = products.Where(p => p.price > 10000);
        foreach (var prod in expensiveProd) {
            Console.WriteLine($"{prod.name} - {prod.price}");
        }

        //Chon truong cu the voi Select
        var names = products.Select(p => p.name);
        Console.WriteLine("\n------------------------------");
        foreach (var name in names) {
            Console.WriteLine($"{name}");
        }

        //Sap xep du lieu voi OrderBy/OrderByDescending
        var prodSortedByPrice = products.OrderBy(p => p.price);
        var prodSortedByPriceDesc = products.OrderByDescending(p => p.price);
        Console.WriteLine("\n------------------------------");
        foreach (var pSorted in prodSortedByPrice) {
            Console.WriteLine($"{pSorted.name} - {pSorted.price}");
        }
        foreach (var pSortedDesc in prodSortedByPriceDesc) {
            Console.WriteLine($"{pSortedDesc.name} - {pSortedDesc.price}");
        }
        Console.WriteLine("\n-----------------------------------");

        //Lay 1 phan du lieu
        var top2 = products.Take(2);
        var skip1 = products.Skip(1);
        foreach (var top in top2 ) Console.WriteLine($"{top.name} - {top.price} END TOP(2)");
        foreach (var skip in skip1) Console.WriteLine($"{skip.name} - {skip.price}");

        //Kiem tra dieu kien voi All/Any
        bool haveCheapPrice = products.Any(p => p.price < 1000);
        bool haveExpensivePrice = products.All(p => p.price > 10000);
        Console.WriteLine($"Have product with price below 1000 ?  {haveCheapPrice}");
        Console.WriteLine($"All products have price above 10000 ? {haveExpensivePrice}");

        //Tim kiem voi First/FirstOrDefault/Single/SingleOrDefault
        var firstProd = products.First();
        var firstorDefaultProd = products.FirstOrDefault(p => p.price > 25000);
        var singleProd = products.Single(p => p.id == 2);
        Console.WriteLine($"First product: {firstProd.name} - {firstProd.price}");
        if (firstorDefaultProd == null)
            Console.WriteLine("No product found with price above 25000");
        Console.WriteLine($"Single product with ID=2: {singleProd.name} - {singleProd.price}");

        //Nhom du lieu voi GroupBy
        var group = products.GroupBy(p => p.price > 10000 ? "Expensive" : "Affordable");
        foreach (var g in group) {
            Console.WriteLine($"Group: {g.Key}");
            foreach (var item in g) Console.WriteLine($"{item.name} - {item.price}");
        }

        //Delete du lieu voi RemoveAll
        products.RemoveAll(p => p.price < 1000);
    }
}