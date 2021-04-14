import React from 'react';
import svgSprite from '../../images/sprite.svg';
import {Link} from 'react-router-dom';
const Address = () => {
  return (
    <Link to="/" class="address">
      <figure className="address_img bg-g-1 round mr-2">
        <svg className="">
          <use xlinkHref={svgSprite + '#shop'} />
        </svg>

      </figure>
      <div className="address_text">
        <h1 className="heading_med col-bl-1">
          Target
        </h1>
        <p className=".cap">
          charm towers, plot 12 Nkruma rd, Kampala uganda
        </p>
      </div>

    </Link>
  );
};

export default Address;
