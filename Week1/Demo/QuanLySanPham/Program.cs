using System;
using System.Collections.Generic;
using System.Linq;

class Product {
    public int Id { get; set; }
    public string Name { get; set; }
    public double Price { get; set; }

    public virtual void Display() {
        Console.WriteLine($"ID: {Id}, Ten: {Name}, Gia: {Price}VND");
    }
}

// Class kế thừa
class Electronic : Product {
    public string Brand { get; set; }

    public override void Display() {
        Console.WriteLine($"[Dien tu] {Name} - {Brand} - {Price}VND");
    }
}

class Program {
    static void Main() {
        List<Product> products = new List<Product>();
        var pr = new Dictionary<int, string>();
        pr[1] = "Laptop";
        pr[2] = "Workstation";
        foreach (var item in pr) { 
            Console.WriteLine($"{item.Key} - {item.Value}"); 
        }

        while (true) {
            Console.WriteLine("\n=== MENU ===");
            Console.WriteLine("1. Them san pham");
            Console.WriteLine("2. Sua san pham");
            Console.WriteLine("3. Xoa san pham");
            Console.WriteLine("4. Xem danh sach");
            Console.WriteLine("5. Thoat");
            Console.Write("Chon: ");
            int choice = int.Parse(Console.ReadLine());

            if (choice == 1) {
                Product product= new Product();
                Console.Write("Nhap ID: ");
                product.Id = int.Parse(Console.ReadLine());
                Console.Write("Nhap Ten: ");
                product.Name = Console.ReadLine();
                Console.Write("Nhap gia san pham: ");
                product.Price = double.Parse(Console.ReadLine());
                products.Add(product);
            } else if (choice == 2) {
                Console.Write("Nhap ID can sua: ");
                int id = int.Parse(Console.ReadLine());
                var prod = products.FirstOrDefault(product=> product.Id == id);
                if (prod != null) {
                    Console.Write("Ten moi: ");
                    prod.Name = Console.ReadLine();
                    Console.Write("Gia moi: ");
                    prod.Price = double.Parse(Console.ReadLine());
                } else Console.WriteLine("Khong tim thay san pham!");
            } else if (choice == 3) {
                Console.Write("Nhap ID can xoa: ");
                int id = int.Parse(Console.ReadLine());
                products.RemoveAll(product=> product.Id == id);
            } else if (choice == 4) {
                Console.WriteLine("Danh sach san pham:");
                foreach (var p in products)
                    p.Display();
            } else break;
        }
    }
}
