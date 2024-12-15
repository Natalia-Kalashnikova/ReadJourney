import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addBookToCollectionById, fetchOwnBooks } from '../../redux/books/booksOperations.js';
import { selectOwnBooks } from '../../redux/books/booksSelectors.js';
import sprite from '../../images/sprite.svg';
import notFoundImg from '../../images/desctop-default-image.jpg';
import Button from '../Button/Button.jsx';
import FallbackImage from '../FallbackImage/FallbackImage.jsx';
import css from './BookDetails.module.css';

const BookDetails = ({ closeModal, bookData, actionButtonLabel }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ownLibrary = useSelector(selectOwnBooks);

  useEffect(() => {
    dispatch(fetchOwnBooks());
  }, [dispatch]);

  const handleActionButtonClick = () => {
    if (actionButtonLabel === 'Add to Library') {
      const bookExists = ownLibrary.find(item => item.title === bookData.title);
      if (!bookExists) {
        toast.success('The addition of the book was successful');
        dispatch(addBookToCollectionById(bookData._id));
      } else {
        toast.error('The book has already been added to the library');
      }
    }
    if (actionButtonLabel === 'Start Reading') {
      navigate(`/reading/${bookData._id}`);
    }
    closeModal();
  };

  return (
    <div className={css.styledModal}>
      <button onClick={closeModal} className={css.closeButton}>
        <svg width={22} height={22}>
          <use href={`${sprite}#icon-x`} />
        </svg>
      </button>
      {bookData.imageUrl ? (
        <img className={css.coverImage} src={bookData.imageUrl} alt="cover" />
      ) : (
        <FallbackImage>
          <img
            className={css.coverImage}
            src={notFoundImg}
            alt="cover fallback"
          />
        </FallbackImage>
      )}
      <h2 className={css.Title}>{bookData.title}</h2>
      <p className={css.AuthorInfo}>{bookData.author}</p>
      <p className={css.PageCount}>{bookData.totalPages} pages</p>
      <Button
        label={actionButtonLabel}
        onClick={handleActionButtonClick}
        prop="true"
      />
    </div>
  );
};

export default BookDetails;
