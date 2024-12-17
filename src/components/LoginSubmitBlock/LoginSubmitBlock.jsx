import { NavLink } from 'react-router-dom';
import styles from './LoginSubmitBlock.module.css';

const LoginSubmitBlock=({ log }) =>{
  return (
    <div>
      <button
        type="submit"
        className={`${styles.actionButton} ${log === 'login' ? styles.login : ''}`}
      >
         Log In
      </button>
      <NavLink to="/register" className={styles.actionLink}>
        Don't have an account?
      </NavLink>
    </div>
  );
}

export default LoginSubmitBlock;