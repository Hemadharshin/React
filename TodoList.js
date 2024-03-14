import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input 
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a new todo"
      />  
      <button onClick={handleAddTodo} style={{margin:"10px",backgroundColor:'green',color:'white',border:'none'}} >Add </button>
      <ol>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleDeleteTodo(todo.id)}
            style={{backgroundColor:'red',color:'white',border:'2px white'}}>Delete</button>
            <button onClick={() => handleEditTodo(todo.id, prompt('Edit Todo', todo.text))}
            style={{margin:'10px',backgroundColor:'blue',color:'white',border:'2px white'}}>Edit</button>
            
          </li>
        ))}
      </ol>
    </div>
  );
};

export default TodoList;
