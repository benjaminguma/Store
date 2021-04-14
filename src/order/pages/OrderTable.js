import React from 'react';
import CartTotal from '../../bag/components/CartTotal';
import ConfirmBox from '../components/ConfirmBox';
import ProductOrderItem from '../components/ProductOrderItem';

const OrderTable = () => {
  return (
    <section className="order_section">
      <div className="order_table card bord-1">
        <main className="order_table_list ">

          <ConfirmBox />
          <ConfirmBox />
          <ConfirmBox />

        </main>
        <article className="order_table_products mt-5">
          <ProductOrderItem />
          <ProductOrderItem />
          <ProductOrderItem />
          <CartTotal />
        </article>

      </div>
    </section>
  );
};

export default OrderTable;
