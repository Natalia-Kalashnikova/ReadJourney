import styled from 'styled-components';
import color from '../../global/GlobalColors.js';

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  max-width: 335px;
  min-height: 411px;
  padding: 0 20px;

  background: ${color.blackLight_color};
  border-radius: 30px;

  @media (min-width: 768px) {
    display: none;
  }

  @media (min-width: 1440px) {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 0;
    max-width: 600px;
    height: 736px;
  }
`;

export const AuthImage = styled.img`
  max-width: 100%;

  @media (min-width: 768px) {
    display: none;
    height: auto;
  }

  @media (min-width: 1440px) {
    display: block;
  }
`;
