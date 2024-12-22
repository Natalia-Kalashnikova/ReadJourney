import color from '../../global/GlobalColors.js';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const RecommendedBooksContainer = styled.div`
  width: 100%;
  max-width: 295px;
  height: 244px;
  border-radius: 12px;
  background: ${color.grayBlack_color};
  padding: 20px;
  margin-top: 20px;

  @media (min-width: 768px) {
    max-width: 313px;
    height: 272px;
    padding: 26px 20px;
    margin-top: 0px;
  }
  @media (min-width: 1440px) {
    height: 259px;
    padding: 20px;
  }
`;

export const RecommendedBooksHeading = styled.h4`
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 14px;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

export const BooksList = styled.ul`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 385px) {
    gap: 4px;
  }
`;

export const BookListItem = styled.li`
  width: 71px;
  height: 141px;
`;

export const BookImage = styled.img`
  width: 71px;
  height: 107px;
  border-radius: 8px;
  margin-bottom: 8px;
  cursor: pointer;
`;

export const BookTitle = styled.h4`
  font-size: 10px;
  font-weight: 700;
  margin-bottom: 2px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const BookAuthor = styled.p`
  font-size: 10px;
  color: ${color.grayLight_color};

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const HomeLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${color.grayLight_color};
  margin: auto 0;

  &:hover::after,
  &:focus::after {
    color: red;
  }
`;

export const HomeText = styled.p`
  position: relative;
  font-size: 12px;
  transition: color 0.3s linear;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0px;
    height: 1px;
    background: ${color.grayLight_color};
    transition: background 0.3s linear;
  }

  &:hover,
  &:focus {
    color: ${color.whitePrimary_color};
    &::after {
      background: ${color.whitePrimary_color};
    }
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const ArrowIcon = styled.svg`
  width: 20px;
  height: 20px;
  transition: transform 0.25s ease;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }

  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;