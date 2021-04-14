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

    case Actions.REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter (({id}) => id !== action.payload.id),
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
