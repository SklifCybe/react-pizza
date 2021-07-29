import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

function Button({children}) {
  return (
    <Link to="/cart" className="button button--cart">
      {children}
    </Link>
  ) 
}

Button.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object)
}

export default Button;
