import React from 'react';
import { Link } from 'react-router-dom'
import './navbar.css';

const Navbar = () => {
  return (
    <header className="simple-blog__header">
      <h1>Simple Blog</h1>
      <nav>
        <ul className="simple-blog__nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/articles">Articles</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;