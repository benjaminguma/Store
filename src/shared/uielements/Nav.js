import React from 'react';
import svgSprite from '../../images/sprite.svg';
import {NavLink} from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul className="nav_list">
        <li className="nav_list_item">
          <NavLink
            activeClassName="active"
            to="/bag"
            className="nav_link tablet btn_plain btn_icon flexi weit-1"
          >

            <svg>
              <use xlinkHref={svgSprite + '#bag'} />
            </svg>
            <span class="nav_link_text cap">bag</span>
          </NavLink>
        </li>
        <li className="nav_list_item">
          <NavLink
            to="/account"
            className="nav_link tablet btn_plain btn_icon flexi weit-1"
          >

            <svg>
              <use xlinkHref={svgSprite + '#account'} />
            </svg>
            <span class="nav_link_text cap">Account</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
