import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>InstaClone</h1>
      <Link to="/">Home Page</Link> | <Link to="/TestPage">Test Page</Link>
    </div>
  );
}

export default Header;
