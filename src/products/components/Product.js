import React from 'react';
import {Link} from 'react-router-dom';
import svgSprite from '../../images/sprite.svg';
import useCtxHook from '../../shared/hooks/UseCtxHook';

// {
//   "productName": "graffiti pearl bag ",
//   "productDetails": "graffiti pearl designer acrylic handbags purses and ladies clutch purse evening bag",
//   "categoryName": "Bags",
//   "isListed": null,
//   "categoryId": 216,
//   "color": [],
//   "currency": "UGX",
//   "discountPercent": 0,
//   "discountedPrice": 80000,
//   "imageUrls": [
//     "https://soko.fra1.digitaloceanspaces.com/TestImg/085451fc-f925-432c-885a-67a772be67b5.jpg",
//     "https://soko.fra1.digitaloceanspaces.com/TestImg/31494136-142e-4cf9-b72d-f0cf146c1bcf.jpg",
//     "https://soko.fra1.digitaloceanspaces.com/TestImg/0d0bfdaf-f97a-48c1-b3eb-1a59ae7a1f4d.jpg",
//     "https://soko.fra1.digitaloceanspaces.com/TestImg/700e60af-c745-4027-ab63-767e5278ac26.jpg",
//     "https://soko.fra1.digitaloceanspaces.com/TestImg/381e7d73-1955-49a2-b1ab-1deef69d67bd.jpg"
//   ],
//   "maxQuantity": 7,
//   "originalPrice": 80000,
//   "productId": 273,
//   "size": []
// },

const Product = ({
  categoryName,

  productName,
  productDetails,
  imageUrls,
  originalPrice,
  categoryId,
  discountedPrice,
}) => {
  const {addToCart} = useCtxHook ();
  return (
    <Link to={`/${categoryName}/${productName}`} className="product br block">
      <figure className="br">
        <img
          src="https://soko.fra1.digitaloceanspaces.com/TestImg/d4f3afb9-87f5-4f62-9b97-0ff11bd3aba5.jpg"
          alt="product_image"
          className="product_image"
        />
      </figure>
      <div className="product_details">
        <h3 className="heading_tiny weit-2 cap col-bl-1 ">
          {productName}
        </h3>
        <p>
          <span>Ugx {originalPrice}</span>
          <del className="col-g-light "> {originalPrice + discountedPrice}</del>
        </p>
        <div className="product_control " onClick={e => e.stopPropagation ()}>
          <button
            className="btn_bord btn_icon br flexi"
            onClick={e => {
              addToCart (productName);
              e.stopPropagation ();
              e.preventDefault ();
            }}
          >
            <svg class="tiny_svg">
              <use xlinkHref={svgSprite + '#plus'} />
            </svg>
            <span className="cap w-2">Add</span>
          </button>
        </div>

      </div>

    </Link>
  );
};

export default Product;
