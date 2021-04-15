import React, {useState} from 'react';
import {CirclePicker} from 'react-color';
import UseModal from '../../shared/hooks/UseModal';

const ProductOrderItem = ({productName, originalPrice, imageUrls}) => {
  const {closeModal, isOpen, openModal} = UseModal ();
  const {color, setColor} = useState ('red');
  return (
    <article className="order_item">
      <figure className="br">
        <img src={imageUrls[0]} alt="order_item_image" />
      </figure>
      <div className="order_item_box">
        <h4 className="heading_tiny col-bl-2 weit-2 cap">
          {productName}
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
              <span
                onClick={() => {
                  if (isOpen) closeModal ();
                  else openModal ();
                }}
                style={{color}}
                className="color_box round"
              />
              {isOpen &&
                <CirclePicker
                  onChangeComplete={col => {
                    setColor (col.hex);
                  }}
                />}

            </span>

          </li>
        </ul>

        <div className="order_item_desc sp-btw flexi">
          <div className="badge badge_ash  br upp">
            X2
          </div>

          <p className="upp col-g-1 heading_tiny weit-2">
            {originalPrice}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ProductOrderItem;
