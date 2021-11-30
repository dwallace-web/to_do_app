import './App.css';
import TaskBody from './components/Tasks/TaskBody';
import Menu from './components/Body/Menu';
import { useState } from 'react';



function App() {
  const [Token, setToken] = useState('');
  return (
    <div className="App">
      <Menu />
      <TaskBody />
    </div>
  );
}

export default App;