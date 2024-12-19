import imgBooksDesc from '../../images/like-desctop.png';
import imgBooksDesc2x from '../../images/like-desctop@2x.png';
import imgBooksMob from '../../images/like-mobil.png';
import imgBooksMob2x from '../../images/like-mobil@2x.png';
import css from './NoBooksScreen.module.css';

const NoBooksScreen=({ messageType })=> {
  return (
    <div className={css.container}>
      <picture className={css.picture}>
        <source
          srcSet={`${imgBooksMob} 1x, ${imgBooksMob2x} 2x`}
          media="(max-width: 767px)"
        />
        <source
          srcSet={`${imgBooksDesc} 1x, ${imgBooksDesc2x} 2x`}
          media="(min-width: 766px)"
        />
        <img className={css.img} src={imgBooksDesc} alt="stack books" />
      </picture>
      {messageType === 'Recommended' && (
        <p className={css.message}>
          Oops <span className={css.errorText}>unfortunately</span> nothing was found
        </p>
      )}
      {messageType === 'MyLibraryBooks' && (
        <p className={css.message}>
          To start training, add <span className={css.errorText}>some of your books</span> or
          from the recommended ones
        </p>
      )}
    </div>
  );
}

export default NoBooksScreen;