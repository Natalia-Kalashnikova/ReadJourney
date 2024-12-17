import Logo from '../Logo/Logo.jsx';
import css from './LogoTitle.module.css';

const LogoTitle=()=> {
  return (
      <div className={css.wrapper}>
          <div className={css.customLogo}>
        <Logo />
      </div>
          <h2 className={css.titleHeading}>
              Expand your mind, reading <span className={css.highlightedText}>a book</span>
      </h2>
    </div>
  );
}

export default LogoTitle;