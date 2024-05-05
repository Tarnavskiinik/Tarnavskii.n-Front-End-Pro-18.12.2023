import { ADD_TODO, TOGGLE_TODO } from './actions';

const initialState = {
  todos: [
    { id: 1, text: 'Сходить за лебом', done: false },
    { id: 2, text: 'Сходить на тренинг', done: false },
    { id: 3, text: 'Отвести сына на тренировку', done: false },
  ],
  nextId: 4,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.nextId,
            text: action.payload.text,
            done: false,
          },
        ],
        nextId: state.nextId + 1,
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === action.payload.id ? { ...todo, done: !todo.done } : todo
        ),
      };
    default:
      return state;
  }
};

export default todoReducer;