import React from 'react';

const PhoneInput = () => {
  return (
    <div className="form_group  phone_input">
      <label htmlFor="" className="form_label cap col-g-svg ">
        mobile number{' '}
      </label>
      <form className="phone_input_form">
        <input className="form_input br" />
        <button className="btn_disabled cap heading_small weit-2 br" disabled>
          login
        </button>
      </form>
    </div>
  );
};

export default PhoneInput;
