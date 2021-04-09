import React from "react";

import "./Header.css";

function Header({black}) {
  return (
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img
            src="netflix.png"
            alt="netflix"
          />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="user.jpg"
            alt="Usuário"
          />
        </a>
      </div>
    </header>
  );
}

export default Header;
