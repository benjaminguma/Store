import React from 'react';
import test from '../../images/photos/test.jpg';

const RelatedProduct = ({productName, imageUrls}) => {
  return (
    <div className="related_product">
      <figure>
        <img className="related_product_img br" src={imageUrls[0]} alt="" />
      </figure>
      <div className="related_product_details">
        <p className="heading_tiny cap col-bl-1">
          {productName}
        </p>
      </div>
    </div>
  );
};

export default RelatedProduct;
