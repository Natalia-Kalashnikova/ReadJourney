import BookDetails from '../BookDetails/BookDetails.jsx';
import PortalModal from '../Modal/PortalModal/PortalModal.jsx';
import MainWrapper from '../MainWrapper/MainWrapper.jsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOwnBooks } from '../../redux/books/booksOperations.js';
import { selectOwnBooks } from '../../redux/books/booksSelectors.js';
import css from './Books.module.css';
import DropdownMenu from '../DropdownMenu/DropdownMenu.jsx';
import BookCard from '../BookCard/BookCard.jsx';
import NoBooksScreen from '../NoBooksScreen/NoBooksScreen.jsx';

const Books = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [bookData, setBookData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const userLibrary = useSelector(selectOwnBooks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOwnBooks(selectedCategory));
  }, [dispatch, selectedCategory]);
  const openBookModal = book => {
    setModalOpen(true);
    setBookData(book);
  };
  const handleSelectedCategory = category => {
    setSelectedCategory(category);
  };
  return (
    <MainWrapper>
      <div className={css.libraryContainer}>
        <h1 className={css.libraryHeader}>My library</h1>
      </div>
      <DropdownMenu
        selectedCategory={selectedCategory}
        handleSelectedCategory={handleSelectedCategory}
      />
      {userLibrary.length === 0 ? (
        <NoBooksScreen purpose="UserLibraryBooks" />
      ) : (
        <ul className={css.bookList}>
          {userLibrary.map(book => (
            <BookCard
              key={book._id}
              book={book}
              openBookModal={openBookModal}
              currentPage="MyLibrary"
            />
          ))}
        </ul>
      )}
      <PortalModal active={modalOpen} setActive={setModalOpen}>
        <BookDetails
          bookData={bookData}
          closeModals={() => setModalOpen(false)}
          btnLabel="Start Reading"
        />
      </PortalModal>
    </MainWrapper>
  );
};

export default Books;
