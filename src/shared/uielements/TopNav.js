import React from 'react';
import {Link} from 'react-router-dom';
import svgSprite from '../../images/sprite.svg';

const TopNav = ({to, text, right}) => {
  return (
    <div className=" container top_nav sp-btw">
      <div className="top_nav_left">

        <Link to={to} className="  flexi btn_svg heading_med col-bl-1 cap">
          <svg className="small_svg mr-2">
            <use xlinkHref={svgSprite + '#larr'} />
          </svg>
          <span>
            {text}
          </span>
        </Link>
      </div>
      <div className="top_nav_right">

        {right}
      </div>
    </div>
  );
};

export default TopNav;
