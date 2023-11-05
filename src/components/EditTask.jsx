import React, { useState, useRef, useEffect } from "react";

export default function EditTask({
  oldValue,
  taskId,
  editTask,
  deleteTask,
  toggleEditing,
}) {
  const [value, setValue] = useState(oldValue);
  const inputEl = useRef("");

  function handleSubmit(e) {
    e.preventDefault();
    editTask(taskId, value);
  }

  useEffect(() => inputEl.current.focus());

  return (
    <form className="edit-task" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Edit task..."
        ref={inputEl}
      />
      <i
        onClick={() => toggleEditing(taskId)}
        className="fa-solid fa-pencil fa-xs"
        style={{ color: "blue" }}
      ></i>
      <i
        onClick={() => deleteTask(taskId)}
        className="fa-solid fa-square-xmark"
        style={{ color: "#462040" }}
      ></i>
    </form>
  );
}
