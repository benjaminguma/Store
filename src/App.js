import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './shared/uielements/Header';
// PAGES
import Home from './home/pages/Home';
import BagPage from './bag/pages/BagPage';
import ProductPage from './products/pages/ProductDiscription';
import OrderTable from './order/pages/OrderTable';
import OrderaddAddressPage from './order/pages/OrderaddAddressPage';

function App () {
  return (
    <React.Fragment>
      <Header />

      <Switch>

        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/product/someProduct">
          <ProductPage />
        </Route>
        <Route exact path="/bag">
          <BagPage />
        </Route>
        <Route exact path="/orderinfo/:id">
          <OrderTable />
        </Route>
        <Route exact path="/account/">
          <OrderaddAddressPage />
        </Route>
      </Switch>

    </React.Fragment>
  );
}

export default App;
