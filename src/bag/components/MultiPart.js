import React, {Children, useReducer} from 'react';
import {Link} from 'react-router-dom';
import HeadText from '../../shared/smallComponents/HeadText';
import Verifybutton from '../../shared/smallComponents/Verifybutton';
import RenderIfTrue from '../../shared/smallComponents/RenderIfTrue';
import Address from './Address';
import VerifyPhone from './VerifyPhone';

const UPDATE = 'UPDATE';
const INC_COUNTER = 'INC_COUNTER';

const initialState = {
  fields: {
    phoneVerified: false,
    adddress: null,
    payOnDelivery: false,
  },
  formIsValid: false,
  counter: 1,
};

const detStatus = (i, j) => {
  if (i === j) return 'active';
  if (i > j) return '';
  if (i < j) return 'done';
};

const MultiPart = ({children, handleRedirect}) => {
  const [state, dispatch] = useReducer (reducer, initialState);
  const {counter, fields: {phoneVerified, payOnDelivery}} = state;
  const updateHandler = name => value => {
    dispatch ({
      type: UPDATE,
      payload: {
        name,
        value,
      },
    });
  };

  return (
    <div className="verify_form">
      <ul className="verify_form_list">
        <li
          className={`verify_form_list_item ${counter === 1 ? 'active' : ''}`}
        >
          <Verifybutton status={detStatus (1, counter)} />
          <HeadText
            head="Account"
            text={
              phoneVerified
                ? 'phone number has been verified successfully'
                : 'to place your order, login by entering your 10 digit mobile number'
            }
          />
          <RenderIfTrue condition={1 === counter}>

            <VerifyPhone submitHandler={updateHandler ('phoneVerified')} />
          </RenderIfTrue>
        </li>
        <li
          className={`verify_form_list_item ${counter === 2 ? 'active' : ''}`}
        >
          <Verifybutton status={detStatus (2, counter)} />
          <HeadText
            head="Delivery"
            text={
              'select your delivery address from the existing one or add a new one'
            }
          />
          <RenderIfTrue condition={2 === counter}>

            <AddressList>
              <Address submitHandler={updateHandler ('adddress')} />
              <Address empty />
            </AddressList>
          </RenderIfTrue>

        </li>

        <li
          className={`verify_form_list_item ${counter === 3 ? 'active' : ''}`}
        >
          <Verifybutton status={detStatus (3, counter)} />

          <HeadText head="Payment" text="select Your payment method" />
          <RenderIfTrue condition={3 === counter}>

            <div>

              <label htmlFor="test" className="checkbox flexi">
                <input
                  checked={payOnDelivery}
                  onChange={e =>
                    updateHandler ('payOnDelivery') (e.target.checked)}
                  type="radio"
                  name="test"
                  id="test"
                />
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
          </RenderIfTrue>

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

function reducer (state, action) {
  switch (action.type) {
    case UPDATE: {
      let isValid = true;
      for (let name in state.fields) {
        if (name !== action.payload.name)
          isValid = isValid && state.values[name];
        else isValid = isValid && action.payload.value;
      }
      return {
        ...state,
        fields: {
          ...state.fields,
          [action.payload.name]: action.payload,
        },
        formIsValid: isValid,
      };
    }
    case INC_COUNTER: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }
    default: {
      return state;
    }
  }
}

export default MultiPart;
