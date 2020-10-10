import React from 'react';
import Navbar from './Navbar';

function Header() {

  return (
    <div>
      <div className="headerPadre">
        <div className="logo">
          <a href="#header">
            <img src="src/assets/img/la.png" alt="logo" id="imagen" />
          </a>
        </div>

        <Navbar />
      </div>
    </div>
  );
}

export default Header;


