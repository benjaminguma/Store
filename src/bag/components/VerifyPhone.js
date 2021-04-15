import React, {useState} from 'react';
import PhoneInput from './PhoneInput';

const VerifyPhone = ({updateHandler}) => {
  // const {isOpen, openModal, closeModal} = UseModal (false);
  const [value, setValue] = useState ('');

  return (
    <div className="phone_verify">

      <PhoneInput
        value={value}
        onChange={val => setValue (val)}
        onSubmit={val => {
          updateHandler (val);
        }}
      />

    </div>
  );
};

export default VerifyPhone;
