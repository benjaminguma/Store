import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Swipers from '../../shared/uielements/Swiper';
import Counter from '../../shared/uielements/Counter';
import RelatedProductList from '../components/RelatedProductList';
import Footer from '../../shared/uielements/Footer';
import TopNav from '../../shared/uielements/TopNav';

import {fade} from '../../utils/swiperconfig';

const ProductDiscription = ({}) => {
  return (
    <Fragment>
      <TopNav to="/" text="furniture" />
      <section className="product_des">
        <div className="container">
          <div className="product_des_images">
            <Swipers config={fade} big={false} />
          </div>
          <div className="product_des_pack">
            <article className="product_des_details">
              <h2 className="heading_small mb-1 cap weit-3 col-bl-1">
                Norbury Scandinanian Norwubury chair
              </h2>

              <p className="col-g-svg">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt ea harum quas, debitis fugiat, nostrum explicabo natus ducimus molestiae vel quasi. Cum a, accusantium culpa, ipsum vel necessitatibus voluptas tempore aliquid quidem recusandae rerum dicta!
              </p>
            </article>
            <article className="product_des_price">
              <div className="product_des_price_box">
                <p className="heading_med weit-1 upp"> ugx 119,000</p>
                <del className="col-g-light"> 148,800</del>

              </div>

              <span className="badge_red br">
                -20%
              </span>
            </article>
            <div>
              <Counter />

            </div>
            <div className="product_des_controls split mt-5 ">
              <Link
                to="/order"
                className=" btn_large btn_bord weit-2 br heading_small cap"
              >
                add to bag
              </Link>
              <Link
                to="/bag"
                className=" btn_large btn_yellow weit-2 br heading_small cap"
              >
                buy now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <RelatedProductList />
      <Footer />
    </Fragment>
  );
};

export default ProductDiscription;
