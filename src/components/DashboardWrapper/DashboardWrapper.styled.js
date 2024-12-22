import color from '../../global/GlobalColors.js';
import styled from 'styled-components';

export const DBWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  max-width: 335px;
  height: 100%;
  border-radius: 30px;
  background: ${color.blackLight_color};
  padding: 20px;

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