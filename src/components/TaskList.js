// TaskList.js
import React from 'react';
import Task from './Task';

const TaskList = ({ stage, tasks, onDrop }) => {
  const onDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    const taskId = parseInt(e.dataTransfer.getData('text/plain'), 10);
    onDrop(taskId, stage);
  };

  return (
    <div className="task-list" onDragOver={onDragOver} onDrop={handleDrop}>
      <h2>{capitalizeFirstLetter(stage)}</h2>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export default TaskList;
