import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
    name : "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push({id: Date.now(), text: action.payload, state: false});
        },
        removeTodo:(state, action)=>{
            return state.filter((t)=> t.id !== action.payload);
        },
        toggleTodo: (state, action) => {
            const todo = state.find((t)=>t.id === action.payload);
            if (todo) todo.state = !todo.state;
        },
        clearAll: () => [],
    },
});

export const {addTodo, removeTodo,toggleTodo,clearAll} = todoSlice.actions;
export default todoSlice.reducer;