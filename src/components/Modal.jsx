import React from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';

export const Modal = ({ isOpen, onClose, children }) => {
  const onBackdropClick = (e) => {
    if (e.target !== e.currentTarget) return;
    onClose();
  };

  return ReactDOM.createPortal(
    <>
      <div
        className={cx('modal-backdrop', 'fade', {
          show: isOpen,
          'd-none': !isOpen,
        })}
        onClick={onBackdropClick}
      />
      <div
        tabIndex="-1"
        role="dialog"
        className={cx('modal', 'fade', {
          'show d-block': isOpen,
          'd-none': !isOpen,
        })}
        onClick={onBackdropClick}
      >
        <div className="modal-dialog modal-dialog-centered modal-xl" role="document">
          <div className="modal-content bg-dark text-light">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close btn-close-white custom-close-button position-absolute top-0 end-0 m-3"
                onClick={onClose}
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
