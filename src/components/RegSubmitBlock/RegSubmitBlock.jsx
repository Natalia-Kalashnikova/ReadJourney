import { NavLink } from 'react-router-dom';
import css from './RegSubmitBlock.module.css';

const RegSubmitBlock=() =>{
  return (
    <div>
      <button
        type="submit"
        className={css.actionButton}
      >
        Registration
      </button>
      <NavLink to="/login" className={css.actionLink}>
        Already have an account?
      </NavLink>
    </div>
  );
}

export default RegSubmitBlock;