import React, {useState} from 'react';
import {Fragment} from 'react';
import UseModal from '../../shared/hooks/UseModal';
import Modal from '../../shared/uielements/Modal';
import ConfirmPhoneForm from '../components/ConfirmPhoneForm';

const PhoneInput = ({value, onChange, onSubmit}) => {
  const [type, setType] = useState ('tel');
  const {isOpen, openModal, closeModal} = UseModal (false);
  const dis = !value.length || value.length < 8 || !/^\+?\d+$/.test (value);
  return (
    <Fragment>

      <div className="form_group  phone_input">
        <label htmlFor="" className="form_label cap col-g-svg ">
          mobile number{' '}
        </label>
        <div className="phone_input_form">
          <input
            className="form_input br"
            type={type}
            value={value}
            onChange={e => onChange (e.target.value)}
          />
          <button
            className=" cap heading_small weit-2 br btn_yellow "
            disabled={dis}
            onClick={openModal}
          >
            login
          </button>
        </div>
      </div>

      <Modal isOpen={isOpen} close={closeModal}>
        <ConfirmPhoneForm />
      </Modal>

    </Fragment>
  );
};

export default PhoneInput;
