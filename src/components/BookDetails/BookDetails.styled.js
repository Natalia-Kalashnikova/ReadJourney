import styled from 'styled-components';
import color from '../../global/GlobalColors.js';

export const StyledModal = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 335px;
  height: 100%;
  padding: 40px;

  background: ${color.blackLight_color};
  border-radius: 12px;

  @media (min-width: 768px) {
    width: 500px;
    height: 483px;
    padding: 50px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;

  right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  stroke: ${color.whitePrimary_color};
  background: transparent;
  transition: color 0.3s ease, transform 0.3s ease;

  &:hover,
  &:focus {
    transform: scale(1.2);
  }
`;

export const CoverImage = styled.img`
  width: 140px;
  height: 213px;
  margin-bottom: 16px;

  border-radius: 8px;

  @media (min-width: 768px) {
    width: 153px;
    height: 233px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 2px;

  text-align: center;
  font-size: 18px;
  line-height: 1;

  @media (min-width: 768px) {
    max-width: 400px;

    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const AuthorInfo = styled.p`
  margin-bottom: 4px;

  font-size: 12px;
  color: ${color.grayLight_color};

  @media (min-width: 768px) {
    max-width: 400px;

    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const PageCount = styled.p`
  margin-bottom: 20px;
  font-size: 10px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    width: 68px;
    height: 70px;
    margin-bottom: 32px;
  }
`;

export const SuccessMessage = styled.h3`
  margin-bottom: 10px;

  font-size: 18px;
  font-weight: 700;

  @media (min-width: 768px) {
    margin-bottom: 14px;
    font-size: 20px;
  }
`;

export const Heading = styled.p`
  text-align: center;
  color: ${color.grayLight_color};
`;

export const LibraryName = styled.span`
  color: ${color.whitePrimary_color};
`;
