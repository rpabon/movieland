import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

export const Modal = ({ isOpen: isOpenProp, onClose, children }) => {
  const [isOpen, setIsOpen] = useState(isOpenProp);

  useEffect(() => {
    setIsOpen(isOpenProp);
  }, [isOpenProp]);

  const handleClose = () => {
    setIsOpen(false);
    onClose && onClose();
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className="modal-backdrop fade show" />
      <div className="modal fade show d-block" tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
          <div className="modal-content bg-dark text-light">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close btn-close-white custom-close-button position-absolute top-0 end-0 m-3"
                onClick={handleClose}
                aria-label="Close"
              />
            </div>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      </div>
    </>,
    document.getElementById('modal')
  );
};
