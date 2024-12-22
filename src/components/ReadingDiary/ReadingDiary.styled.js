import color from '../../global/GlobalColors.js';
import styled from 'styled-components';

export const DiaryList = styled.ul`
  width: 295px;
  height: 211px;
  background: ${color.grayBlack_color};
  border-radius: 12px;
  padding: 20px;
  overflow: hidden;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    width: 321px;
    height: 252px;
  }
  @media (min-width: 1440px) {
    width: 313px;
    height: 373px;
  }
`;
export const DiaryContainer = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 27px;
    width: 2px;
    height: calc(100% - 20px);
    background: linear-gradient(
      to bottom,
      transparent,
      ${color.blackLight_color} 15px
    );

    @media (min-width: 768px) {
      left: 29px;
    }
    @media (min-width: 1440px) {
      left: 30px;
      height: calc(100% - 40px);
    }
  }
`;
export const DiaryDayContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  @media (min-width: 1440px) {
    margin-bottom: 28px;
  }
`;
export const DayContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  background: ${({ first }) =>
    first === 'true' ? color.whitePrimary_color : color.grayLight_color};
  border-radius: 4px;
  margin-right: 9px;

  @media (min-width: 768px) {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
`;
export const NestedDiv = styled.div`
  width: 8px;
  height: 8px;
  background: ${({ first }) =>
    first === 'true' ? color.blackBackground : color.blackLight_color};
  border-radius: 2px;

  @media (min-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;
export const DiaryHeader = styled.h5`
  font-size: 12px;
  font-weight: 700;
  margin-right: 107px;

  @media (min-width: 768px) {
    font-size: 16px;
    margin-right: 94px;
  }
  @media (min-width: 1440px) {
    margin-right: 86px;
  }
`;
export const DiaryPages = styled.p`
  font-size: 12px;
  color: ${color.grayLight_color};
  letter-spacing: -0.28;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
export const DiaryEntryListItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-bottom: 17px;

  @media (min-width: 768px) {
    margin-bottom: 14px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 22px;
  }
`;
export const EntryDetails = styled.div`
  margin-left: 25px;

  @media (min-width: 768px) {
    margin-left: 30px;
  }
  @media (min-width: 1440px) {
  }
`;
export const EntryPercent = styled.p`
  font-size: 14px;
  line-height: 1;
  margin-bottom: 4px;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 8px;
  }
  @media (min-width: 1440px) {
  }
`;
export const EntryDuration = styled.p`
  font-size: 10px;
  color: ${color.grayLight_color};

  @media (min-width: 768px) {
    font-size: 12px;
  }
`;

export const EntryActions = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 7px;

  @media (min-width: 768px) {
    gap: 8px;
  }
`;

export const ActionSvg = styled.svg`
  width: 43px;
  height: 17px;

  @media (min-width: 768px) {
    width: 59px;
    height: 25px;
  }
  @media (min-width: 1440px) {
  }
`;
export const ActionButton = styled.button`
  background: transparent;
  stroke: ${color.grayLight_color};
  transition: stroke 0.3s ease;

  &:hover {
    stroke: ${color.focusColor};
  }
  &:focus {
    outline: none;
  }
`;
export const PagesPerHour = styled.p`
  max-width: 43px;
  text-align: center;
  font-size: 10px;
  color: ${color.grayLight_color};

  @media (min-width: 768px) {
    font-size: 12px;
    max-width: 59px;
  }
`;