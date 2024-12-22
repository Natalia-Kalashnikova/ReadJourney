import sprite from '../../images/sprite.svg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { logOutUser } from '../../redux/auth/authOperations.js';
import { NavigationLink } from '../Header/Header.styled.js';
import Button from '../Button/Button.jsx';
import {
  CloseButton,
  LinksContainer,
  MenuContainer,
} from './Sidebar.styled.js';

const Sidebar = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleActionButtonClick = async () => {
    try {
      await dispatch(logOutUser()).unwrap();
      navigate('/register');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Logout unsuccessful. An error occurred');
    }
  };

  return (
    <MenuContainer open={isOpen}>
      <CloseButton onClick={onClose}>
        <svg width={28} height={28}>
          <use href={`${sprite}#icon-x`} />
        </svg>
      </CloseButton>

      <LinksContainer>
        <NavigationLink to="/recommended">Home</NavigationLink>
        <NavigationLink to="/library">My library</NavigationLink>
      </LinksContainer>

      <div>
        <Button label="Log out" onClick={handleActionButtonClick} />
      </div>
    </MenuContainer>
  );
};

export default Sidebar;
