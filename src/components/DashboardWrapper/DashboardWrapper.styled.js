import styled from 'styled-components';
import color from '../../global/GlobalColors.js';

export const DBWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 335px;
  height: 100%;
  padding: 20px;

  background: ${color.blackLight_color};
  border-radius: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 704px;
    height: 336px;
    padding: 32px;
  }

  @media (min-width: 1440px) {
    flex-direction: column;
    max-width: 353px;
    height: 651px;
    padding: 40px 20px 20px 20px;
  }
`;
