// Task.js
import React from 'react';

const Task = ({ task }) => {
  const onDragStart = (e) => {
    e.dataTransfer.setData('text/plain', task.id.toString());
  };

  return (
    <div
      className="task"
      draggable
      onDragStart={onDragStart}
    >
      {task.text}
    </div>
  );
};

export default Task;
