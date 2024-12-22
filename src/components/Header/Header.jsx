import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logOutUser } from '../../redux/auth/authOperations.js';
import { selectUser } from '../../redux/auth/authSelectors.js';
import PortalModal from '../Modal/PortalModal/PortalModal.jsx';
import Logo from '../Logo/Logo.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx';
import sprite from '../../images/sprite.svg';
import {
  AvatarWrapper,
  HeaderContainer,
  HeaderInner,
  LogoutButton,
  MenuToggle,
  NavContainer,
  NavigationLink,
  UserInfoContainer,
  Username,
} from './Header.styled.js';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name } = useSelector(selectUser);
  const firstLetterAvatar = name?.slice(0, 1).toUpperCase();

  const handleActionButtonClick = async () => {
    try {
      await dispatch(logOutUser()).unwrap();
      navigate('/login');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Logout unsuccessful. An error occurred');
    }
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <HeaderContainer>
      <HeaderInner>
        <Link to="/recommended">
          <Logo />
        </Link>

        <NavContainer>
          <NavigationLink to="/recommended">Home</NavigationLink>
          <NavigationLink to="/library">My library</NavigationLink>
        </NavContainer>

        <UserInfoContainer>
          <AvatarWrapper>{firstLetterAvatar}</AvatarWrapper>
          <Username>{name}</Username>
          <LogoutButton
            label="Log out"
            onClick={handleActionButtonClick}
            width="114px"
          />
          <MenuToggle onClick={toggleMenu}>
            <svg width={28} height={28}>
              <use href={`${sprite}#icon-menu`} />
            </svg>
          </MenuToggle>
        </UserInfoContainer>
      </HeaderInner>

      <PortalModal active={isMenuOpen} setActive={setIsMenuOpen}>
        <Sidebar isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      </PortalModal>
    </HeaderContainer>
  );
};

export default Header;
