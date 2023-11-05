import React, { useState } from "react";

export default function NewTask({ addTask }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTask(value);
    setValue("");
  }

  return (
    <div className="new-task">
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Add task..."
        />
        <button className="add-task-btn">Add task</button>
      </form>
    </div>
  );
}
