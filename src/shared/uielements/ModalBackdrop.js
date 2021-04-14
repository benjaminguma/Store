import React from 'react';
import {createPortal} from 'react-dom';

const ModalBackdrop = ({clickHandler}) => {
  const Backdrop = <div className="backdrop" />;
  return createPortal (<Backdrop />, document.getElementById ('drop_box'));
};

export default ModalBackdrop;
