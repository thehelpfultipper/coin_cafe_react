import { Fragment, useContext } from 'react';

import Header from './Components/Header';
import Menu from './Components/Menu';
import CartContext from './Context/cart-context';
import CartList from './Components/CartList';

function App() {
  let { items, isCartShowing } = useContext(CartContext);

  return (
    <Fragment>
      { isCartShowing && items.length > 0 && <CartList /> }
      <Header />
      <Menu />
    </Fragment>
  )
}

export default App;
