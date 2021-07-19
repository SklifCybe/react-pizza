import React from 'react';

function Button({children}) {
  return (
    <a href="/cart.html" className="button button--cart">
      {children}
    </a>
  ) 
}

export default Button;
