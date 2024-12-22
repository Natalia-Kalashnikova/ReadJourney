import  { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecommendedBooks } from '../../redux/books/booksOperations.js';
import { selectBookData } from '../../redux/books/booksSelectors.js';
import sprite from '../../images/sprite.svg';
import {
  ArrowIcon,
  BookAuthor,
  BookImage,
  BookListItem,
  BookTitle,
  BooksList,
  HomeLink,
  HomeText,
  RecommendedBooksContainer,
  RecommendedBooksHeading,
} from './RecommendedBooks.styled';
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

  const openBookModal = book => {
    setOpenModal(true);
    setBookData(book);
  };

  return (
    <div>
      <RecommendedBooksContainer>
        <RecommendedBooksHeading>Recommended books</RecommendedBooksHeading>
        <BooksList>
          {results?.slice(3, 6).map(book => (
            <BookListItem key={book._id}>
              <BookImage
                src={book.imageUrl}
                alt={book.title}
                onClick={() => openBookModal(book)}
              />
              <BookTitle>{book.title}</BookTitle>
              <BookAuthor>{book.author}</BookAuthor>
            </BookListItem>
          ))}
        </BooksList>
        <HomeLink to="/recommended">
          <HomeText>Home </HomeText>
          <ArrowIcon>
            <use href={`${sprite}#icon-arrow-right`} />
          </ArrowIcon>
        </HomeLink>
      </RecommendedBooksContainer>

      <PortalModal active={openModal} setActive={setOpenModal}>
        <BookDetails
          bookData={bookData}
          closeModals={() => setOpenModal()}
          actionButtonLabel="Add to library"
        />
      </PortalModal>
    </div>
  );
};

export default RecommendedBooks;