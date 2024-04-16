import './App.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/SideBar';

function App() {
  return (
    <div className="App">
    <Header />
    <div className="wrapper">
      <Sidebar/>
      <Main />
    </div>
  </div>
);
}

export default App;
