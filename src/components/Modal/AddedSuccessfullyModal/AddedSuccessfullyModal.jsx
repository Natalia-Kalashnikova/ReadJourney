import sprite from '../../../images/sprite.svg';
import likeDesktop2x from '../../../images/like-desctop@2x.png';
import likeDesktop from '../../../images/like-desctop.png';
import likeMobile2x from '../../../images/like-mobil@2x.png';
import likeMobile from '../../../images/like-mobil.png';
import css from '../AddedSuccessfullyModal/AddedSuccessfullyModal.module.css';

const AddedSuccessfullyModal = ({ closeModals }) => {
  return (
    <div className={css.modalContainer}>
      <button className={css.closeButton} type="button" onClick={closeModals}>
        <svg width={22} height={22}>
          <use href={`${sprite}#icon-x`} />
        </svg>
      </button>
      <picture>
        <source
          srcSet={`${likeMobile} 1x, ${likeMobile2x} 2x`}
          media="(max-width: 767px)"
        />
        <source
          srcSet={`${likeDesktop} 1x, ${likeDesktop2x} 2x`}
          media="(min-width: 768px)"
        />
        <img className={css.img} src={likeDesktop} alt="add book" />
      </picture>
      <h3 className={css.successMessage}>Good job</h3>
      <p className={css.heading}>
        Your book is now in<span className={css.libraryName}>the library!</span>{' '}
        The joy knows no bounds and now you can start your training
      </p>
    </div>
  );
};

export default AddedSuccessfullyModal;
