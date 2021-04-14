import React from 'react';
import Product from '../components/Product';
import SearchBox from '../../home/components/SearchBox';

const ProductList = () => {
  return (
    <section className="product_category ">
      <SearchBox />
      <div className="box">
        <div className="box_heading flexi">
          <h2 className="heading_small weit-3 cap col-bl-1">Electronics</h2>
          <span className=" badge badge_blue big br weit-2 ml-1">
            12
          </span>
        </div>

      </div>

      <ul className="product_list">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ul>

    </section>
  );
};

export default ProductList;
