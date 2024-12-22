import styled from 'styled-components';

export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 22px;

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 27px 20px;
`;
