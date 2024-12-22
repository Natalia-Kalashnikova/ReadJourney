import styled from 'styled-components';
import color from '../../global/GlobalColors.js';

export const MenuContainer = styled.div`
  position: fixed;
  right: 0;
  top: 0;

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  gap: 100px;
  width: 50%;
  height: 100%;
  padding: 280px 4px 40px 4px;

  background: ${color.grayBlack_color};

  transform: translateX(${props => (props.open ? '0%' : '100%')});
  transition: transform 0.25s ease;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 34px;
  right: 40px;

  background: transparent;

  transition: transform 0.25s linear;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4px;
  max-width: 70px;
`;
