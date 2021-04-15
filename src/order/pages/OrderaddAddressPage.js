import React, {Fragment, useState} from 'react';
import AddressList from '../../bag/components/AddressList';
import UseModal from '../../shared/hooks/UseModal';
import Modal from '../../shared/uielements/Modal';
import Sidebar from '../../shared/uielements/Sidebar';
import TopNav from '../../shared/uielements/TopNav';
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
  const {isOpen, closeModal, openModal} = UseModal ();
  const [child, setChild] = useState ('Address');

  return (
    <Fragment>
      <TopNav
        to={'/'}
        text={'order #22029'}
        right={
          <button className="btn_bord btn_large heading_small br">
            {' '}logout
          </button>
        }
      />
      <section className="orders_and_addresses">
        <div className="container bord-1 br">
          <Sidebar
            data={data}
            onClick={text => setChild (text)}
            active={child}
          />
          {child === 'Address'
            ? <AddressList onClick={openModal} />
            : <CustomerOrderList />}

        </div>
      </section>
      <Modal isOpen={isOpen} close={closeModal}>
        <AddressForm />
      </Modal>
    </Fragment>
  );
};

export default OrderaddAddressPage;
