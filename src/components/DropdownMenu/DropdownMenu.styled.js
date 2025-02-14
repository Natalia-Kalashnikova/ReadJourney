import styled from 'styled-components';
import color from '../../global/GlobalColors.js';

export const DropdownContainer = styled.div`
  position: relative;
`;

export const ChevronIcon = styled.svg`
  position: absolute;
  top: 15px;
  right: 15px;

  cursor: pointer;
`;

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  width: 120px;
  height: 40px;
  padding: 12px 14px;

  font-size: 12px;
  outline: none;

  background: transparent;
  border-radius: 12px;
  border: 1px solid rgb(62, 62, 62);
  cursor: pointer;

  @media (min-width: 768px) {
    width: 153px;
    height: 46px;
    padding: 14px;

    font-size: 14px;
  }
`;

export const OptionList = styled.ul`
  position: absolute;
  z-index: 1;
  top: 120%;
  left: 0;

  padding: 14px;
  margin: 0;
  width: 100%;

  color: ${color.grayLight_color};
  background-color: ${color.grayBlack_color};
  border-radius: 12px;
  border-top: none;
  list-style: none;
  display: ${props => (props.open ? 'block' : 'none')};
`;

export const OptionItem = styled.li`
  cursor: pointer;
  font-size: 12px;

  &:not(:last-child) {
    margin-bottom: 7px;
  }

  &:hover {
    color: ${color.whitePrimary_color};
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
