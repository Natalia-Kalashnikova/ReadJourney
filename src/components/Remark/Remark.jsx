import imgBooksDesc from '../../images/like-desctop.png';
import imgBooksDesc2x from '../../images/like-desctop@2x.png';
import css from './Remark.module.css';

const Remark=()=> {
  return (
      <div className={css.remarkContainer}>
      <picture>
        <source srcSet={imgBooksDesc2x} media="(min-resolution: 192dpi)" />
        <img src={imgBooksDesc} alt="stack books" width={40} />
      </picture>
          <p className={css.remarkText}>
        "Books are <span className={css.remarkSpan}>windows</span> to the world, and reading is
        a journey into the unknown."
      </p>
    </div>
  );
}

export default Remark;