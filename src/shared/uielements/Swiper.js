import React, {Fragment, Children, Component} from 'react';
// swiper
import Swiper from 'swiper/bundle';

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
    const {children, big, navigation, images} = this.props;
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

                  {images.map ((soc, index) => (
                    <div key={index} className="swiper-slide">
                      <img
                        className="product_des_image br"
                        src={soc}
                        alt="product_img"
                      />
                    </div>
                  ))}

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
