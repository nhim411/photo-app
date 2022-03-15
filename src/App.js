import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';

function App() {
  return (
    <div className='photo-app'>
      <Header />
      <Banner />
      <ul>
        <li>
          <Link to='/'>Go to Home</Link>
        </li>
        <li>
          <Link to='/photos'>Go to Photo</Link>
        </li>
        <li>
          <Link to='photos/add'>Go to Add new image</Link>
        </li>
        <li>
          <Link to='/photo/123'>Go to Edit photo page</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default App;
