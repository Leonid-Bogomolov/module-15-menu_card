import React, { useState } from "react";
import './header.css'
import Main from '../Main/Main'

const Header = () => {

  const [showCardContainer, setShowMenu] = useState(false)

  return (
    <div className="header">
      <h1>Открой Картотеку!</h1>
      <div className="outBurger">
        <div className="Burger" onClick={() => setShowMenu(!showCardContainer)}>
          <div className="burger__core"></div>
          <div className="burger__core"></div>
          <div className="burger__core"></div>
        </div>
      </div>
      <div className={showCardContainer ? "cardContainer" : "hidden"}>
        <Main />
      </div>
    </div>
  );
}

export default Header;
