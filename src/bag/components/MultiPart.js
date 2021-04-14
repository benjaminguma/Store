import React, {Children} from 'react';
import {Link} from 'react-router-dom';
import HeadText from '../../shared/smallComponents/HeadText';
import Verifybutton from '../../shared/smallComponents/Verifybutton';
import Address from './Address';
import VerifyPhone from './VerifyPhone';

const MultiPart = ({children, handleRedirect}) => {
  return (
    <div className="verify_form">
      <ul className="verify_form_list">
        <li className="verify_form_list_item">
          <Verifybutton status="done" />
          <HeadText
            head="Account"
            text="to place your order, login by entering your 10 digit mobile number"
          />
          <VerifyPhone />
        </li>
        <li className="verify_form_list_item">
          <Verifybutton status="active" />
          <HeadText
            head="Delivery"
            text="select your delivery address from the existing one or add a new one"
          />
          <AddressList>
            <Address />
            <Address empty />
          </AddressList>

        </li>

        <li className="verify_form_list_item">
          <Verifybutton />

          <HeadText head="Payment" text="select Your payment method" />
          <div>

            <label htmlFor="test" className="checkbox flexi">
              <input type="radio" name="test" />
              <span className="checkbox_display round mr-1" />
              <span className="checkbox_text">this is some check text</span>
            </label>
            <button
              onClick={handleRedirect}
              className="btn_yellow btn_large heading_med br"
            >
              place Order
            </button>
          </div>

        </li>

      </ul>

    </div>
  );
};

function AddressList({children}) {
  return (
    <div className="address_list">
      {children}
    </div>
  );
}

export default MultiPart;
