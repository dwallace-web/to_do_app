import './App.css';
import TaskBody from './components/Tasks/TaskBody';
import Menu from './components/Body/Menu';
import { useState, useEffect } from 'react';

function App() {
  const [token, setToken] = useState('');
  
  return (
    <div className="App">
      <Menu />
      <TaskBody />
    </div>
  );
}

export default App;