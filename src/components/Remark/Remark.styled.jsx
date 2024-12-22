import color from '../../global/GlobalColors.js';
import styled from 'styled-components';

export const RemarkContainer = styled.div`
  display: none;

  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 14px;
    width: 313px;
    height: 83px;
    border-radius: 12px;

    background: ${color.grayBlack_color};
    padding: 14px 20px;
  }
`;
export const RemarkText = styled.p`
  width: 219px;
  color: ${color.grayLight_color};
`;

export const RemarkSpan = styled.span`
  color: ${color.whitePrimary_color};
`;