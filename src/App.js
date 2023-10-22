import { Fragment } from 'react';

import Header from './Components/Header';
import Menu from './Components/Menu';

import s from './App.module.scss';

function App() {
  return (
    <Fragment>
      <Header />
      <Menu />
    </Fragment>
  )
}

export default App;
