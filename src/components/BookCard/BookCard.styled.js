import styled from 'styled-components';
import color from '../../global/GlobalColors.js';

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
  margin-bottom: 8px;

  background: ${color.grayBlack_color};
  border-radius: 8px;
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
  margin-bottom: 2px;
  
  white-space: nowrap;
  font-size: 14px;
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Author = styled.p`
  font-size: 10px;
  white-space: nowrap;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${color.grayLight_color};
`;

export const DeleteButton = styled.button`
  background: transparent;
  transition: transform 0.25s linear;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;
