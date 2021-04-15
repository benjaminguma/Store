import {useState, useCallback} from 'react';

const UseModal = state => {
  const [isOpen, toggleModal] = useState (false);

  const openModal = useCallback (() => toggleModal (true), []);
  const closeModal = useCallback (() => toggleModal (false), []);

  return {isOpen, closeModal, openModal};
};

export default UseModal;
