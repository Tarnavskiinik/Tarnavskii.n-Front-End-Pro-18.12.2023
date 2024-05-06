export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';

export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: {
    text,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: {
    id,
  },
});

export const fetchTodos = () => async (dispatch) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    if (!response.ok) {
      throw new Error('Failed to fetch todos');
    }
    const data = await response.json();
    dispatch({ type: FETCH_TODOS_SUCCESS, payload: data });
    return data; 
  } catch (error) {
    dispatch({ type: FETCH_TODOS_FAILURE, payload: error.message });
    throw error;
  }
};