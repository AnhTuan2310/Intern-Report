function Welcome({name}){

    function App() {
    const inputRef = useRef(null); // Không cần useState cho input

    const handleSubmit = () => {
    // Lấy giá trị trực tiếp từ DOM khi cần
    const value = inputRef.current.value; 
    console.log(value);
    };

  return (
    <input 
      type="text"
      ref={inputRef} // <-- Gắn ref
      // Không cần "value" hay "onChange"
    />
  );
}

    return (
        <div>
            <p>Welcome {name}</p>
        </div>
    )
}

export default Welcome;