import React from 'react';
import bus from '../../images/photos/bus.png';
import t247 from '../../images/photos/247.png';
import badge from '../../images/photos/badge.png';

const footerData = [
  {
    url: bus,
    title: 'Fast Delivery',
  },
  {
    url: badge,
    title: 'Buyer Protection',
  },
  {
    url: t247,
    title: 'Customer Support',
  },
];

const Footer = () => {
  return (
    <footer className="footer_main bg-b">
      <div className="container">
        {footerData.map ((fData, index) => <ImageBox key={index} {...fData} />)}
      </div>
    </footer>
  );
};

function ImageBox({url, title}) {
  return (
    <div className="footer_box grid u-center">
      <figure className="mb-2">
        <img src={url} alt={title} class="footer_box_img" />
      </figure>
      <p>{title}</p>
    </div>
  );
}

export default Footer;
