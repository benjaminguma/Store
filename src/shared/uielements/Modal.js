import React, {Children, Fragment} from 'react';
import {createPortal} from 'react-dom';

function Modal({children}) {
  const element = (
    <Fragment>
      <div className="backdrop fill" />

      <div className="modal center-abs topup">
        {children}
      </div>

    </Fragment>
  );

  return createPortal (element, document.getElementById ('modal_container'));
}

export default Modal;
