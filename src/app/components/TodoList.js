'use client';
import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [todoInput, setTodoInput] = useState('');

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  }

  const handleAddTodo = () => {
    
      const newTodo = {
        id: Math.random(), 
        text: todoInput
      };
      setTodos([...todos, newTodo]); 
      setTodoInput(''); 
    
  }

  const handleRemoveTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <div>
        <input type="text" value={todoInput} onChange={handleInputChange} placeholder="Enter your task"/>
        <button onClick={handleAddTodo}>Add Task</button>
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;

