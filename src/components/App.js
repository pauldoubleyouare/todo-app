import React from 'react';
import ToDoItem from './ToDoItem';
import todosData from './todosData';

import '../styles/App.css';

function App() {
  const todoItems = todosData.map(todoItem => <ToDoItem key={todoItem.id} todo={todoItem}/>);
  return (
    <div className="todo-list"> 
      <h1>ToDo App</h1>
      {todoItems}
    </div>
  );
}

export default App;