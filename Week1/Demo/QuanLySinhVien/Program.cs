using System;
using System.Collections.Generic;

interface IStudent {
    void Display();
}
class Student:IStudent{
    public string Name { get; set; }
    public int Age { get; set; }

    public void Display() {
        Console.WriteLine($"Ten: {Name}, Tuoi: {Age}");
    }
}

class Program {
    public void Main() {
        List<Student> students = new List<Student>();

        while (true) {
            Console.WriteLine("\n1. Them sinh vien");
            Console.WriteLine("2. Hien thi danh sach");
            Console.WriteLine("3. Thoat");
            Console.Write("Chon: ");
            int choice = int.Parse(Console.ReadLine());

            if (choice == 1) {
                Console.Write("Nhap ten: ");
                string name = Console.ReadLine();
                Console.Write("Nhap tuoi: ");
                int age = int.Parse(Console.ReadLine());
                students.Add(new Student { Name = name, Age = age });
            } else if (choice == 2) {
                Console.WriteLine("Danh sach sinh vien:");
                foreach (var s in students)
                    s.Display();
            } else break;
        }
    }
}
