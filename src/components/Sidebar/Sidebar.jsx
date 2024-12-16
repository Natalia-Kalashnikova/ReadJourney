import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logOutUser } from '../../redux/auth/authOperations.js';
import sprite from '../../images/sprite.svg';
import Button from '../Button/Button.jsx';
import css from './Sidebar.module.css';

const Sidebar=({ isOpen, onClose }) =>{
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonClick = async () => {
    try {
      await dispatch(logOutUser()).unwrap();
      navigate('/register');
    } catch (error) {
        console.error('Logout error:', error); 
      toast.error('Logout unsuccessful. An error occurred');
    }
  };

  return (
    <div className={`${css.menuContainer} ${isOpen ? css.menuContainerOpen : ''}`}>
      <button className={css.closeButton} onClick={onClose}>
        <svg width={28} height={28}>
          <use href={`${sprite}#icon-x`} />
        </svg>
      </button>
      <div className={css.linksContainer}>
          <NavLink
            to="/recommended"
            className={({ isActive }) =>
              isActive ? `${css.navigationLink} ${css.active}` : css.navigationLink
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/library"
            className={({ isActive }) =>
              isActive ? `${css.navigationLink} ${css.active}` : css.navigationLink
            }
          >
            My library
          </NavLink>
      </div>
      <div>
        <Button label="Log out" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default Sidebar;



