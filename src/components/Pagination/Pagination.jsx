import sprite from '../../images/sprite.svg';
import {
  PaginationButton,
  PaginationContainer,
  PaginationSvg,
} from './Pagination.styled';

const Pagination = ({ totalPages, handlePageChange, page }) => {
  return (
    <PaginationContainer>
      <PaginationButton
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}>
        <PaginationSvg stroke={page === 1 ? 'true' : ''}>
          <use href={`${sprite}#icon-chevron-left`} />
        </PaginationSvg>
      </PaginationButton>
      <PaginationButton
        disabled={page === totalPages}
        onClick={() => handlePageChange(page + 1)}>
        <PaginationSvg stroke={page === totalPages ? 'true' : ''}>
          <use href={`${sprite}#icon-chevron-right`} />
        </PaginationSvg>
      </PaginationButton>
    </PaginationContainer>
  );
};

export default Pagination;
