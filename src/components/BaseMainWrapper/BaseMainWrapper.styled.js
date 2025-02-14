import styled from 'styled-components';
import color from '../../global/GlobalColors.js';

export const MainWrapper = styled.div`
  width: 100%;
  max-width: 335px;
  height: 100%;
  padding: 40px 20px;

  background: ${color.blackLight_color};
  border-radius: 30px;

  @media (min-width: 768px) {
    max-width: 704px;
    padding: 40px;
  }
  @media (min-width: 1440px) {
    max-width: 847px;
    height: 651px;
    padding: 40px 40px 28px 40px;
  }
`;
