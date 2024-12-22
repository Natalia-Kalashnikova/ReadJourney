import color from '../../global/GlobalColors.js';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 295px;
  min-height: 244px;
  border-radius: 12px;

  background: ${color.grayBlack_color};
  padding: 20px;

  @media (min-width: 768px) {
    max-width: 313px;
    height: 272px;
  }
  @media (min-width: 1440px) {
    margin-bottom: 20px;
  }
`;
export const StartWorkoutTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 40px;
  }
`;
export const ArgumentsBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  margin-bottom: 20px;
  @media (min-width: 768px) {
    margin-bottom: 26px;
  }
`;
export const StepContainer = styled.div`
  display: flex;
  gap: 12px;
`;
export const StepNumber = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 18px;
  font-weight: 700;
  color: ${color.blackLight_color};
  background: ${color.whitePrimary_color};

  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 20px;
  }
`;
export const StepDescription = styled.p`
  width: 190px;
`;
export const TextTwo = styled.p`
  width: 200px;
`;
export const DescriptionSpan = styled.span`
  color: ${color.grayLight_color};
`;

export const LinkTo = styled(NavLink)`
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

export const LibraryText = styled.p`
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

export const ArrowSvg = styled.svg`
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