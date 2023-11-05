import { Fragment } from 'react';

import Header from './Components/Header';
import Menu from './Components/Menu';
import CartContextProvider from './Context/CartProvider';
import CartList from './Components/CartList';

import s from './App.module.scss';

function App() {
  return (
    <CartContextProvider>
      <CartList />
      <Header />
      <Menu />
    </CartContextProvider>
  )
}

export default App;
