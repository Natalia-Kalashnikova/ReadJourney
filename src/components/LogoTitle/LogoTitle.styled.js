import styled from 'styled-components';
import color from '../../global/GlobalColors.js';

export const Wrapper = styled.div`
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-bottom: 40px;
  }
`;
export const CustomLogo = styled.div`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 108px;
  }
`;

export const TitleHeading = styled.h2`
  font-size: 32px;
  font-weight: 700;
  line-height: 1;

  @media (min-width: 768px) {
    width: 444px;
    font-size: 64px;
    line-height: 0.94;
  }
`;

export const HighlightedText = styled.span`
  color: ${color.whiteLightTranslucent_color};
`;
