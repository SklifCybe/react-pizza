import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Categories({ items, onClickItem, activeItem }) {
  return (
    <div className="categories">
      <ul>
        {items.map((name, index) => {
          return (
            <li
              key={`${name}_${index}`}
              className={classNames({
                active: activeItem === index
              })}
              onClick={() => onClickItem(index)}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired),
  onClickItem: PropTypes.func,
  activeItem: PropTypes.number.isRequired
}

Categories.defaultProps = {
  items: [],
  onClickItem: null,
  activeItem: 0
}

export default Categories;
