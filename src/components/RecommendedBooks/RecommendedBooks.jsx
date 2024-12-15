import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecommendedBooks } from '../../redux/books/booksOperations.js';
import { selectBookData } from '../../redux/books/booksSelectors';
import sprite from '../../images/sprite.svg';
import { NavLink } from 'react-router-dom';
import css from './RecommendedBooks.module.css';
import PortalModal from '../Modal/PortalModal/PortalModal.jsx';
import BookDetails from '../BookDetails/BookDetails.jsx';

const RecommendedBooks = () => {
  const [openModal, setOpenModal] = useState(false);
  const [bookData, setBookData] = useState(false);
  const results = useSelector(selectBookData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecommendedBooks({ page: 1, limit: 10 }));
  }, [dispatch]);

  const openLoginModal = (book) => {
    setOpenModal(true);
    setBookData(book);
  };

  return (
    <div>
      <div className={css.recommendedBooksContainer}>
        <h4 className={css.recommendedBooksHeading}>Recommended books</h4>
        <ul className={css.booksList}>
          {results?.slice(3, 6).map((book) => (
            <li className={css.bookListItem} key={book._id}>
              <img
                className={css.bookImage}
                src={book.imageUrl}
                alt={book.title}
                onClick={() => openLoginModal(book)}
              />
              <h4 className={css.bookTitle}>{book.title}</h4>
              <p className={css.bookAuthor}>{book.author}</p>
            </li>
          ))}
        </ul>
        <NavLink to="/recommended" className={css.homeLink}>
          <p className={css.homeText}>Home </p>
          <svg className={css.arrowIcon}>
            <use href={`${sprite}#icon-arrow-right`} />
          </svg>
        </NavLink>
      </div>

      <PortalModal active={openModal} setActive={setOpenModal}>
        <BookDetails
          bookData={bookData}
          closeModals={() => setOpenModal()}
          btnLabel="Add to library"
        />
      </PortalModal>
    </div>
  );
};

export default RecommendedBooks;
