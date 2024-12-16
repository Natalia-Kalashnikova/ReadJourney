import  { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logOutUser } from '../../redux/auth/authOperations.js';
import { selectUser } from '../../redux/auth/authSelectors.js';
import PortalModal from '../Modal/PortalModal/PortalModal.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import Logo from '../Logo/Logo.jsx';
import { toast } from 'react-toastify';
import css from './Header.module.css';

const Header=()=> {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name } = useSelector(selectUser);
  const firstLetterAvatar = name?.slice(0, 1).toUpperCase();

  const handleButtonClick = async () => {
    try {
      await dispatch(logOutUser()).unwrap();
      navigate('/register');
    } catch (error) {
      console.error('Logout error:', error); 
      toast.error('Logout unsuccessful. An error occurred');
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={css.headerContainer}>
      <div className={css.headerInner}>
        <Link to="/recommended">
          <Logo />
              </Link>
              
        <nav
          className={`${css.navContainer} ${
            isMenuOpen && css.navContainerVisible
          }`}
        >
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
        </nav>
        <div className={css.userInfoContainer}>
          <div className={css.avatarWrapper}>{firstLetterAvatar}</div>
          <p className={css.username}>{name}</p>
          <button className={css.logoutButton} onClick={handleButtonClick}>
            Log out
          </button>
          <button className={css.menuToggle} onClick={toggleMenu}>
            <svg width={28} height={28}>
              <use href="#icon-menu" />
            </svg>
          </button>
        </div>
      </div>
      <PortalModal active={isMenuOpen} setActive={setIsMenuOpen}>
        <Sidebar
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
        />
      </PortalModal>
    </div>
  );
}

export default Header;
