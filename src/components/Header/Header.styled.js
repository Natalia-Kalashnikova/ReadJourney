import styled from 'styled-components';
import color from '../../global/GlobalColors.js';
import { NavLink } from 'react-router-dom';
import Button from '../Button/Button.jsx';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;

  @media (min-width: 768px) {
    padding-top: 32px;
  }
`;
export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  width: 335px;
  height: 57px;
  padding: 11px 20px;

  background: ${color.blackLight_color};
  border-radius: 15px;

  @media (min-width: 768px) {
    width: 704px;
    height: 74px;
    padding: 16px;
  }

  @media (min-width: 1440px) {
    width: 1216px;
  }
`;

export const NavContainer = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: block;
    margin-left: 223px;
  }

  @media (min-width: 1440px) {
    margin-left: 332px;
  }
`;

export const NavigationLink = styled(NavLink)`
  position: relative;

  padding: 10px 2px;

  font-size: 14px;
  line-height: 1.13;
  color: ${color.grayLight_color};

  transition: color 0.2s linear;

  &:focus {
    color: ${color.whitePrimary_color};
  }

  &.active {
    color: ${color.whitePrimary_color};
    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      background-color: ${color.blue_color};
      border-radius: 2px;
      left: 50%;
      transform: translateX(-50%);
      bottom: -3px;
    }
  }

  &:not(:last-child) {
    @media (min-width: 768px) {
      margin-right: 32px;
    }

    @media (min-width: 1440px) {
      margin-right: 40px;
    }
  }

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
`;

export const AvatarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  margin-right: 10px;

  background: ${color.grayBlack_color};
  border-radius: 50%;
  border: 1px solid ${color.whiteLightTranslucent_color};

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
    margin-right: 16px;
  }

  @media (min-width: 1440px) {
    margin-right: 8px;
  }
`;

export const Username = styled.p`
  display: none;

  @media (min-width: 1440px) {
    display: block;

    margin-right: 16px;

    font-size: 16px;
    font-weight: 700;
  }
`;

export const LogoutButton = styled(Button)`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const MenuToggle = styled.button`
  margin: auto 0;

  background: transparent;

  scale: 1;
  transition: scale 0.25s linear;

  &:hover,
  &:focus {
    scale: 1.1;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
