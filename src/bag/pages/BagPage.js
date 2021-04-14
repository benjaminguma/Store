import React from 'react';
import {Link} from 'react-router-dom';
import FallBackScreen from '../components/FallBackScreen';

import Confirmation from '../components/Confirmation';
import Modal from '../../shared/uielements/Modal';
import ConfirmPhoneForm from '../components/ConfirmPhoneForm';
// <OrderConfirmation />;
const CartPage = () => {
  return (
    <FallBackScreen
      isOpen
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
      <Modal>
        <ConfirmPhoneForm />
      </Modal>
    </FallBackScreen>
  );
};

export default CartPage;
