import React from 'react';

const CartTotal = () => {
  return (
    <div className="cart_total">
      <div className="cart_total_box">
        <div className="sp-btw">
          <span className="col-g-svg heading_tiny col-bl-2 weit-2 cap">
            subtotal
          </span>
          <span className="col-g-svg heading_tiny col-bl-2 weit-2 upp">
            {' '}ugx 118,000
          </span>
        </div>
        <div className="sp-btw">
          <span className=" heading_tiny weit-2 col-bl-2 ">
            delivery
          </span>
          <span className=" heading_tiny weit-2  col-gr"> free </span>
        </div>
      </div>
      <div className="cart_total_box">
        <div className="sp-btw">
          <span className="col-g-svg heading_tiny weit-3 cap col-bl-1">
            total
          </span>
          <span className="col-g-svg heading_tiny upp weit-3 upp col-bl-1">
            {' '}ugx 118,000
          </span>
        </div>
        <div className="sp-btw">
          <em className="col-g-svg smaller col-g-light">
            {' '}inclusive of all taxes
          </em>

        </div>
      </div>
      <footer className="cart_total_footer">
        <p className="col-gr small weit-3">
          you are about to save
          {' '}
          <span className="upp"> ugx 98,000</span>
          {' '}
          on this order
        </p>
      </footer>
    </div>
  );
};

export default CartTotal;
