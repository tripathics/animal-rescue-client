import React from 'react';
import logo from './logo.jpg'
class Logo extends React.Component {
  render() {
    return (
      <div>
        <img src={logo} alt="Logo" />
      </div>
    );
  }
}

export default Logo;
