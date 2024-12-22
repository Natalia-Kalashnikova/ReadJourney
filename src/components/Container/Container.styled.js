import styled from 'styled-components';

export const GBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0;

  @media (min-width: 768px) {
    gap: 16px;
    padding: 16px 0;
  }
  @media (min-width: 1440px) {
    flex-direction: row;
  }
`;
