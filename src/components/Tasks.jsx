import React, { useState } from "react";
import NewTask from "./NewTask";
import { nanoid } from "nanoid";
import EditTask from "./EditTask";

export default function Tasks() {
  const [taskData, setTaskData] = useState([]);

  function addTask(value) {
    setTaskData((prev) => [
      ...prev,
      { value: value, id: nanoid(), isEdited: false, isComplete: false },
    ]);
  }

  function deleteTask(id) {
    setTaskData((prev) => prev.filter((task) => task.id != id));
  }

  function editTask(id, newValue) {
    console.log(inputEl.current);
    setTaskData((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isEdited: false, value: newValue } : task
      )
    );
  }

  function toggleEditing(id) {
    setTaskData((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isEdited: !task.isEdited } : task
      )
    );
  }

  function toggleComplete(id) {
    setTaskData((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isComplete: !task.isComplete } : task
      )
    );
  }

  return (
    <main>
      <h1>To-Do</h1>
      <div className="tasks">
        <NewTask addTask={addTask} />
        {taskData.map((task) =>
          task.isEdited ? (
            <EditTask
              editTask={editTask}
              deleteTask={deleteTask}
              toggleEditing={toggleEditing}
              oldValue={task.value}
              taskId={task.id}
              key={task.id}
            />
          ) : (
            <div key={task.id} className="task-container">
              <span onClick={() => toggleComplete(task.id)}>
                {task.isComplete ? (
                  <i
                    className="fa-solid fa-circle fa-2xs"
                    style={{ color: "#1D1B1B" }}
                  ></i>
                ) : (
                  <i className="fa-regular fa-circle fa-2xs"></i>
                )}
              </span>
              <div
                onClick={() => toggleEditing(task.id)}
                className={`task ${task.isComplete ? "complete" : ""}`}
              >
                {task.value}
              </div>
              <i
                onClick={() => toggleEditing(task.id)}
                className="fa-solid fa-pencil fa-xs"
                style={{ color: "blue" }}
              ></i>
              <i
                onClick={() => deleteTask(task.id)}
                className="fa-solid fa-square-xmark"
                style={{ color: "#462040" }}
              ></i>
            </div>
          )
        )}
      </div>
    </main>
  );
}
