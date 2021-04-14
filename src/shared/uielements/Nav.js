import React from 'react';
import svgSprite from '../../images/sprite.svg';
import {NavLink} from 'react-router-dom';
import {fadeIn} from '../../utils/animations';
import {motion} from 'framer-motion';

const Nav = () => {
  return (
    <motion.nav
      variants={fadeIn}
      initial="initial"
      animate="final"
      transition={{
        duration: 4,
        when: 'beforeChildren',
        staggerChildren: 0.4,
      }}
    >
      <ul className="nav_list">
        <motion.li variants={fadeIn} className="nav_list_item">
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
        </motion.li>
        <motion.li variants={fadeIn} className="nav_list_item">
          <NavLink
            to="/account"
            className="nav_link tablet btn_plain btn_icon flexi weit-1"
          >

            <svg>
              <use xlinkHref={svgSprite + '#account'} />
            </svg>
            <span class="nav_link_text cap">Account</span>
          </NavLink>
        </motion.li>
      </ul>
    </motion.nav>
  );
};

export default Nav;
