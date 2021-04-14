import React from 'react';
import useCtxHook from '../../shared/hooks/UseCtxHook';
import CartItem from '../components/CartItem';
import CartTotal from '../components/CartTotal';
import FallBackScreen from '../components/FallBackScreen';

const Cart = () => {
  const {cart} = useCtxHook ();
  console.log (cart);
  return (
    <section className="cart">
      <div className="box sp-btw flexi">
        <div className="box_heading flexi">
          <h2 className="heading_small weit-3 cap col-bl-1">Bag</h2>
          <span className=" badge badge_blue big br weit-2 ml-1">
            6
          </span>
        </div>
        <div className="box_side">
          test text
        </div>
      </div>
      <FallBackScreen isOpen={!!cart.length}>

        <div className="cart_list mt-3">
          {cart.map ((item, index) => <CartItem {...item} key={index} />)}

        </div>
        <CartTotal />

      </FallBackScreen>
    </section>
  );
};

export default Cart;
