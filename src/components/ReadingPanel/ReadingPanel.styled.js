import { ErrorMessage, Field } from 'formik';
import color from '../../global/GlobalColors.js';
import styled from 'styled-components';

export const Forma = styled.div`
  margin-bottom: 40px;

  @media (min-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
  max-width: 295px;
  margin-bottom: 20px;

  @media (min-width: 1440px) {
    max-width: 313px;
  }
`;

export const FieldContainer = styled.div`
  position: relative;
`;

export const Label = styled.label`
  position: absolute;
  top: 14px;
  left: 14px;
  font-size: 12px;
  color: ${color.grayLight_color};

  @media (min-width: 768px) {
    top: 16px;
    font-size: 14px;
  }
`;

export const FormField = styled(Field)`
  width: 100%;
  height: 44px;
  font-size: 12px;
  border: none;
  border-radius: 12px;
  padding: 16px 14px 16px 65px;

  outline: none;
  color: ${color.whitePrimary_color};
  background: ${color.grayBlack_color};
  padding-left: ${props => props.paddindleft || '86px'};
  border: 1px solid
    ${props =>
      props.error === 'true' ? color.focusColor : 'rgba(18, 20, 23, 0.1)'};
  @media (min-width: 768px) {
    height: 50px;
    font-size: 14px;
  }
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  font-size: 10px;
  color: ${color.focusColor};
  padding: 4px 0px 0px 14px;
`;
