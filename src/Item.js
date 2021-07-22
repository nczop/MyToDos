import { PencilFill, Trash, CheckAll, X } from "react-bootstrap-icons";
import React, { useState } from "react";
import { toast } from "react-toastify";

function Item(props) {
  const { removeTodo, id, completed, check, editTodo, description } = props;

  const [readOnly, setReadOnly] = useState(true);
  const [newValue, setNewValue] = useState(description);

  const handleTrashButton = () => {
    toast.info(" ☠️ Removed");
    removeTodo(id);
  };

  const onChangeMarkComplete = () => {
    !check
      ? toast.success(" 🙌 Congratulations! You completed the task!")
      : toast.info("Do this task");
    completed(id);
  };

  const setReadOnlyValue = () => {
    setReadOnly((prevReadonly) => !prevReadonly);
  };

  const hansleCheckButton = () => {
    toast.info("Updated");
    const newToDo = {
      id: id,
      description: newValue,
      check: false,
    };
    editTodo(newToDo);
  };

  const handleChange = (e) => {
    setNewValue(e.target.value);
  };
  return (
    <div className="row px-3 align-items-center todo-item rounded">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexCheckDefault"
          onChange={onChangeMarkComplete}
        ></input>
        <label className="form-check-label" for="flexCheckDefault"></label>
      </div>
      <div className="col px-1 m-1 d-flex align-items-center">
        <input
          style={{ textDecoration: check ? "line-through" : "" }}
          type="text"
          className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
          readOnly={readOnly}
          value={readOnly ? description : newValue}
          onChange={handleChange}
        />
      </div>
      <div className="col-auto m-1 p-0 px-3 d-none"></div>
      <div className="col-auto m-1 p-0 todo-actions">
        <div className="row d-flex align-items-center justify-content-end">
          <h5 className="m-0 p-0 px-2">
            <button onClick={setReadOnlyValue} className="border-0 bg-light">
              {readOnly ? (
                <PencilFill className="pencil" color="#007bff" />
              ) : (
                <CheckAll
                  onClick={hansleCheckButton}
                  className="pencil"
                  color="#007bff"
                />
              )}
            </button>
          </h5>
          <h5 className="m-0 p-0 px-2">
            <button className="border-0 bg-light">
              {readOnly ? (
                <Trash
                  onClick={handleTrashButton}
                  className="trash"
                  color="#007bff"
                />
              ) : (
                <X
                  onClick={() => {
                    setReadOnlyValue();
                    setNewValue(description)
                  }}
                  className="x"
                  color="#007bff"
                />
              )}
            </button>
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Item;
