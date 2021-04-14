import React from 'react';
import svgSprite from '../../images/sprite.svg';
const ConfirmBox = () => {
  return (
    <div className="confirm_box">
      <div className="confirm_box_img round bg-gr center-flex mr-1">
        <svg className="small_svg center-abs">
          <use xlinkHref={svgSprite + '#tick'} />
        </svg>
      </div>
      <div className="confirm_box_details">
        <h3 className="heading_tiny col-bl-2 cap weit-2">
          Order Confirmed
        </h3>
        <p className="col-g-svg small upp">
          25/12/2021, 3:15pm
        </p>
      </div>
    </div>
  );
};

export default ConfirmBox;
