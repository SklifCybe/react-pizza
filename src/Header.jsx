import React from 'react';

import Button from './Button';

import pizzaLogo from './assets/img/pizza-logo.svg';

function Header() {
  return (
    <div>
      <div className="header">
        <div className="container">
          <div className="header__logo">
            <img width="38" src={pizzaLogo} alt="Pizza logo" />
            <div>
              <h1>React Pizza</h1>
              <p>самая вкусная пицца во вселенной</p>
            </div>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}

export default Header;
