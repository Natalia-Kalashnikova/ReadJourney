import { Comment } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader=()=> {
  return (
      <div className={css.loaderContainer}>
      <Comment
        visible={true}
        height="80"
        width="80"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#F4442E"
      />
    </div>
  );
}

export default Loader;