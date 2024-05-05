import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, toggleTodo } from '../actions';

function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const [inputValue, setInputValue] = useState('');

  const todoClick = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputValue));
    setInputValue('');
  };

  return (
    <div>
      <ul>
        {todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => todoClick(todo.id)}
            style={{cursor: 'pointer', textDecoration: todo.done ? 'line-through' : 'none' }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <form onSubmit={formSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Добавить</button>
      </form>
    </div>
  );
}

export default Todo;