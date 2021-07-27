import React from 'react';
import { useSelector } from 'react-redux';

import { Categories, SortPopup, PizzaBlock, PizzaLoadingBlock } from '../components';

import { useDispatch } from 'react-redux';
import { setCategory, setSortBy } from '../redux/actions/filters';
import { fetchPizzas } from '../redux/actions/pizzas';

function Home() {
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const {category, sortBy} = useSelector(({ filters }) => filters);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          activeItem={category}
          items={['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']}
          onClickItem={(index) => {
            dispatch(setCategory(index));
          }}
        />
        <SortPopup
          onClickItem={(index) => {
            dispatch(setSortBy(index));
          }}
          activeItem={sortBy.type}
          items={[
            { name: 'популярности', type: 'popular', order: 'desc' },
            { name: 'цене', type: 'price', order: 'desc' },
            { name: 'алфавиту', type: 'name', order: 'asc' },
          ]}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoaded
          ? items.map((item) => {
              return <PizzaBlock key={item.id} {...item} />;
            })
          : Array(12)
              .fill(0)
              .map((_, index) => <PizzaLoadingBlock key={index} />)}
      </div>
    </div>
  );
}

export default Home;
