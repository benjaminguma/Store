import React, {useContext} from 'react';
import {Switch, Route, useLocation} from 'react-router-dom';
import Header from './shared/uielements/Header';
import {AnimatePresence} from 'framer-motion';
// PAGES
import Home from './home/pages/Home';
import BagPage from './bag/pages/BagPage';
import ProductPage from './products/pages/ProductDiscription';
import OrderTable from './order/pages/OrderTable';
import OrderaddAddressPage from './order/pages/OrderaddAddressPage';
// GLOBAL_STATE
import AppState from './state/AppState';

function App () {
  const Loction = useLocation ();
  return (
    <AppState>
      <Header />
      <AnimatePresence exitBeforeEnter>

        <Switch location={Loction} key={Loction.key}>

          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/bag">
            <BagPage />
          </Route>
          <Route exact path="/orderinfo/:id">
            <OrderTable />
          </Route>
          <Route exact path="/:category/:productName">
            <ProductPage />
          </Route>
          <Route exact path="/account/">
            <OrderaddAddressPage />
          </Route>
        </Switch>
      </AnimatePresence>

    </AppState>
  );
}

export default App;
