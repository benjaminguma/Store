import React from 'react';
import CustomerOrder from './CustomerOrder';

const CustomerOrderList = ({children}) => {
  return (
    <section className="customer_order">
      {children}
      <div className="customer_order_list">
        <CustomerOrder />
        <CustomerOrder />
      </div>
    </section>
  );
};

export default CustomerOrderList;
