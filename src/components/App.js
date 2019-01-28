import React from 'react';
import ToDoItem from './ToDoItem';

import '../styles/App.css';

function App() {
  return (
    <div className="todo-list"> 
      <h1>ToDo App</h1>
      <ToDoItem />
      <ToDoItem />
      <ToDoItem />
    </div>
  )
}

export default App