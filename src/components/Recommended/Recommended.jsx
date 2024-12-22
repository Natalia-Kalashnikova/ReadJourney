import Container  from '../Container/Container.jsx';
import BookDetails from '../BookDetails/BookDetails.jsx';
import BookCard from '../BookCard/BookCard.jsx';
import PortalModal from '../Modal/PortalModal/PortalModal.jsx';
import BaseMainWrapper from '../BaseMainWrapper/BaseMainWrapper.jsx';
import NoBooksScreen from '../NoBooksScreen/NoBooksScreen.jsx';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecommendedBooks } from '../../redux/books/booksOperations.js';
import {
  selectBookData,
  selectTotalPage,
} from '../../redux/books/booksSelectors.js';
import { ListContainer, SectionContainer } from './Recommended.styled';
import { LibraryHeading } from '../Books/Books.styled.js';
import RecommendedDashboard from '../RecommendedDashboard/RecommendedDashboard.jsx';
import Pagination from '../Pagination/Pagination.jsx';

const calculateLimit = width => {
  if (width < 768) {
    return 2;
  } else if (width >= 768 && width < 1440) {
    return 8;
  } else {
    return 10;
  }
};

const Recommended=()=> {
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

  const openBookModal = book => {
    setModalOpen(true);
    setBookData(book);
  };

  if (document.activeElement instanceof HTMLElement) {
    document.activeElement.blur();
  }

  return (
    <Container >
      <RecommendedDashboard />

      <BaseMainWrapper>
        <SectionContainer>
          <LibraryHeading>Recommended</LibraryHeading>
          <Pagination
            totalPages={totalPages}
            handlePageChange={handlePageChange}
            page={page}
          />
        </SectionContainer>

        {results && results.length > 0 ? (
          <ListContainer>
            {results.map(book => (
              <BookCard
                key={book._id}
                book={book}
                openBookModal={openBookModal}
              />
            ))}
          </ListContainer>
        ) : (
          <NoBooksScreen part="Recomended" />
        )}
      </BaseMainWrapper>

      <PortalModal active={modalOpen} setActive={setModalOpen}>
        <BookDetails
          bookData={bookData}
          closeModals={() => setModalOpen()}
          actionButtonLabel="Add to library"
        />
      </PortalModal>
    </Container>
  );
}

export default Recommended;