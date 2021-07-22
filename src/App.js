import React, { useState } from "react";
import "./App.css";
import { PlusLg } from "react-bootstrap-icons";
import AddItem from "./AddItem";
import Item from "./Item";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useToDoList from "../src/hooks/useToDoList";
import httpService from "./HttpService";

function App() {
  const [todo, setTodo] = useToDoList();

  const [plusButton, setPlusButton] = useState(false);

  const addTodo = (newToDo) => {
    httpService
      .post("todo", newToDo)
      .then((res) => setTodo([...todo, res.data]));
  };

  const expandAdditionalSection = () => {
    setPlusButton(true);
  };

  const removeTodo = (id) => {
    httpService
      .delete(`todo/${id}`)
      .then(setTodo(todo.filter((todo) => todo.id !== id)));
  };

  const completed = (id) => {
    const itemToDo = todo.map((todo) => {
      if (todo.id === id) {
        todo.check = !todo.check;
      }
      return todo;
    });

    setTodo(itemToDo);
  };

  const editTodo = (newToDo) => {
    httpService.put(`todo/${newToDo.id}`, newToDo).then(
      setTodo(
        todo.map((todo) => {
          if (todo.id === newToDo.id) {
            todo.description = newToDo.description;
          }
          return todo;
        })
      )
    );
  };

  return (
    <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
      <div className="row m-1 p-4">
        <div className="col">
          <div className="p-1 h1 text-primary text-center mx-auto display-inline-block">
            <p>My Todos</p>
          </div>
        </div>
      </div>
      <div className="row mx-1 px-5 pb-3 w-80">
        <div className="col mx-auto">
          {todo.map((todo) => (
            <Item
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              id={todo.id}
              completed={completed}
              check={todo.check}
              editTodo={editTodo}
              description={todo.description}
            ></Item>
          ))}

          <div className="p-2 mx-4 m-5 border-black-25 border-bottom "></div>
          <div className="text-center">
            {plusButton ? (
              <AddItem
                addTodo={addTodo}
                setPlusButton={setPlusButton}
                todo={todo}
              ></AddItem>
            ) : (
              <div>
                <button
                  onClick={expandAdditionalSection}
                  className="border-0 bg-light"
                >
                  <PlusLg className="plusLg" color="#007bff" />
                </button>
                <ToastContainer position="top-center" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
