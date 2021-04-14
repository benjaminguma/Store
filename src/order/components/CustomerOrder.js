import React from 'react';
import svgSprite from '../../images/sprite.svg';

const CustomerOrder = () => {
  return (
    <article className="customer_order_tablet br bord-1">
      <header className="customer_order_tablet_header flexi">
        <span className="round customer_order_tablet_img center-flex round bg-g-1 mr-2">
          <svg className="">
            <use xlinkHref={svgSprite + '#shop'} />
          </svg>
        </span>
        <p className="heading_tiny cap weit-3 col-bl-1">
          Abhl's juke's store
        </p>

      </header>
      <div className="customer_order_tablet_details sp-btw">
        <div>
          <h6 className="small col-bl-1"> order #45567</h6>
          <small className="smaller col-g-light"> 3 items</small>
        </div>
        <div className="u-right">
          <h6 className="small col-bl-1 upp"> ugx 12,900 </h6>
          <small className="smaller col-g-light"> 26/12/14 9:00pm</small>
        </div>
      </div>
      <div className="customer_order_tablet_stat flexi col-b">
        <span className="customer_order_tablet_stat_circle   round block upp" />
        <span className="cap">
          shipped
        </span>
      </div>
    </article>
  );
};

export default CustomerOrder;
