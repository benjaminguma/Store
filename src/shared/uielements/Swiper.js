import React, {useEffect, Fragment, Children, useRef, Component} from 'react';
// swiper
import Swiper from 'swiper/bundle';
import test from '../../images/photos/test.jpg';

class Swipers extends Component {
  componentDidMount () {
    const {big, config} = this.props;
    this.swiper = new Swiper (`.swiper-container${big ? 1 : ''}`, config);
    if (big) {
      this.swiper.on ('autoplayStop', () => {
        setTimeout (() => {
          this.swiper.autoplay.start ();
        }, 8000);
      });
    }
  }
  render () {
    const {children, big, navigation} = this.props;
    return (
      <Fragment>
        <div
          className={`swiper-container${big ? 1 : ''}`}
          id={big ? 'big' : 'small'}
        >
          <div className="swiper-wrapper">

            {Children.count (children) > 0
              ? Children.map (children, Child => (
                  <div className="swiper-slide">{Child}</div>
                ))
              : <Fragment>

                  <div key={3} className="swiper-slide">
                    <img className="product_des_image br" src={test} alt="" />
                  </div>

                  <div key={3} className="swiper-slide">
                    <img className="product_des_image br" src={test} alt="" />
                  </div>

                  <div key={3} className="swiper-slide">
                    <img className="product_des_image br" src={test} alt="" />
                  </div>

                  <div key={3} className="swiper-slide">
                    <img className="product_des_image br" src={test} alt="" />
                  </div>
                </Fragment>}

          </div>
        </div>
        <div className={`swiper-pagination${big ? 1 : ''}`} />

        {navigation && navigation}

      </Fragment>
    );
  }
}

export default Swipers;
