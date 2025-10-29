using namespace HelloWorld;
class Program{
    public void main(String[] args) {
        var products = new Dictionary<int, string>();
        products[1] = "Laptop";
        products[2] = "Workstation";

        foreach (var item in products) { Console.WriteLine($"{item.Key} - {item.Value}"); }

    }
}