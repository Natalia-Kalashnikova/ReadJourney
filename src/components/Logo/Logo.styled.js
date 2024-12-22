import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
`;

export const LogoText = styled.p`
  display: none;

  @media (min-width: 768px) {
    display: ${({ $page }) => ($page ? 'block' : 'none')};
  }
  @media (min-width: 1440px) {
    display: block;
  }
`;