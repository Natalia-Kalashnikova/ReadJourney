import { useDispatch } from 'react-redux';
import sprite from '../../images/sprite.svg';
import notFoundImg from '../../images/desctop-default-image@2x.jpg';
import { deleteBook } from '../../redux/books/booksOperations.js';
import FallbackImage from '../FallbackImage/FallbackImage.jsx';
import {
  Author,
  BookDetails,
  BookImage,
  DeleteButton,
  DetailsContainer,
  ListItem,
  Title,
} from './BookCard.styled.js';

const BookCard = ({ book, openBookModal, currentPage = false }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(deleteBook(book._id));
  };

  return (
    <ListItem>
      {book.imageUrl ? (
        <BookImage
          src={book.imageUrl}
          alt="book title"
          onClick={() => openBookModal(book)}
        />
      ) : (
        <FallbackImage>
          <BookImage
            src={notFoundImg}
            alt="book title"
            onClick={() => openBookModal(book)}
          />
        </FallbackImage>
      )}
      <DetailsContainer>
        <BookDetails $page={currentPage === 'MyLibrary' ? 'true' : ''}>
          <Title>{book.title}</Title>
          <Author>{book.author}</Author>
        </BookDetails>
        {currentPage === 'MyLibrary' && (
          <DeleteButton onClick={handleDeleteClick}>
            <svg width={28} height={28}>
              <use href={`${sprite}#icon-dell`} />
            </svg>
          </DeleteButton>
        )}
      </DetailsContainer>
    </ListItem>
  );
};

export default BookCard;
