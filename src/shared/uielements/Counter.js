import React from 'react';
import svgSprite from '../../images/sprite.svg';

const Counter = () => {
  return (
    <div className="counter btn_bord br flexi">
      <button className="counter_btn u-center">
        <svg className="tiny_svg">
          <use xlinkHref={svgSprite + '#plus'} />
        </svg>
      </button>
      <span className="col-bl-1">
        1
      </span>
      <button className="counter_btn u-center">
        <svg className="tiny_svg">
          <use xlinkHref={svgSprite + '#minus'} />
        </svg>
      </button>
    </div>
  );
};

export default Counter;
