import * as Actions from './actions';

export default function (state, action) {
  const {productCategories, cart, addresses, category} = state;
  switch (action.type) {
    case Actions.ADD_TO_CART: {
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...productCategories[category].productDetails.find (
              ({productName}) => productName === action.payload
            ),
            count: 1,
          },
        ],
      };
    }

    case Actions.REMOVE_CART_ITEM: {
      return {
        ...state,
        cart: cart.filter (({productName}) => productName !== action.payload),
      };
    }
    case Actions.UPDATE_CART_ITEM: {
      return {
        ...state,
        cart: cart.map (item => {
          if (item.productName === action.payload.productName)
            return Object.assign (
              {},
              {...item, count: item.count + action.payload.count}
            );
          return item;
        }),
      };
    }
    case Actions.SET_CATEGORY: {
      return {
        ...state,
        category: action.payload,
      };
    }

    default:
      return state;
  }
}
