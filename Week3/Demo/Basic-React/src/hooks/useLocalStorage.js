import { useState, useEffect } from "react";

export function useLocalStorage(key, initialValue){

    const[value, setValue] = useState(()=>{
        const savedValue = localStorage.getItem(key);
        return savedValue ? JSON.parse(savedValue) : initialValue;
    });

    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(value));
    },[value, key]);
    
    return [value, setValue];
}