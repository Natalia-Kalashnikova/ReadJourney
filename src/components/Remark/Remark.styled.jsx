import styled from 'styled-components';
import color from '../../global/GlobalColors.js';

export const RemarkContainer = styled.div`
  display: none;

  @media (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 14px;
    width: 313px;
    height: 83px;
    padding: 14px 20px;

    border-radius: 12px;

    background: ${color.grayBlack_color};
  }
`;

export const RemarkText = styled.p`
  width: 219px;
  color: ${color.grayLight_color};
`;

export const RemarkSpan = styled.span`
  color: ${color.whitePrimary_color};
`;
