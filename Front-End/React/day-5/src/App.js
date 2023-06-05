import { useState } from 'react';
import './App.css';
import UsersList from './components/UsersList';
import UsersListFunc from './components/UsersListFunc';

function App() {

  const [showUsers, setShowUsers] = useState(false)

  return (
    <div className='d-grid m-4'>
      <button className='btn btn-primary' onClick={() => setShowUsers(!showUsers)}>Show Users</button>
      {showUsers ? <UsersListFunc /> : null}
    </div>
  );
}

export default App;
