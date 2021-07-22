import { useState, useEffect } from "react";
import httpService from "../HttpService";

function useToDoList() {
    const [todo, setTodo] = useState([])

    useEffect(() => {
        loadTodos();
    }, []);

    const loadTodos = () => {
        httpService.get('todo').then((res) => {
          setTodo(res.data)
        })
    };

    return [todo, setTodo];
}

export default useToDoList;