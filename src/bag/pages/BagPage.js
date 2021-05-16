import React from 'react';
import {Link} from 'react-router-dom';
import FallBackScreen from '../components/FallBackScreen';

import Confirmation from '../components/Confirmation';
import useCtxHook from '../../shared/hooks/UseCtxHook';

// <OrderConfirmation />;
const CartPage = () => {
  const {cart}= useCtxHook();
  return (
    <FallBackScreen
      isOpen={!!cart.length}
      big={true}
      footer={
        <Link
          to="/"
          className=" btn_large btn_yellow weit-2 br heading_small cap"
        >
          back to homepage
        </Link>
      }
    >

      <Confirmation />

    </FallBackScreen>
  );
};

export default CartPage;
