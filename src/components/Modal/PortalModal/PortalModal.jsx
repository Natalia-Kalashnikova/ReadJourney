import ReactDOM from 'react-dom';
import  { useEffect } from 'react';
import css from './PortalModal.module.css';

const PortalModal=({ active, setActive, children }) =>{
  useEffect(() => {
    const closeModal = e => {
      if (e.key === 'Escape') {
        setActive(false);
      }
    };

    const handleBodyScroll = disableScroll => {
      if (disableScroll) {
        document.body.classList.add(css.noScroll);
      } else {
        document.body.classList.remove(css.noScroll);
      }
    };

    if (active) {
      document.addEventListener('keydown', closeModal);
      handleBodyScroll(true);
    } else {
      document.removeEventListener('keydown', closeModal);
      handleBodyScroll(false);
    }

    return () => {
      document.removeEventListener('keydown', closeModal);
      handleBodyScroll(false);
    };
  }, [active, setActive]);

  return ReactDOM.createPortal(
    <div
      className={`${css.modalContainer} ${active ? css.active : ''}`}
      onClick={() => setActive(false)}
    >
      <div onClick={e => e.stopPropagation()}>{children}</div>
    </div>,
    document.getElementById('modal')
  );
}

export default PortalModal;