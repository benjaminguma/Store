import React from 'react';
import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import svgSprite from '../../images/sprite.svg';

const Address = ({checked, submitHandler, empty, isActive}) => {
  return (
    <div
      onClick={() => {
        if (!empty) {
          submitHandler (true);
        }
      }}
      className={` card address_tablet br bord-1 ${empty ? ' center-flex' : ' grid'} ${isActive ? 'active' : ''}`}
    >
      {empty
        ? <button
            onClick={submitHandler}
            className="btn_plain weit-2 col-b flexi address_tablet_link"
          >
            <svg className="tiny_svg">
              <use xlinkHref={svgSprite + '#plus'} />
            </svg>
            <span className="col-b heading_small">
              Add new address
            </span>
          </button>
        : <Fragment>

            <h4 className="heading_tiny col-bl-1 cap weit-3">
              Kim Kara

            </h4>
            <small className="small cap">
              No 8 Ahmed danjuma close mando cape town south africa
            </small>
            <small className="small col-bl-1 weit-2">
              +256 76 633 4574
            </small>
            <span className="address_tablet_svg center-flex">

              <svg className="small_svg">
                <use xlinkHref={svgSprite + '#mark'} />
              </svg>
            </span>

          </Fragment>}
    </div>
  );
};

export default Address;
