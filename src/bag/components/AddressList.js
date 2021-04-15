import React from 'react';
import Address from './Address';
const AddressList = ({children, onClick}) => {
  return (
    <section className="address_list_container">
      {children}
      <div className="address_list">
        <Address />
        <Address empty onClick={onClick} />

      </div>
    </section>
  );
};

export default AddressList;
