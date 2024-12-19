import BookCard from '../BookCard/BookCard.jsx';
import Container from '../Container/Container.jsx';
import MainWrapper from '../MainWrapper/MainWrapper.jsx';
import Pagination from '../Pagination/Pagination.jsx';
import PortalModal from '../Modal/PortalModal/PortalModal.jsx';
import BookDetails from '../BookDetails/BookDetails.jsx';
import RecommendedDashboard from '../RecommendedDashboard/RecommendedDashboard.jsx';
import css from './Recommended.module.css';
import NoBooksScreen from '../NoBooksScreen/NoBooksScreen.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchRecommendedBooks } from '../../redux/books/booksOperations.js';
import { selectBookData, selectTotalPage } from '../../redux/books/booksSelectors.js';

const calculateLimit = width => {
  if (width < 768) {
    return 2;
  } else if (width >= 768 && width < 1440) {
    return 8;
  } else {
    return 10;
  }
};

const Recommended = () => {
  const dispatch = useDispatch();
  const results = useSelector(selectBookData);
  const totalPages = useSelector(selectTotalPage);
  const [modalOpen, setModalOpen] = useState(false);
  const [bookData, setBookData] = useState(false);
  const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(calculateLimit(window.innerWidth));
    
      useEffect(() => {
    const handleResize = () => {
      const newWidth = window.innerWidth;
      const newLimit = calculateLimit(newWidth);
      setLimit(newLimit);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    dispatch(fetchRecommendedBooks({ page, limit }));
  }, [dispatch, page, limit]);
    
      const handlePageChange = newPage => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  const openLoginModal = book => {
    setModalOpen(true);
    setBookData(book);
    };
    
      if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }

    return (
        <Container>
            <RecommendedDashboard />
        <MainWrapper>
                <div className={css.sectionContainer}>
                    <h1 className={css.libraryHeading}>Recommended</h1>
                    <Pagination totalPages={totalPages} handlePageChange={handlePageChange} page={page} />
                </div>
                {results && results.length > 0 ? (
                    <ul className={css.listContainer}>
                        {results.map(book => (
                            <BookCard  key={book._id} book={book} openLoginModal={openLoginModal} />                            
                        ))}
                    </ul>
                ) : (
                     <NoBooksScreen messageType="Recommended" />   
                )}
        </MainWrapper>

        <PortalModal active={modalOpen} setActive={setModalOpen}>
                <BookDetails bookData={bookData} closeModals={() => setModalOpen()} btnLabel="Add to library" />
            </PortalModal>
        </Container> 
    );
}

export default Recommended;
    