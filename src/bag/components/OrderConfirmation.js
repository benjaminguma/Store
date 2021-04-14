import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import FallBackScreen from './FallBackScreen';

const OrderConfirmation = () => {
  return (
    <FallBackScreen
      image="happy"
      header={
        <Fragment>
          <h4 className="heading_small cap col-bl-1 weit-2 block">
            Thank you!
          </h4>
          <h4 className="heading_small cap col-bl-1 weit-2">
            Your order has been placed successfully
          </h4>
        </Fragment>
      }
      body={
        <Fragment>
          <p className="mb-1">start shopping to add items in your bag</p>
          <p className="mb-1 cap center-flex">
            <span>
              order number:
            </span>
            &nbsp;
            <span className="col-g-svg weit-2">
              john-271e
            </span>
          </p>
        </Fragment>
      }
      footer={
        <Fragment>
          <Link
            to="/orderinfo/3"
            className=" btn_large btn_bord weit-2 br heading_small cap"
          >
            Track order
          </Link>
          <Link
            to="/"
            className=" btn_large btn_yellow weit-2 br heading_small cap"
          >
            continue shopping
          </Link>
        </Fragment>
      }
      classes="split"
    />
  );
};

export default OrderConfirmation;
