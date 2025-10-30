using System;
using System.IO;

class Program {
        // Hàm format Logging đơn giản vào 1 file
        public static void Log(string message) {
            string logPath = "app.log";
            string logMessage = $"{DateTime.Now:dd-MM-yyyy HH:mm:ss} - {message}";
            File.AppendAllText(logPath, logMessage + Environment.NewLine);
        }

        // Hàm chia 2 số có trường hợp chia cho 0 có thể ném lỗi
        static float Divide(int a, int b) {
            if (b == 0) {
                //Tạo một ném lỗi chia cho 0
                throw new DivideByZeroException("Không thể chia cho 0!");
            }
            return a / (float)b;
        }

    public static void Main() {
        Log("[START] Ứng dụng bắt đầu chạy.");
        try {
            Console.Write("Nhập số thứ nhất: ");
            int num1 = int.Parse(Console.ReadLine());
            Log($"[INPUT]: {num1}");
            Console.Write("Nhập số thứ hai: ");
            int num2 = int.Parse(Console.ReadLine());
            Log($"[INPUT]: {num2}");

            float result = Divide(num1, num2);
            Console.WriteLine($"Kết quả: {result}");

            Log($"[OUTPUT]Chia thành công: {num1} / {num2} = {result}");
        } catch (FormatException ex) {

            Console.WriteLine("Lỗi: Dữ liệu nhập không hợp lệ!");
            Log($"[ERROR] Nhập sai định dạng: {ex.Message}");

        } catch (DivideByZeroException ex) {

            Console.WriteLine("Lỗi: " + ex.Message);
            Log($"[ERROR] Lỗi chia cho 0: {ex.Message}");

        } catch (Exception ex) {

            Console.WriteLine("Đã xảy ra lỗi không xác định!");
            Log($"[ERROR] {ex.Message}");

        } finally {

            Log("[END] Ứng dụng kết thúc.");
            Console.WriteLine("\nXem chi tiết trong file 'app.log'.");
        }
    }
}
