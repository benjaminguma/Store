import React, {useReducer} from 'react';
import Data from '../data.json';

import AppContext from './context';
import reducer from './reducer';
import * as Actions from './actions';

const initialState = {
  productCategories: Data.categories,
  categories: Data.categories.map (({categoryName, productDetails}, id) => ({
    title: categoryName,
    count: productDetails.length,
    index: id,
  })),
  cart: [],
  addresses: [],
  category: 0,
};

const AppState = ({children}) => {
  const [state, dispatch] = useReducer (reducer, initialState);

  const setCategory = name => {
    dispatch ({
      type: Actions.SET_CATEGORY,
      payload: name,
    });
  };
  const addToCart = product_name => {
    dispatch ({
      type: Actions.ADD_TO_CART,
      payload: product_name,
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setCategory,
        addToCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
