import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  overflow: auto;

  background-color: rgba(20, 20, 20, 0.6);
  transition: all 0.3s ease;

  transform: translateY(-100%);
  opacity: 0;

  &.active {
    transform: translateY(0);
    opacity: 1;
  }
`;
