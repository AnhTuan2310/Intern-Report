import React, {createContext, useState,useEffect, useContext, children, useMemo} from 'react';

const TodoContext = createContext(null);
const STORAGE_KEY = "todos"; // Khóa lưu trữ trong localStorage

export const TodoProvider = ({children}) => {
    const [todos, setTodos] = useState(()=>{
        try {
            const stored = localStorage.getItem(STORAGE_KEY);
            return stored ? JSON.parse(stored): [];
        } catch{
            return [];
        }
    });
    useEffect(()=>{
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
        } catch  {
            
        }
    }, [todos]);

    const addTodo = (text) => {
        if (!text ||!text.trim()) return;
        const newTodo = {id: Date.now(),text: text.trim(),state: false};
        setTodos((prev)=> [...prev, newTodo]);
    };

    const editTodo = (id, newText) => {
        setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, text: newText } : t)));
    };

    const deleteTodo = (id) => setTodos((prev)=>
        prev.filter((t)=> t.id !==id )
    );

    const toggleTodo = (id) => setTodos((prev)=>
        prev.map((t)=>(t.id===id ? {...t, state: !t.state}:t))
    );

    const clearAll = () => setTodos([]);
    const remainTodos = todos.filter((todo) => !todo.state).length;


    const value = useMemo(() => (
        { todos, addTodo, 
        deleteTodo, toggleTodo, 
        editTodo,remainTodos, clearAll,
    }),[todos]);

    return (
        <TodoContext.Provider value = {value}>
            {children}
        </TodoContext.Provider>
    );
};
export function useTodoContext() {
  const context = useContext(TodoContext);
  if (!context) throw new Error("useTodoContext phải được dùng trong TodoProvider");
  return context;
}