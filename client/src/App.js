import './App.css';
import TaskBody from './components/Tasks/TaskBody';
import { useState, useEffect } from 'react';
import SignIn from './components/Body/SignIn'
import SignUp from './components/Body/SignUp'
import { Button } from 'react-bootstrap';
import apiurl from './environment';

function App() {
  const [token, setToken] = useState('');


  useEffect(() => {
    if (localStorage.getItem('token')) {

      let localToken = localStorage.getItem('token')
      setToken(localToken)

    }
  })

  useEffect(() => {
    async function checkToken(e) {
      await fetch(`${apiurl}/api/user/verified`, {
        method: 'GET',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': token
        })
      })
        .then(response => response.json())
        .then(veri => console.log(veri))
        .catch(error => console.log('error', error));

    }
    checkToken();
  }, [])




  async function updateToken(newToken) {
    setToken(newToken);
    localStorage.setItem('token', newToken);
    console.log('View token ---->', localStorage.token)
  }

  async function clearToken() {
    await setToken('');
    localStorage.clear();
    console.log('token cleared')
  }


  return (
    <div className="App">
      <Button type="submit" onClick={clearToken}>Log out</Button>
      <SignUp updateToken={updateToken} token={token} />
      <SignIn updateToken={updateToken} token={token} />
      <TaskBody token={token} />
    </div>
  );
}

export default App;