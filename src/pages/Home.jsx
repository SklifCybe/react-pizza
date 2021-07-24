import React from 'react';
import { useSelector } from 'react-redux';

import { Categories, SortPopup, PizzaBlock } from '../components';

import { useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filters';

function Home() {
  const items = useSelector(({ pizzas }) => pizzas.items);

  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          items={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
          onClickItem={(index) => {
            dispatch(setCategory(index));
          }}
        />
        <SortPopup
          items={[
            { name: 'популярности', type: 'popular' },
            { name: 'цене', type: 'price' },
            { name: 'алфавиту', type: 'alphabet' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {items.map((item) => {
          return <PizzaBlock key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default Home;
