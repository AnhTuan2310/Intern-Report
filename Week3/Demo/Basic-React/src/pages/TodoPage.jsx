import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//import Selector, Dispatch và các action từ redux
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, toggleTodo } from "../redux/todoSlice";
import "../App.css";


function TodoPage(){

  const todos = useSelector((state)=> state.todos);
  const dispatch = useDispatch();

  //Tạo schema check nội dung được nhập vào To-do input
  const schema = Yup.object({
    text: Yup.string()
    .min(4, "Công việc quá ngắn") //Tối thiểu 4 chữ
    .required("Công việc không được để trống")//Bắt buộc nhập
  });


  //Handler khi thêm công việc mới
  const addTodoHandler = (values, {resetForm}) =>{
    dispatch(addTodo(values.text));
    resetForm();
  };

 return(
  <div className="todo-app">
    <h1>Redux To-do App</h1>
    <h2 style={{color: "black"}}>Việc chưa xong: {todos.filter((t) => !t.state).length}</h2>
    
    {/* FORMIK FORM */}
    <Formik 
      initialValues={{text: ""}}// Setup cho Formik với giá trị khởi tạo rỗng
      validationSchema={schema} // Sử dụng schema cho validateSchema 
      onSubmit={addTodoHandler} //Event khi submit form sẽ là thực hiện hàm addTodo
    >
      <Form className='todo-form'> {/* Bọc ErrorMessage, Input và Button vào 1 form */}
        
        {/* Đưa ErrorMessage lên phía bên trên đầu input*/}
        <ErrorMessage
          name = "text"
          component="div"
          className='error-message'
        />
        {/* Cho Input và Button vào thẻ div để đồng bộ chiều cao */}
        <div className='todo-input-row'>
          {/* Input */}
          <Field
            name = "text"
            placeholder= "Thêm công việc"
            className="todo-input"
          />
          <button type='submit'>Thêm</button>
        </div>
      </Form>
    </Formik>

    {/* Hiển thị danh sách công việc */}
    <ul className='todo-list'>
      {todos.map(todo =>( //Sử dụng map để lặp qua mảng todos thành các phần tử li
        <li key={todo.id} className="todo-item">
          <span // Hiển thị nội dung công việc
            onClick={()=>dispatch(toggleTodo(todo.id))}
            style={{ 
              textDecoration: todo.state ? 'line-through' : 'none',
              cursor: 'pointer' 
            }}
          >
            {todo.text}
          </span> 
          <button onClick={() => dispatch(removeTodo(todo.id))}>Xóa</button> 
          {/* Gọi hàm xóa công việc khi nhấn nút, truyền id công việc vào hàm */}
        </li>
      ))}
    </ul>
  </div>
 );
}
export default TodoPage
