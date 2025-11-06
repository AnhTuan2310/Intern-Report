import './App.css'
import { useState } from 'react';

function App() {
  // Tạo danh sách công việc với một số dữ liệu mẫu
  const [todos, setTodos] = useState([
    { id: 1, text: 'Học React', state: false },
    { id: 2, text: 'Nấu cơm', state: true },
    { id: 3, text: 'Quét nhà', state: false },
  ]);

  //State để quản lý giá trị input
  const [newTodo, setNewTodo] = useState('');

  //Hàm xử lý sự kiện khi input thay đổi
  function handleInputChange(event){
    setNewTodo(event.target.value);
  }

  //Hàm thêm công việc mới
  function handleAddTodo(){
    if(newTodo.trim() === '') return; //Kiểm tra nếu input rỗng thì không thêm

    //Tạo công việc mới băng cách sử dụng giá trị từ input
    const newTodoItem = {
      id: Date.now(), //Sử dụng timestamp làm id
      text: newTodo, //Giá trị từ input
      state: false, //Do mới tạo nên trạng thái set chưa hoàn thành
    };
    
    //Cập nhật danh sách công việc
    //Sử dụng ... giữ lại công việc cũ và thêm công việc mới vào cuối
    setTodos([...todos, newTodoItem]);
    
    //Xóa giá trị trong input sau khi thêm
    setNewTodo('');
  }
  
  //Hàm xóa công việc
  function deleteTodo(id){
    //Lọc ra công việc có id trùng với id được truyền vào bằng toán tử !==
    //Giữ lại những công việc không trùng id vào mảng updatedTodos
    const updatedTodos = todos.filter(todo => todo.id !== id);
    
    //Cập nhật lại danh sách công việc
    setTodos(updatedTodos);
  }

 return(
  <div className="todo-app">
    <h1>Basic To-do App</h1>
    <div className='todo-form'>
      {/* Input để nhập công việc mới */}
      <input 
        type="text"
        value = {newTodo}
        onChange={handleInputChange} //Gọi hàm khi giá trị input thay đổi
        placeholder='Thêm công việc' />

      <button onClick={handleAddTodo}>Thêm</button> {/* Gọi hàm thêm công việc khi nhấn nút  */}
    </div>

    {/* Hiển thị danh sách công việc */}
    <ul className='todo-list'>
      {todos.map(todo =>( //Sử dụng map để lặp qua mảng todos thành các phần tử li
        <li key={todo.id}>

          <span>{todo.text}</span> {/* Hiển thị nội dung công việc */}

          <button onClick={() => deleteTodo(todo.id)}>Xóa</button> 
          {/* Gọi hàm xóa công việc khi nhấn nút, truyền id công việc vào hàm */}
        </li>
      ))}
    </ul>
  </div>
 );
}
export default App
