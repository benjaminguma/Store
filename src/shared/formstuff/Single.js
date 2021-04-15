import React from 'react';

const Single = ({name, id, value, changeHandler, size = 1}) => {
  return (
    <input
      className="form_input_single heading_large weit-1 u-center br"
      placeholder="0"
      type="text"
      name={name}
      id={id}
      size={size}
      value={value}
      onChange={e => changeHandler (e.target.value)}
    />
  );
};

export default Single;
