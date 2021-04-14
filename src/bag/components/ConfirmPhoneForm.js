import React, {useState} from 'react';
import Single from '../../shared/formstuff/Single';
import svgSprite from '../../images/sprite.svg';

const ConfirmPhoneForm = () => {
  const [value, setvalue] = useState ('');

  return (
    <div className="confirm_form u-center br bg-w">
      <header className=" confirm_form_header bord-b-1 ">
        <h3 className="heading_med cap col-bl-1">verify your number</h3>
        <button className="top_right">
          <svg className="small_svg ">
            <use xlinkHref={svgSprite + '#close'} />
          </svg>
        </button>
      </header>
      <form action="">
        <p className="u-center heading_tiny">
          please enter the verification code sent via sms to
          {' '}
          <span className="weit-1 col-g-svg">+2348141908042</span>
        </p>
        <div className="confirm_form_pack">
          <Single />
          <Single />
          <Single />
          <Single />
        </div>

        <button className="col-b heading_tiny cap weit-2"> resend code</button>
      </form>
    </div>
  );
};

export default ConfirmPhoneForm;
