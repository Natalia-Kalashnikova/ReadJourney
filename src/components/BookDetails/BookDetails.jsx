import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addBookById, fetchOwnBooks } from '../../redux/books/booksOperations.js';
import { selectOwnBooks } from '../../redux/books/booksSelectors.js';
import sprite from '../../images/sprite.svg';
import notFoundImg from '../../images/desctop-default-image.jpg';
import Button from '../Button/Button.jsx';
import FallbackImage from '../FallbackImage/FallbackImage.jsx';
import PortalModal from '../Modal/PortalModal/PortalModal.jsx';
import AddedSuccessfullyModal from '../Modal/AddedSuccessfullyModal/AddedSuccessfullyModal.jsx';
import {
  AuthorInfo,
  CloseButton,
  CoverImage,
  PageCount,
  StyledModal,
  Title,
} from './BookDetails.styled';

const BookDetails=({ closeModals, bookData, actionButtonLabel })=> {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ownLibrary = useSelector(selectOwnBooks);

  const [successModalOpen, setSuccessModalOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchOwnBooks());
  }, [dispatch]);

  const handleActionButtonClick = () => {
    if (actionButtonLabel === 'Add to library') {
      const bookExists = ownLibrary.find(item => item.title === bookData.title);

      if (!bookExists) {
        toast.success('The addition of the book was successful');
        dispatch(addBookById(bookData._id));
        setSuccessModalOpen(true);
      } else {
        toast.error('The book has already been added to the library');
      }
    }

    if (actionButtonLabel === 'Start reading') navigate(`/reading/${bookData._id}`);

    closeModals();
  };

  if (!bookData) {
    return null;
  }

  return (
    <>
    <StyledModal>
      <CloseButton onClick={closeModals}>
        <svg width={22} height={22}>
          <use href={`${sprite}#icon-x`} />
        </svg>
      </CloseButton>

      {bookData.imageUrl ? (
        <CoverImage src={bookData.imageUrl} alt="cover" />
      ) : (
        <FallbackImage>
          <CoverImage src={notFoundImg} alt="cover fallback" />
        </FallbackImage>
      )}

      <Title>{bookData.title}</Title>
      <AuthorInfo>{bookData.author}</AuthorInfo>
      <PageCount>{bookData.totalPages} pages</PageCount>

      <Button label={actionButtonLabel} onClick={handleActionButtonClick} prop="true" />
    </StyledModal>

    <PortalModal active={successModalOpen} setActive={setSuccessModalOpen}>
        <AddedSuccessfullyModal closeModals={() => setSuccessModalOpen(false)} />
      </PortalModal>
    </>
  );
}

export default BookDetails;