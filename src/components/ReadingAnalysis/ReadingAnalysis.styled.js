import styled from 'styled-components';
import color from '../../global/GlobalColors.js';
import { Circle } from 'rc-progress';

export const AnalysisText = styled.p`
  display: none;

  @media (min-width: 1440px) {
    display: block;
    margin-bottom: 20px;

    color: ${color.grayLight_color};
  }
`;
export const AnalysisContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 295px;
  height: 211px;
  padding: 20px;

  background: ${color.grayBlack_color};
  border-radius: 12px;

  @media (min-width: 768px) {
    min-width: 321px;
    height: 252px;
    padding: 28px;
  }

  @media (min-width: 1440px) {
    min-width: 313px;
    height: 281px;
    padding: 30px 20px 20px 20px;
  }
`;

export const CircleContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const StyledCircle = styled(Circle)`
  width: 116px;

  @media (min-width: 768px) {
    width: 138px;
  }

  @media (min-width: 1440px) {
    width: 168px;
  }
`;

export const CirclePercentage = styled.p`
  position: absolute;
  z-index: 1;

  font-size: 18px;
  font-weight: 700;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const ProgressInfo = styled.div`
  display: flex;
`;

export const ProgressData = styled.div`
  width: 14px;
  height: 14px;
  margin-right: 15px;

  border-radius: 4px;
  background: ${color.green_color};
`;

export const Percentage = styled.h6`
  margin-bottom: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: 1;

  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const PagesRead = styled.p`
  font-size: 10px;
  font-weight: 500;
  color: ${color.grayLight_color};

  @media (min-width: 768px) {
    font-size: 12px;
  }
`;
