import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import Todo from './components/Todo';
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Todo />
      </div>
    </Provider>
  );
}

export default App;