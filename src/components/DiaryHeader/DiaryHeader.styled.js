import styled from 'styled-components';
import color from '../../global/GlobalColors.js';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;
export const HeaderTitle = styled.h4`
  font-size: 18px;
  font-weight: 700;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const HeaderButton = styled.button`
  background: transparent;

  transition: transform 0.25s linear;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

export const HeaderSvg = styled.svg`
  width: 16px;
  height: 16px;

  fill: ${props =>
    props.diarystat ? color.grayLight_color : color.whitePrimary_color};
  stroke: ${props =>
    props.diarystat ? color.grayLight_color : color.whitePrimary_color};

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`;
