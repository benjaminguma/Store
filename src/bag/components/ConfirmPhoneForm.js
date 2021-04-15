import React, {useEffect, useState} from 'react';
import Single from '../../shared/formstuff/Single';
import svgSprite from '../../images/sprite.svg';
import {fadeIn} from '../../utils/animations';
import {AnimatePresence, motion} from 'framer-motion';

const ConfirmPhoneForm = ({close, onSubmit}) => {
  const [value, setvalue] = useState (new Array (4).fill (''));
  const [count, setCount] = useState (0);

  const updateValue = (val, index) => {
    let newValue;

    newValue = value.map ((char, id) => (index === id ? val : char));

    if (count && count === index && newValue[index] === '') {
      setCount (count - 1);
    } else {
      // if (count < value.length)
      setCount (count + 1);
    }
    setvalue ([...newValue]);
    if (!newValue.some (e => e === '' || e === ' ')) {
      onSubmit (true);
      close ();
    }
  };

  return (
    <AnimatePresence>

      <motion.div
        variants={fadeIn}
        initial="initial"
        animate="final"
        exit="initial"
        className="confirm_form u-center br bg-w"
      >
        <header className=" confirm_form_header bord-b-1 ">
          <h3 className="heading_med cap col-bl-1">verify your number</h3>
          <button className="top_right" onClick={close}>
            <svg className="small_svg ">
              <use xlinkHref={svgSprite + '#close'} />
            </svg>
          </button>
        </header>
        <form action="" onSubmit={e => e.preventDefault ()}>
          <p className="u-center heading_tiny">
            please enter the verification code sent via sms to
            {' '}
            <span className="weit-1 col-g-svg">+2348141908042</span>
          </p>
          <div className="confirm_form_pack">
            {value.map ((v, index) => (
              <Single
                value={v}
                changeHandler={val => updateValue (val, index)}
                key={index}
                count={count}
                id={index}
              />
            ))}

          </div>

          <button className="col-b heading_tiny cap weit-2">
            {' '}resend code
          </button>
        </form>
      </motion.div>
    </AnimatePresence>
  );
};

export default ConfirmPhoneForm;
