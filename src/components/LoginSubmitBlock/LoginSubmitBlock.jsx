import { NavLink } from 'react-router-dom';
import css from './LoginSubmitBlock.module.css';

const LoginSubmitBlock = () => {
  return (
    <div>
      <button type="submit" className={css.actionButton}>
        Log In
      </button>
      <NavLink to="/register" className={css.actionLink}>
        Don't have an account?
      </NavLink>
    </div>
  );
};

export default LoginSubmitBlock;
