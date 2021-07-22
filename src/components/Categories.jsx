import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function Categories({ items }) {
  console.log(items);
  const [activeItem, setActiveItem] = React.useState(0);

  const selectItem = (index) => {
    setActiveItem(index);
  };

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
              onClick={() => selectItem(index)}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Categories.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string.isRequired)
}

Categories.defaultProps = {
  items: []
}

export default Categories;
