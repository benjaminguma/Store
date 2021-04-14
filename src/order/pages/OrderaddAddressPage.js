import React, {Fragment} from 'react';
import AddressList from '../../bag/components/AddressList';
import Modal from '../../shared/uielements/Modal';
import Sidebar from '../../shared/uielements/Sidebar';
import AddressForm from '../components/AddressForm';
import CustomerOrderList from '../components/CustomerOrderList';

const data = [
  {
    title: 'orders',
    icon: 'paper',
  },
  {
    title: 'Address',
    icon: 'location',
  },
];

const OrderaddAddressPage = () => {
  return (
    <Fragment>

      <section className="orders_and_addresses">
        <div className="container bord-1 br">
          <Sidebar data={data} />
          {/* <AddressList /> */}
          <CustomerOrderList />
        </div>
      </section>
      <Modal>
        <AddressForm />
      </Modal>
    </Fragment>
  );
};

export default OrderaddAddressPage;
