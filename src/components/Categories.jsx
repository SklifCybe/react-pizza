import React from 'react';

// class Categories extends React.Component {
//   state = {
//     activeItem: 0,
//   };

//   selectedItem = (index) => {
//     // this.setState({
//     //   activeItem: index,
//     // });
//     this.state.activeItem = index;
//     console.log(this.state);
//     this.forceUpdate();
//   };

//   render() {
//     const { items } = this.props;

//     return (
//       <div className="categories">
//         <ul>
//           {items.map((name, index) => {
//             return (
//               <li
//                 key={`${name}_${index}`}
//                 className={`${this.state.activeItem === index ? 'active' : ''}`}
//                 onClick={() => this.selectedItem(index)}>
//                 {name}
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   }
// }

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
