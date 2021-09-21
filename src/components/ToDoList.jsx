import React from "react";

function ToDoList(props) {
  return (
    <li
      onClick={() => {
        props.onDelete(props.id);
      }}
    >
      {props.todoItem}
    </li>
  );
}

export default ToDoList;
