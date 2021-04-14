import React from 'react';
import Sprite from '../../images/illustrations/sprite.svg';
import {Link} from 'react-router-dom';

const FallBackScreen = ({
  children,
  isOpen,
  big = false,
  classes,
  header,
  body,
  footer,
  image = 'sad',
}) => {
  return isOpen
    ? <React.Fragment>

        {children}
      </React.Fragment>
    : <div className={`fallback u-center ${big && 'mt-5'} `}>
        <svg className={`fallback_img ${big && 'big'}`}>
          <use xlinkHref={Sprite + `#${image}`} />
        </svg>
        <div className="fallback_head">
          {header
            ? header
            : <h4 className="heading_small cap col-bl-1 weit-2">
                it's empty here
              </h4>}

        </div>
        <div className={`fallback_body `}>
          {body ? body : <p>start shopping to add items in your bag</p>}

        </div>
        {footer &&
          <div className={`fallback_controls  u-center mt-2 ${classes}`}>
            {footer}
          </div>}

      </div>;
};

export default FallBackScreen;
