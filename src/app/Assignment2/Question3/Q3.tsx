'use client';

import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import {
  containerStyle,
  headingStyle,
  inputSectionStyle,
  inputStyle,
  addButtonStyle,
  todoListStyle,
  todoItemStyle,
  completedTodoStyle,
  checkboxStyle,
  todoTextStyle,
  deleteButtonStyle,
  emptyMessageStyle
} from "./Q3.css";

// Define the shape of a Todo item
interface Todo {
  text: string;
  completed: boolean;
}

function ToDoList() {
  // State to store all todos
  const [todos, setTodos] = useState<Todo[]>([]);
  // State to store input value
  const [input, setInput] = useState<string>("");

  // Function to add new todo
  const addTodo = () => {
    if (!input.trim()) return; // Don't add empty todos
    setTodos([
      ...todos,
      { text: input.trim(), completed: false },
    ]);
    setInput(""); // Clear input after adding
  };

  // Function to toggle completed status by index
  const toggleCompleted = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed; 
    setTodos(newTodos);
  };

  // Function to delete todo by index
  const deleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Function to handle Enter key press
  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>My To-Do List</h1>
      
      {/* Input Section */}
      <div style={inputSectionStyle}>
        <input
          value={input}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}  // Changed from onClick to onKeyDown
          placeholder="Add new todo..."
          style={inputStyle}
        />
        <button onClick={addTodo} style={addButtonStyle}>
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul style={todoListStyle}>
        {todos.length === 0 ? (
          <div style={emptyMessageStyle}>
            No todos yet. Add one above!
          </div>
        ) : (
          todos.map((todo, index) => (
            <li 
              key={index} 
              style={todo.completed ? completedTodoStyle : todoItemStyle}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleted(index)}
                style={checkboxStyle}
              />
              <span style={todoTextStyle}>
                {todo.text}
              </span>
              <button 
                onClick={() => deleteTodo(index)}
                style={deleteButtonStyle}
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default ToDoList;
