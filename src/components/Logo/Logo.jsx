import { useLocation } from 'react-router-dom';
import sprite from '../../images/sprite.svg';
import css from './Logo.module.css';

const Logo=()=> {
  const location = useLocation();
  const page =
    location.pathname === '/register' || location.pathname === '/login';

  return (
    <div className={css.logoContainer}>
      <svg width={42} height={17}>
        <use href={`${sprite}#icon-Logo`} />
      </svg>
      <p className={`${css.logoText} ${page ? css.page : ''}`}>
        READ JOURNEY
      </p>
    </div>
  );
}

export default Logo;
