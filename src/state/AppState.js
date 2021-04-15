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
  const addToCart = productName => {
    if (state.cart.some (item => item.productName === productName)) return;
    dispatch ({
      type: Actions.ADD_TO_CART,
      payload: productName,
    });
  };
  const updateCartItem = (productName, count, prevCount) => {
    if (prevCount === 1 && count === -1) {
      return dispatch ({
        type: Actions.REMOVE_CART_ITEM,
        payload: productName,
      });
    }
    dispatch ({
      type: Actions.UPDATE_CART_ITEM,
      payload: {
        productName,
        count,
      },
    });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setCategory,
        addToCart,
        updateCartItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
