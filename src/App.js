import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const styles = {
    todoApp: {
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      marginTop: '50px',
    },
    container: {
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9',
    },
    inputGroup: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: '20px',
    },
    input: {
      padding: '10px',
      fontSize: '16px',
      flexGrow: 1,
      marginRight: '10px',
    },
    button: {
      padding: '10px 15px',
      fontSize: '16px',
      cursor: 'pointer',
      backgroundColor: '#007BFF',
      color: '#FFFFFF',
      border: 'none',
      borderRadius: '4px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    ul: {
      listStyleType: 'none',
      padding: 0,
    },
    li: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '10px 0',
      fontSize: '18px',
      padding: '10px',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#fff',
    },
    completed: {
      textDecoration: 'line-through',
      backgroundColor: '#e0ffe0',
    },
    deleteButton: {
      marginLeft: '10px',
      padding: '5px 10px',
      fontSize: '14px',
      cursor: 'pointer',
      backgroundColor: '#DC3545',
      color: '#FFFFFF',
      border: 'none',
      borderRadius: '4px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    },
  };

  return (
    <div style={styles.todoApp}>
      <div style={styles.container}>
        <h1>Todo List</h1>
        <div style={styles.inputGroup}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={styles.input}
            placeholder="Enter a todo"
          />
          <button onClick={addTodo} style={styles.button}>Add</button>
        </div>
        <ul style={styles.ul}>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{ ...styles.li, ...(todo.completed ? styles.completed : {}) }}
            >
              <span
                onClick={() => toggleTodo(todo.id)}
                style={{ cursor: 'pointer' }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={styles.deleteButton}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoApp;
