import color from '../../global/GlobalColors';
import styled from 'styled-components';

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  margin-right: 8px;
  background: transparent;
  border-radius: 50%;
  border: 1px solid ${color.whiteLightTranslucent_color};

  pointer-events: ${props => (props.disabled ? 'none' : 'auto')};

  &:last-child {
    margin-right: 0;
  }

  transition: transform 0.25s linear;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const PaginationSvg = styled.svg`
  width: 16px;
  height: 16px;
  stroke: ${props =>
    props.stroke === 'true' ? color.whiteLightTranslucent_color : color.whitePrimary_color};

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;