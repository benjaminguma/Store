import React from 'react';
import SvgSprite from '../../images/sprite.svg';

const SidebarLink = ({index, count, title, handleClick, ...restProps}) => {
  let showIcon = true;
  if (restProps.icon) showIcon = false;
  return (
    <li className="sidebar_list_item" key={index}>
      {showIcon
        ? <button
            className="sidebar_link btn_plain cap u-left"
            onClick={handleClick}
          >

            {title} {`(${count})`}
          </button>
        : <button
            className="sidebar_link btn_plain cap flexi"
            onClick={handleClick}
          >
            <svg className="small_svg mr-1">
              <use xlinkHref={SvgSprite + `#${restProps.icon}`} />
            </svg>
            <span className="heading_small  cap"> {title}</span>
          </button>}
    </li>
  );
};

export default SidebarLink;
