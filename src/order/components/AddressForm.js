import React from 'react';
import Field from '../../shared/formstuff/Field';
import svgSprite from '../../images/sprite.svg';

const AddressForm = ({close}) => {
  return (
    <div className="address_form bg-w br">
      <header className="sp-btw address_form_header mb-2 bord-b-1">
        <h2 className="heading_med">Edit Address</h2>
        <button onClick={close}>
          <svg className="small_svg">
            <use xlinkHref={svgSprite + '#close'} />
          </svg>
        </button>
      </header>
      <form method="POST">
        <Field
          type="text"
          placeholder="e.g john bobo"
          label={`name`}
          name={`name`}
        />
        <Field
          type="tel"
          placeholder="enter your mobile number"
          label={`mobile number`}
          name={`phone`}
        />
        <Field
          type="text"
          placeholder="e.g Abuja"
          label={`city`}
          name={`name`}
        />
        <Field
          type="text"
          placeholder="e.g Ne block 6 Adama Traore street"
          label={`address`}
          name={`address`}
          typeOfField="textarea"
        />

        <button
          type="submit"
          className="form_submit cap btn_yellow btn_large weit-2 br"
        >
          Add address
        </button>

      </form>
    </div>
  );
};

export default AddressForm;
