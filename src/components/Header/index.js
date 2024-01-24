import React from 'react';
import { Link } from 'react-router-dom';
import "./styles.css"

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
}

export default Header;
