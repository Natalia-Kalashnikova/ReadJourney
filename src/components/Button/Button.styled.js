import color from '../../global/GlobalColors.js';
import styled from 'styled-components';

export const StyledButton = styled.button`
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 2%;
  padding: ${props => (props.$prop === 'true' ? '12px 24px' : '10px 20px')};
  border: 1px solid ${color.whiteLightTranslucent_color};
  border-radius: 30px;
  background: transparent;
  transition: color 0.3s linear, background 0.3s linear;

  &:hover,
  &:focus {
    color: ${color.blackLight_color};
    background: ${color.whitePrimary_color};
  }

  @media (min-width: 768px) {
    font-size: 16px;
    padding: ${props => (props.prop === 'true' ? '14px 28px' : '12px 28px')};
  }
`;