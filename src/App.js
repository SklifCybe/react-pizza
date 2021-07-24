import React from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { Header } from './components';
import { Home, Cart } from './pages';

import { setPizzas } from './redux/actions/pizzas';

// function App() {
//   const [pizzas, setPizzas] = React.useState([]);

//   React.useEffect(() => {
//     axios.get('http://localhost:3000/db.json').then((res) => setPizzas(res.data.pizzas));
//   }, []);

//   return (
//     <div className="wrapper">
//       <Header />
//       <div className="content">
//         <Route exact path="/" render={() => <Home items={pizzas} />} />
//         <Route exact path="/cart" component={Cart} />
//       </div>
//     </div>
//   );
// }

class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then((res) => {
      this.props.setPizzas(res.data.pizzas);
    });
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route exact path="/" render={() => <Home items={this.props.items} />} />
          <Route exact path="/cart" component={Cart} />
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
