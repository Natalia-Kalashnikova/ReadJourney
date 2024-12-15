import sprite from '../../../images/sprite.svg';
import books2x from '../../../images/book-desctop@2.png';
import books from '../../../images/book-desctop.png';
import mobBooks2x from '../../../images/book-mobil@2x.png';
import mobBooks from '../../../images/book-mobil@2x.png';
import css from './BookReadModal.module.css';

const BookReadModal = ({ closeModals }) => {
  return (
    <div className={css.modalContainer}>
      <button className={css.closeButton} type="button" onClick={closeModals}>
        <svg width={22} height={22}>
          <use href={`${sprite}#icon-x`} />
        </svg>
      </button>
      <picture>
        <source
          srcSet={`${mobBooks} 1x, ${mobBooks2x} 2x`}
          media="(max-width: 767px)"
        />
        <source
          srcSet={`${books} 1x, ${books2x} 2x`}
          media="(min-width: 766px)"
        />
        <img className={css.img} src={books} alt="stack books" />
      </picture>
      <h3 className={css.successMessage}>The book is read</h3>
      <p className={css.heading}>
        It was an <span className={css.libraryName}>exciting journey</span>,
        where each page revealed new horizons, and the characters became
        inseparable friends.
      </p>
    </div>
  );
};

export default BookReadModal;
