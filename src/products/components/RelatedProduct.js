import React from 'react';
import test from '../../images/photos/test.jpg';

const RelatedProduct = () => {
  return (
    <div className="related_product">
      <figure>
        <img className="related_product_img br" src={test} alt="" />
      </figure>
      <div className="related_product_details">
        <p className="heading_tiny cap col-bl-1">
          this is a related product name and ooo
        </p>
      </div>
    </div>
  );
};

export default RelatedProduct;
