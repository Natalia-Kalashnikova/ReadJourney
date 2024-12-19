import sprite from '../../images/sprite.svg';
import css from './Pagination.module.css';
import classNames from 'classnames';

const Pagination=({ totalPages, handlePageChange, page })=> {
  return (
    <div className={css.paginationContainer}>
      <button
        className={classNames(css.paginationButton, { [css.disabled]: page === 1 })}
        disabled={page === 1}
        onClick={() => handlePageChange(page - 1)}
      >
        <svg
          className={classNames(css.paginationSvg, {
            [css.strokeDisabled]: page === 1,
            [css.strokeEnabled]: page !== 1,
          })}
        >
          <use href={`${sprite}#icon-chevron-left`} />
        </svg>
      </button>
      <button
        className={classNames(css.paginationButton, { [css.disabled]: page === totalPages })}
        disabled={page === totalPages}
        onClick={() => handlePageChange(page + 1)}
      >
        <svg
          className={classNames(css.paginationSvg, {
            [css.strokeDisabled]: page === totalPages,
            [css.strokeEnabled]: page !== totalPages,
          })}
        >
          <use href={`${sprite}#icon-chevron-right`} />
        </svg>
      </button>
    </div>
  );
}


export default Pagination;