// components/Task.js
import React from 'react';
import '../App.css'
import { Draggable } from 'react-beautiful-dnd';

const Task = ({ task, index }) => (
  <Draggable draggableId={task.id.toString()} index={index}>
    {(provided) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        className="task-card"
      >
        <h3>{task.title}</h3>
      </div>
    )}
  </Draggable>
);

export default Task;
