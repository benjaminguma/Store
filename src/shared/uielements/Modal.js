import React, {Children, Fragment} from 'react';
import {createPortal} from 'react-dom';

function Modal({children, close, isOpen, onSubmit}) {
  const element = isOpen
    ? <Fragment>
        <div className="backdrop fill" onClick={close} />

        <div className="modal center-abs topup">
          {Children.map (children, child =>
            React.cloneElement (child, {
              close,
              onSubmit,
              ...child.props,
            })
          )}

        </div>

      </Fragment>
    : null;

  return createPortal (element, document.getElementById ('modal_container'));
}

export default Modal;
