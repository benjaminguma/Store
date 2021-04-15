import {motion} from 'framer-motion';
import React from 'react';
import CartTotal from '../../bag/components/CartTotal';
import useCtxHook from '../../shared/hooks/UseCtxHook';
import {fadeIn} from '../../utils/animations';
import ConfirmBox from '../components/ConfirmBox';
import ProductOrderItem from '../components/ProductOrderItem';

const OrderTable = () => {
  const {cart} = useCtxHook ();
  return (
    <motion.section
      variants={fadeIn}
      initial="initial"
      animate="final"
      exit="initial"
      className="order_section"
    >
      <div className="order_table card bord-1">
        <main className="order_table_list ">

          <ConfirmBox />
          <ConfirmBox />
          <ConfirmBox />

        </main>
        <article className="order_table_products mt-5">
          {cart.map ((item, index) => (
            <ProductOrderItem {...item} key={index} />
          ))}

          <CartTotal />
        </article>

      </div>
    </motion.section>
  );
};

export default OrderTable;
