import React, { useEffect } from 'react';

import { StyledModal } from './Modal.styled';
import { createPortal } from 'react-dom';
import { ReactComponent as IconClose } from 'assets/close.svg';

const Modal = ({ renderContent, onClose, title }) => {
  const handleBackdrop = e => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return createPortal(
    <StyledModal onClick={handleBackdrop}>
      <div className="modal-content">
        <button type="button" className="close" onClick={onClose}>
          <IconClose />
        </button>
        {renderContent(onClose)}
      </div>
    </StyledModal>,
    document.querySelector('#portal')
  );
};

export default Modal;
