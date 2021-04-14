import React, {useReducer, useEffect} from 'react';

const init = {
  value: '',
  isValid: false,
  isTouched: false,
};
const errorTextStyles = {
  justifySelf: 'center',
  marginTop: '-.8rem',
  fontSize: '1.3rem',
  color: '#f00',
  backgroundColor: '#fff',
  padding: '.4rem .8rem',
  borderRadius: '5px',
  border: window.innerWidth < 600 ? '1px solid #f2f2f2' : '',
  marginBottom: '1rem',
};
const Field = ({
  type,
  placeholder,
  label,
  disabled,
  name,
  children,
  typeOfField,
}) => {
  const element = !typeOfField
    ? <input
        className={`form_input br ${type === 'tel' ? 'tel' : ''}`}
        type={type}
        placeholder={placeholder}
        label={label}
        disabled={disabled}
        name={name}
      />
    : <textarea
        className="form_input br"
        type={type}
        placeholder={placeholder}
        label={label}
        disabled={disabled}
        name={name}
        cols="30"
        rows="5"
      />;

  return (
    <React.Fragment>
      <div className="form_group">
        <label htmlFor={name} className="form_label  cap weit-1 col-bl-1">
          {label}
        </label>
        {element}
        {children}
      </div>

    </React.Fragment>
  );
};

export default Field;
