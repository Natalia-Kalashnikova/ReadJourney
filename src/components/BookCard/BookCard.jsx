import css from './BookCard.module.css'; 
import sprite from '../../images/sprite.svg';
import notFoundImg from '../../images/desctop-default-image@2x.jpg';
import { useDispatch } from 'react-redux';
import { removeBookFromCollection } from '../../redux/books/booksOperations.js';
import FallbackImage from '../FallbackImage/FallbackImage.jsx';
import BookDetails from '../BookDetails/BookDetails.jsx';

const BookItem=({ book, openLoginModal, currentPage = false })=> {
  const dispatch = useDispatch();
  const handleDeleteClick = () => {
    dispatch(removeBookFromCollection(book._id));
  };

  return (
    <li className={css.listItem}>
      {book.imageUrl ? (
        <img
          className={css.bookImage}
          src={book.imageUrl}
          alt="book title"
          onClick={() => openLoginModal(book)}
        />
      ) : (
        <FallbackImage>
          <img
            className={css.bookImage}
            src={notFoundImg}
            alt="book title"
            onClick={() => openLoginModal(book)}
          />
        </FallbackImage>
          )}          
          <div className={css.detailsContainer}>
              <BookDetails className={`${css.bookDetails} ${
            currentPage === 'MyLibrary' ? css.pageTrue : ''
          }`}>                  
              <h3 className={css.title}>{book.title}</h3>
              <p className={css.author}>{book.author}</p>
              </BookDetails>
        {currentPage === 'MyLibrary' && (
          <button className={css.deleteButton} onClick={handleDeleteClick}>
            <svg width={28} height={28}>
              <use href={`${sprite}#icon-dell`} />
            </svg>
          </button>
        )}
      </div>
    </li>
  );
}

export default BookItem;
