import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOwnBooks } from '../../redux/books/booksOperations.js';
import { selectOwnBooks } from '../../redux/books/booksSelectors.js';
import BookDetails from '../BookDetails/BookDetails.jsx';
import PortalModal from '../Modal/PortalModal/PortalModal.jsx';
import BaseMainWrapper from '../BaseMainWrapper/BaseMainWrapper.jsx';
import DropdownMenu from '../DropdownMenu/DropdownMenu.jsx';
import NoBooksScreen from '../NoBooksScreen/NoBooksScreen.jsx';
import BookCard from '../BookCard/BookCard.jsx';
import { BookList, LibraryContainer, LibraryHeading } from './Books.styled';

const Books = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [bookData, setBookData] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const ownLibrary = useSelector(selectOwnBooks);
  const [selectedBooks, setSelectedBooks] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOwnBooks());
  }, [dispatch]);

  const openBookModal = book => {
    setModalOpen(true);
    setBookData(book);
  };

  const handleSelectedCategory = e => {
    setSelectedBooks(e);
    if (e === 'Done') dispatch(fetchOwnBooks('done'));
    if (e === 'In progress') dispatch(fetchOwnBooks('in-progress'));
    if (e === 'All books') dispatch(fetchOwnBooks());
    if (e === 'Unread') dispatch(fetchOwnBooks('unread'));
  };

  return (
    <BaseMainWrapper>
      <LibraryContainer>
        <LibraryHeading>My library</LibraryHeading>
        <DropdownMenu
          selectedBooks={selectedBooks}
          handleSelectedCategory={handleSelectedCategory}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </LibraryContainer>

      {ownLibrary.length === 0 ? (
        <NoBooksScreen part="MyLibraryBooks" />
      ) : (
        <BookList>
          {Array.isArray(ownLibrary) &&
            ownLibrary.map(book => (
              <BookCard
                key={book._id}
                book={book}
                openBookModal={openBookModal}
                currentPage="MyLibrary"
              />
            ))}
        </BookList>
      )}

      <PortalModal active={modalOpen} setActive={setModalOpen}>
        <BookDetails
          bookData={bookData}
          closeModals={() => setModalOpen()}
          actionButtonLabel="Start reading"
        />
      </PortalModal>
    </BaseMainWrapper>
  );
};

export default Books;
