import React from 'react';
import {Link} from 'react-router-dom';
import svgSprite from '../../images/sprite.svg';

const Product = () => {
  return (
    <Link to="/product/someProduct" className="product br block">
      <figure className="br">
        <img
          src="https://soko.fra1.digitaloceanspaces.com/TestImg/d4f3afb9-87f5-4f62-9b97-0ff11bd3aba5.jpg"
          alt="product_image"
          className="product_image"
        />
      </figure>
      <div className="product_details">
        <h3 className="heading_tiny weit-2 cap col-bl-1 ">
          norbury scandinanian woodLeg ottoman
        </h3>
        <p>
          <span>Ugx 185,000</span>
          <del className="col-g-light "> 190,000</del>
        </p>
        <div className="product_control ">
          <button className="btn_bord btn_icon br flexi">
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
