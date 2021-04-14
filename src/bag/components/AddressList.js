import React from 'react';
import Address from './Address';
const AddressList = ({children}) => {
  return (
    <section className="address_list_container">
      {children}
      <div className="address_list">
        <Address />
        <Address />
        <Address />
      </div>
    </section>
  );
};

export default AddressList;
