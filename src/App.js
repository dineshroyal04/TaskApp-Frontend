// App.js
import React from 'react';
import './App.css';
import TaskManager from './TaskManager';
import LoggedIn from './components/Logged';

const App = () => {
  return (
    <LoggedIn>
      <div className="App">
        <TaskManager />
      </div>
    </LoggedIn>
  );
};

export default App;
