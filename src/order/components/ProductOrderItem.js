import React from 'react';
import {CirclePicker} from 'react-color';
import test from '../../images/photos/test.jpg';

const ProductOrderItem = () => {
  return (
    <article className="order_item">
      <figure className="br">
        <img src={test} alt="order_item_image" />
      </figure>
      <div className="order_item_box">
        <h4 className="heading_tiny col-bl-2 weit-2 cap">
          norbury scandilanian chair for the best players
        </h4>
        <ul className="order_item_list flexi ">
          <li>
            <h6 className="col-g-light order weit-1 order_item_list_title small">
              size :
            </h6>
            <span className="col-bl cap">
              Medium
            </span>

          </li>
          <li className="flexi ml-2">
            <h6 className="col-g-light weit-1 small order_item_list_title">
              color :
            </h6>
            <span className="col-bl cap color_picker_box flexi">
              <span className="color_box round" />
              {/* <CirclePicker /> */}
            </span>

          </li>
        </ul>

        <div className="order_item_desc sp-btw flexi">
          <div className="badge badge_ash  br upp">
            X2
          </div>

          <p className="upp col-g-1 heading_tiny weit-2">
            ugx 12,700
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProductOrderItem;
