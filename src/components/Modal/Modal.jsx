import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ imageURL, tags, onModalClose }) => {
  const onOverlayClick = event => {
    onModalClose();
  };

  

  useEffect(() => {
    const onKeydown = event => {
      if (event.key === 'Escape') {
        onModalClose();
      }
    };
    document.addEventListener('keydown', onKeydown);
    // document.body.classList.add('no-scroll');
    document.body.style.position = 'fixed';
    document.body.style.top = `-${window.scrollY}px`;

    return () => {
      document.removeEventListener('keydown', onKeydown);
      // document.body.classList.remove('no-scroll');
      document.body.style.position = '';
      document.body.style.top = '';
    };
    
  }, [onModalClose]);

  return (
    <>
      <div className="overlay" onClick={onOverlayClick}>
        <div className="modal">
          <img src={imageURL} alt={tags} />
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  imageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onModalClose: PropTypes.func.isRequired,
};

export default Modal;
