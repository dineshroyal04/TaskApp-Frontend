// App.js
import React, { useState } from "react";
import "./App.css";
import TaskList from "./components/TaskList";

const initialTasks = {
  todo: [
    { id: 1, text: "Task 1" },
    { id: 2, text: "Task 2" },
    { id: 3, text: "Task 3" },
    { id: 4, text: "Task 4" },
    { id: 5, text: "Task 5" },
    { id: 6, text: "Task 6" },
    { id: 7, text: "Task 7" },
    { id: 8, text: "Task 8" },
    { id: 9, text: "Task 9" },
  ],
  inProgress: [],
  done: [],
};

const TaskManager = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDrop = (taskId, targetStage) => {
    const updatedTasks = { ...tasks };
    const task = updatedTasks[
      Object.keys(updatedTasks).find((key) =>
        updatedTasks[key].some((t) => t.id === taskId)
      )
    ].find((t) => t.id === taskId);

    updatedTasks[
      Object.keys(updatedTasks).find((key) =>
        updatedTasks[key].some((t) => t.id === taskId)
      )
    ] = updatedTasks[
      Object.keys(updatedTasks).find((key) =>
        updatedTasks[key].some((t) => t.id === taskId)
      )
    ].filter((t) => t.id !== taskId);
    updatedTasks[targetStage] = [...updatedTasks[targetStage], task];

    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Task Manager</h1>
      <div className="columns-container">
        <TaskList stage="todo" tasks={tasks.todo} onDrop={onDrop} />
        <TaskList stage="inProgress" tasks={tasks.inProgress} onDrop={onDrop} />
        <TaskList stage="done" tasks={tasks.done} onDrop={onDrop} />
      </div>
    </div>
  );
};

export default TaskManager;
