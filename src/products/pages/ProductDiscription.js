import React, {Fragment} from 'react';
import {useParams, Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Swipers from '../../shared/uielements/Swiper';
import Counter from '../../shared/uielements/Counter';
import RelatedProductList from '../components/RelatedProductList';
import Footer from '../../shared/uielements/Footer';
import TopNav from '../../shared/uielements/TopNav';

import {fade} from '../../utils/swiperconfig';
import {motion} from 'framer-motion';
import {fadeIn} from '../../utils/animations';
import useCtxHook from '../../shared/hooks/UseCtxHook';

const ProductDiscription = () => {
  const {cart, productCategories, category, addToCart} = useCtxHook ();
  const {productName} = useParams ();
  const item = productCategories[category].productDetails.find (
    item => item.productName === productName
  );
  const discount = Math.floor (item.discountedPrice / item.originalPrice) * 100;

  if (!item) return <Redirect to="/" />;
  return (
    <motion.div
      variants={fadeIn}
      initial="initial"
      animate="final"
      exit="initial"
    >
      <TopNav to="/" text="furniture" />
      <section className="product_des">
        <div className="container">
          <div className="product_des_images">
            <Swipers config={fade} big={false} images={item.imageUrls} />
          </div>
          <div className="product_des_pack">
            <article className="product_des_details">
              <h2 className="heading_small mb-1 cap weit-3 col-bl-1">
                {item.productName}
              </h2>

              <p className="col-g-svg">
                {item.productDetails}
              </p>
            </article>
            <article className="product_des_price">
              <div className="product_des_price_box">
                <p className="heading_med weit-1 upp">
                  {' '}ugx {item.originalPrice}
                </p>
                <del className="col-g-light upp">
                  ugx {item.discountedPrice}
                </del>

              </div>
              {discount > 0 &&
                <span className="badge_red br">
                  -{discount}%
                </span>}
            </article>
            <div>
              {cart.some (item => item.productName === productName) &&
                <Counter
                  count={
                    cart.find (item => item.productName === productName).count
                  }
                  productName={productName}
                />}

            </div>
            <div className="product_des_controls split mt-5 ">
              <button
                onClick={() => addToCart (productName)}
                className=" btn_large btn_bord weit-2 br heading_small cap"
              >
                add to bag
              </button>
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
    </motion.div>
  );
};

export default ProductDiscription;
