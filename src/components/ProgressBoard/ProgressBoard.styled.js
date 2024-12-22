import color from '../../global/GlobalColors.js';
import styled from 'styled-components';

export const ProgressContainer = styled.div`
  width: 295px;

  @media (min-width: 768px) {
    width: 305px;
  }
  @media (min-width: 1440px) {
    width: 313px;
  }
`;

export const PictureContainer = styled.picture`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${color.grayBlack_color};
  margin: 0 auto 20px auto;

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
    margin: 0 auto;
  }
  @media (min-width: 1440px) {
    margin: 0 auto 163px auto;
  }
`;

export const StarImage = styled.img`
  width: 32px;

  @media (min-width: 768px) {
    width: 50px;
  }
`;

export const ProgressTitle = styled.h4`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 14px;
`;

export const ProgressText = styled.p`
  color: ${color.grayLight_color};
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 60px;
  }
`;