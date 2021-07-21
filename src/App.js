import React, { useState } from "react";
import "./App.css";
import { PlusLg } from "react-bootstrap-icons";
import AddItem from "./AddItem";
import Item from "./Item";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [todo, setTodo] = useState([
    { id: 1, description: "nauczyc sie reacta", check: false },
    { id: 2, description: "skończyć upskilla", check: false },
    { id: 3, description: "umyc okna", check: false },
    { id: 4, description: "zjesc ciasto", check: false },
    { id: 5, description: "wypić aperolka", check: false },
  ]);

  const [plusButton, setPlusButton] = useState(false);

  const addTodo = (description) => {
    setTodo([
      ...todo,
      { id: todo.length + 1, description: description, check: false },
    ]);
  };

  const expandAdditionalSection = () => {
    setPlusButton(true);
  };

  const removeTodo = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
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

  const editTodo = (id, description) => {
    setTodo(
      todo.map((todo) => {
        if (todo.id === id) {
          todo.description = description;
        }
        return todo;
      })
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
