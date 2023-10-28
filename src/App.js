import { Fragment } from 'react';

import Header from './Components/Header';
import Menu from './Components/Menu';
import CartContextProvider from './Context/CartProvider';

import s from './App.module.scss';

function App() {
  return (
    <CartContextProvider>
      <Header />
      <Menu />
    </CartContextProvider>
  )
}

export default App;
