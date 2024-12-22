import styled from 'styled-components';
import color from '../../global/GlobalColors.js';
import { NavLink } from 'react-router-dom';

export const ActionButton = styled.button`
  margin-right: 14px;
  padding: ${props => (props.$log === 'login' ? '12px 45px' : '12px 29px')};

  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  color: ${color.blackLight_color};

  border-radius: 30px;

  transition: color 0.3s linear, background 0.3s linear;

  &:hover,
  &:focus {
    color: ${color.whitePrimary_color};
    background: ${color.blackLight_color};
    box-shadow: 0 0 0 2px ${color.whiteLightTranslucent_color};
  }

  @media (min-width: 768px) {
    margin-right: 20px;
    padding: 16px 54px;

    font-size: 20px;
  }
`;

export const ActionLink = styled(NavLink)`
  position: relative;

  font-weight: 500;
  font-size: 12px;
  letter-spacing: -0.2px;
  color: ${color.grayLight_color};

  transition: color 0.3s linear;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -3px;

    height: 1px;
    background: ${color.grayLight_color};

    transition: background 0.3s linear;
  }

  &:hover,
  &:focus {
    color: ${color.whitePrimary_color};

    &::after {
      background: ${color.whitePrimary_color};
    }
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
