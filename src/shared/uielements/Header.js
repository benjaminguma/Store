import React, {useContext} from 'react';

import AddresBox from '../smallComponents/Address';
import Nav from './Nav';

const Header = () => {
  return (
    <header class="header_main">
      <div className="jumper bg-b col-w-1 ">
        <div className="container header_title">
          <h1 class="heading_small flexi">
            {' '}store made with &nbsp;
            <span className="weit-3 col-w">
              sako
            </span>
          </h1>
        </div>
      </div>
      <div className="header_nav ">
        <div className="container sp-btw flexi">
          <AddresBox />
          <Nav />
        </div>
      </div>

    </header>
  );
};

export default Header;
