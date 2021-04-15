import React from 'react';
import svgSprite from '../../images/sprite.svg';
import useCtxHook from '../hooks/UseCtxHook';

const Counter = ({count, productName}) => {
  const {updateCartItem} = useCtxHook ();
  const inc = () => updateCartItem (productName, 1, count);
  const dec = () => updateCartItem (productName, -1, count);
  return (
    <div className="counter btn_bord br flexi">
      <button className="counter_btn u-center" onClick={inc}>
        <svg className="tiny_svg">
          <use xlinkHref={svgSprite + '#plus'} />
        </svg>
      </button>
      <span className="col-bl-1">
        {count}
      </span>
      <button className="counter_btn u-center" onClick={dec}>
        <svg className="tiny_svg">
          <use xlinkHref={svgSprite + '#minus'} />
        </svg>
      </button>
    </div>
  );
};

export default Counter;
