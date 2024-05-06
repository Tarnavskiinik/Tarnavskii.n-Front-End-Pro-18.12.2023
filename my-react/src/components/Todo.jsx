import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, toggleTodo, addTodo } from '../actions';

function Todo() {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);
  const [error, setError] = useState(null);
  const [newTodoText, setNewTodoText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(fetchTodos())
      .then(() => setLoading(false))
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, [dispatch]);

  const todoClick = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleInputChange = (e) => {
    setNewTodoText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodoText.trim() !== '') {
      dispatch(addTodo(newTodoText.trim()));
      setNewTodoText('');
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <>
          <ul>
            {todos.map(todo => (
              <li
                key={todo.id}
                onClick={() => todoClick(todo.id)}
                style={{ cursor: 'pointer', textDecoration: todo.done ? 'line-through' : 'none' }}
              >
                {todo.title}
              </li>
            ))}
          </ul>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={newTodoText}
              onChange={handleInputChange}
              placeholder="Enter new task"
            />
            <button type="submit">Add Task</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Todo;