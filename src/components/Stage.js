// components/Stage.js
import React from 'react';
import Task from './Task';
import '../App.css'
import { Droppable } from 'react-beautiful-dnd';

const Stage = ({ stage, tasks, onMoveTask }) => (
  <div className="stage">
    <h2>{stage}</h2>
    <Droppable droppableId={stage}>
      {(provided) => (
        <div ref={provided.innerRef} {...provided.droppableProps} className="task-list">
          {tasks.map((task, index) => (
            <Task key={task.id} task={task} index={index} />
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  </div>
);

export default Stage;
