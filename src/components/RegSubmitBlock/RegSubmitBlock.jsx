import { NavLink } from 'react-router-dom';
import styles from './RegSubmitBlock.module.css';

const RegSubmitBlock=({ log }) =>{
  return (
    <div>
      <button
        type="submit"
        className={`${styles.actionButton} ${log === 'login' ? styles.login : ''}`}
      >
        Registration
      </button>
      <NavLink to="/login" className={styles.actionLink}>
        Already have an account?
      </NavLink>
    </div>
  );
}

export default RegSubmitBlock;