import React from 'react';

function Categories({ items = [] }) {
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
              className={`${activeItem === index ? 'active' : ''}`}
              onClick={() => selectItem(index)}>
              {name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Categories;
