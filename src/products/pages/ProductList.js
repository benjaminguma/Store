import React from 'react';
import Product from '../components/Product';
import SearchBox from '../../home/components/SearchBox';
import useCtxHook from '../../shared/hooks/UseCtxHook';

const ProductList = () => {
  const {category, productCategories, categories} = useCtxHook ();
  return (
    <section className="product_category ">
      <SearchBox />
      <div className="box">
        <div className="box_heading flexi">
          <h2 className="heading_small weit-3 cap col-bl-1">
            {categories[category].title}
          </h2>
          <span className=" badge badge_blue big br weit-2 ml-1">
            {categories[category].count}
          </span>
        </div>

      </div>

      <ul className="product_list">
        {productCategories[category].productDetails.map ((productData, id) => (
          <Product {...productData} key={id} />
        ))}
      </ul>

    </section>
  );
};

export default ProductList;
