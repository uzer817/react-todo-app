import React from "react";

const Todo = (props) => {
  const {
    item,
    deleteTodo,
    setİsEdit,
    setWillUpdateTodo,
    setTodoText,
    changeIsDone,
  } = props;
  return (
    <div
      className={`alert alert-${
        item.isDone === true ? "success" : "secondary"
      } d-flex justify-content-between aling-items-center`}
    >
      <p>{item.text}</p>

      <div>
        
        <button
          className="btn btn-sm btn-danger"
          onClick={() => deleteTodo(item.id)}
        >
          Delete
        </button>
        <button
          className="btn btn-sm btn-success mx-1"
          onClick={() => {
            setİsEdit(true);
            setWillUpdateTodo(item.id);
            setTodoText(item.text);
          }}
        >
          Edit
        </button>
        <button
          onClick={() => changeIsDone(item.id)}
          className="btn btn-sm btn-secondary"
        >
          {item.isDone === false ? "Done" : "Undone"}
        </button>
      </div>
    </div>
  );
};
export default Todo;
