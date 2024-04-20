import React, { useState } from 'react';

function Todo() {
    const [todos, setTodos] = useState([
        { id: 1, text: 'Сходить за лебом', done: false },
        { id: 2, text: 'Сходить на тренинг', done: false },
        { id: 3, text: 'Отвести сына на тренировку', done: false },
    ]);
    const [inputValue, setInputValue] = useState('');
    const [nextId, setNextId] = useState(4);

    const todoClick = (id) => {
        const newTodoArr = todos.map(todo =>
            todo.id === id ? { ...todo, done: !todo.done } : todo
        );
        setTodos(newTodoArr);
    };

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const formSubmit = (e) => {
        e.preventDefault();
        const newTodo = {
            id: nextId,
            text: inputValue,
            done: false
        };
        setTodos([...todos, newTodo]);
        setNextId(nextId + 1);
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