import React, {useState} from 'react';
import PhoneInput from './PhoneInput';

const VerifyPhone = ({submitHandler}) => {
  const [value, setValue] = useState ('');

  return (
    <div className="phone_verify">

      <PhoneInput
        value={value}
        onChange={val => setValue (val)}
        onSubmit={val => {
          submitHandler (val);
        }}
      />

    </div>
  );
};

export default VerifyPhone;
