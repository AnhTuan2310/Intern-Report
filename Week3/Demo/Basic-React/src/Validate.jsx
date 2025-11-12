import { useFormik } from 'formik';
import * as Yup from 'yup';

// 1. Định nghĩa "luật" (rules) bằng Yup
// Đây là logic validation
const validationSchema = Yup.object({
  email: Yup.string()
    .email('Email không hợp lệ')
    .required('Bắt buộc nhập'),
  password: Yup.string()
    .min(8, 'Mật khẩu phải trên 8 ký tự')
    .required('Bắt buộc nhập'),
});

// 2. "Set up" (thiết lập) Formik
// Đây là logic quản lý state
const formik = useFormik({
  // Giá trị khởi tạo
  initialValues: {
    email: 'test@gmail.com',
    password: '123', // Cố tình nhập sai (chỉ 3 ký tự)
  },

  // "Nạp" (load) luật của Yup vào
  validationSchema: validationSchema,

  // "Nạp" (load) hàm xử lý khi submit
  onSubmit: (values) => {
    // "values" là { email: '...', password: '...' }
    // Hàm này CHỈ CHẠY khi KHÔNG CÒN LỖI
    console.log('SUBMIT THÀNH CÔNG:', values);
  },
});

// 3. "Chạy thử" (simulation) logic
// Hãy "giả vờ" (pretend) chạy validation ngay lập tức
// (Bình thường Formik tự làm, đây là ta ép nó làm)
formik.validateForm().then(errors => {
  if (Object.keys(errors).length > 0) {
    // Nếu có lỗi (chắc chắn sẽ có vì password='123')
    console.log('LỖI VALIDATION:', errors);
    // Kết quả sẽ là: { password: 'Mật khẩu phải có ít nhất 8 ký tự' }
  } else {
    // Nếu không có lỗi
    console.log('Form hợp lệ!');
  }
});