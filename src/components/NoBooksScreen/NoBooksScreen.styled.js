import styled from 'styled-components';
import color from '../../global/GlobalColors.js';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 63px;
  margin: 63px 0;

  @media (min-width: 768px) {
    margin: 86px 0 120px 0;
  }

  @media (min-width: 1440px) {
    margin: 147px 0 0;
  }
`;

export const Picture = styled.picture`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${color.grayBlack_color};
  margin-bottom: 10px;

  @media (min-width: 768px) {
    width: 130px;
    height: 130px;
    margin-bottom: 20px;
  }
`;

export const Img = styled.img`
  width: 50px;

  @media (min-width: 768px) {
    width: 70px;
  }
`;

export const Message = styled.p`
  text-align: center;
  width: 274px;
`;

export const ErrorText = styled.span`
  color: ${color.grayLight_color};
`;
