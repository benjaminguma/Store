import React from 'react';
import RelatedProduct from './RelatedProduct';
import svgSprite from '../../images/sprite.svg';
import Swipers from '../../shared/uielements/Swiper';
import {multiple} from '../../utils/swiperconfig';
import {Fragment} from 'react';
import useCtxHook from '../../shared/hooks/UseCtxHook';

const RelatedProductList = () => {
  const {topProducts} = useCtxHook ();
  return (
    <section className="related_products">
      <div className="container">
        <div className="related_products_heading flexi sp-btw ">

          <h2 className="heading_small weit-1 upp col-g-light">
            Related products
          </h2>
          <div className="related_products_controls flexi sp-btw" />
        </div>
        <div className="related_products_slide mt-2">
          <Swipers
            config={multiple (6)}
            big={true}
            navigation={
              <Fragment>

                <div className="related_products_controls flexi sp-btw">
                  <div className="swiper-button-prev mr-1 round">

                    <svg className="small_svg col-w">
                      <use xlinkHref={svgSprite + '#larr'} />
                    </svg>
                  </div>
                  <div className="swiper-button-next round">
                    <svg className="small_svg col-w">
                      <use xlinkHref={svgSprite + '#rarr'} />
                    </svg>
                  </div>

                </div>
              </Fragment>
            }
          >
            {topProducts.map ((item, id) => (
              <RelatedProduct {...item} key={id} />
            ))}

          </Swipers>
        </div>
      </div>
    </section>
  );
};

export default RelatedProductList;
