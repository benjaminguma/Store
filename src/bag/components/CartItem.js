import React from 'react';
import Counter from '../../shared/uielements/Counter';

const CartItem = () => {
  return (
    <div className="cart_item">
      <div className="cart_item_title">
        <h5 className="heading_tiny weit-3 col-bl-2 cap">
          Earings and magntikka
        </h5>
        <small className="smaller col-g-light cap">
          per piece
        </small>
      </div>
      <div className="cart_item_detail sp-btw ">
        <div className="cart_item_price">
          <p className="heading_tiny weit-2 upp col-g-svg">
            ugx 118,000
          </p>
          <del className="smaller col-g-light upp">
            ugx 190,000
          </del>
        </div>
        <div className="cart_item_counter ">
          <Counter />

        </div>
      </div>
    </div>
  );
};

export default CartItem;
