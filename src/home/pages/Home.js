import React from 'react';
import Footer from '../../shared/uielements/Footer';
import MainWrappar from '../../home/components/MainWrappar';
import Sidebar from '../../shared/uielements/Sidebar';
import ProductList from '../../products/pages/ProductList';
import Cart from '../../bag/pages/Cart';
import {motion} from 'framer-motion';
import {fadeIn} from '../../utils/animations';
import useCtxHook from '../../shared/hooks/UseCtxHook';

const Home = () => {
  const {categories} = useCtxHook ();
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="final"
      exit="initial"
    >
      <MainWrappar>
        <Sidebar data={categories} />
        <ProductList />
        <Cart />
      </MainWrappar>
      <Footer />
    </motion.div>
  );
};

export default Home;
