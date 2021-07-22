import React from 'react';
import PropTypes from 'prop-types';

import { Categories, SortPopup, PizzaBlock } from '../components';

function Home({ items }) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories items={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
        <SortPopup items={['популярности', 'цене', 'алфавиту']} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((item) => {
          return <PizzaBlock key={item.id} {...item} />
        })}
      </div>
    </div>
  );
}

Home.propTypes = {
  items: PropTypes.array
};

Home.defaultProps = {
  items: []
};

export default Home;