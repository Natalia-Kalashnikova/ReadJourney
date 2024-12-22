import color from '../../global/GlobalColors.js';
import styled from 'styled-components';

export const ListItem = styled.li`
  width: 137px;
  height: 248px;
  background: transparent;

  &:last-child {
    margin-right: 0;
  }
`;
export const BookImage = styled.img`
  width: 137px;
  height: 208px;
  border-radius: 8px;
  margin-bottom: 8px;
  background: ${color.grayBlack_color};
  cursor: pointer;
`;

export const DetailsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const BookDetails = styled.div`
  max-width: ${({ $page }) => ($page === 'true' ? '89px' : '137px')};
`;

export const Title = styled.h3`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Author = styled.p`
  font-size: 10px;
  color: ${color.grayLight_color};
  white-space: nowrap;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const DeleteButton = styled.button`
  background: transparent;
  transition: transform 0.25s linear;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;