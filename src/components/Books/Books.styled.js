import styled from 'styled-components';

export const LibraryContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const LibraryHeading = styled.h1`
  font-size: 20px;
  font-weight: 700;
  line-height: 1.14;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const BookList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 27px 20px;
  height: 260px;

  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    height: 523px;
  }
`;
