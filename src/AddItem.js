import React, { useState } from "react";
import { toast } from "react-toastify";

function AddItem(props) {
  const { setPlusButton, addTodo, todo } = props;
  const [newValueDescription, setNewValueDescription] = useState("");

  const handleAdd = () => {
    if (newValueDescription) {
      const newToDo={
        description: newValueDescription,
        check: false
      }
      addTodo(newToDo);
      toast.success(" 🦄 Task added!");
    } else {
      toast.error(" ✍️ Empty description");
    }
    setPlusButton(false);
  };

  const handleChange = (e) => {
    setNewValueDescription(e.target.value);
  };

  return (
    <div className="row m-1 p-3">
      <form onSubmit={handleAdd} className="w-100">
        <div className="col col-11 mx-auto ">
          <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
            <div className="col">
              <input
                className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded "
                type="text"
                placeholder="Add new .."
                name="description"
                value={newValueDescription}
                onChange={handleChange}
              ></input>
            </div>
            <div className="col-auto px-0 mx-0 mr-2">
              <input type="submit" className="btn btn-primary" value="Add" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddItem;
