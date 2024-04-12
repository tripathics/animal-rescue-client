// Navbar.js
import React from 'react';
import Logo from './Logo.jsx'; // Import the Logo component

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="logo-container">
          <Logo />
        </div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
