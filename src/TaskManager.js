// components/TaskManager.js
import React, { useState } from 'react';
import Stage from './components/Stage';
import './App.css'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const stages = ['To Do', 'In Progress', 'Done'];

const generateMockData = () => {
  const mockData = [];

  for (let i = 1; i <= 5; i++) {
    mockData.push({ id: i, title: `Task ${i}`, stage: stages[i % stages.length] });
  }

  return mockData;
};

const TaskManager = () => {
  const [tasks, setTasks] = useState(generateMockData());

  const moveTask = (result) => {
    if (!result.destination) return;

    const updatedTasks = [...tasks];
    const [removed] = updatedTasks.splice(result.source.index, 1);
    updatedTasks.splice(result.destination.index, 0, removed);

    setTasks(updatedTasks);
  };

  return (
    <DragDropContext onDragEnd={moveTask}>
      <div className="task-manager">
        <h1>React Task Manager</h1>
        <Droppable droppableId="all-stages" direction="horizontal" type="stage">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} className="stage-container">
              {stages.map((stage, index) => (
                <Stage
                  key={stage}
                  stage={stage}
                  tasks={tasks.filter((task) => task.stage === stage)}
                  onMoveTask={moveTask}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default TaskManager;
