import React, {useState} from 'react';
import SidebarLink from '../smallComponents/sidebarLink';
import svgSprite from '../../images/sprite.svg';
import useCtxHook from '../hooks/UseCtxHook';

const Sidebar = ({data}) => {
  const {category, setCategory} = useCtxHook ();
  console.log (category);
  return (
    <div className="sidebar">
      <ul className="sidebar_list mb-2">
        {data.map ((details, index) => (
          <SidebarLink
            {...details}
            active={details.title === category}
            handleClick={() => setCategory (details.index)}
          />
        ))}
      </ul>
      {!data[0].icon &&
        <button className="col-b cap flexi weit-2 sidebar_base_btn mt-2">
          <span>
            view all categories

          </span>
          <svg className="small_svg ml-1">
            <use xlinkHref={svgSprite + '#rarr'} />
          </svg>
        </button>}
    </div>
  );
};

export default Sidebar;
