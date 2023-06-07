import './App.css';
import React from 'react'
import { Link, Outlet } from 'react-router-dom';


function App() {
  return (
    <>
      <div className='container'>
        <Link to='/invoices'>Invoices</Link>
        <Link to='/expenses'>Expenses</Link>
      </div>
      <Outlet />
    </>

  );
}

export default App;
