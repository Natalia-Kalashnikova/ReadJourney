import styled from 'styled-components';
import color from '../../global/GlobalColors.js';
import { ErrorMessage, Field } from 'formik';

export const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px;

  @media (min-width: 768px) {
    gap: 16px;
    flex-direction: row;
    justify-content: center;
    padding: 32px;
  }
`;
export const FormBlock = styled.div`
  width: 100%;
  max-width: 335px;
  min-height: 411px;
  padding: 20px 20px 40px 20px;

  background: ${color.blackLight_color};
  border-radius: 30px;

  @media (min-width: 768px) {
    max-width: 704px;
    height: 960px;
    padding: 40px 64px;
  }
  @media (min-width: 1440px) {
    max-width: 600px;
    height: 736px;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 210px;

  @media (min-width: 768px) {
    height: 308px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: 768px) {
    gap: 14px;
  }
`;

export const FieldContainer = styled.div`
  position: relative;

  max-width: 295px;

  @media (min-width: 768px) {
    max-width: 472px;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 13px;
  left: 14px;

  color: ${color.grayLight_color};

  @media (min-width: 768px) {
    top: 16px;
  }
`;

export const StyledField = styled(Field)`
  width: 100%;
  max-width: 295px;
  height: 44px;
  padding: 14px;
  padding-left: ${props => props.paddingleft || '65px'};

  outline: none;
  color: ${color.whitePrimary_color};

  background: ${color.grayBlack_color};
  border: 1px solid
    ${props => (props.error === 'true' ? 'red' : 'rgba(18, 20, 23, 0.1)')};
  border-radius: 12px;

  @media (min-width: 768px) {
    max-width: 472px;
    height: 50px;
    padding: 16px 14px 16px 65px;
    padding-left: ${props => props.paddingleft || '65px'};
  }
`;

export const Icon = styled.svg`
  position: absolute;
  top: 13px;
  right: 13px;

  stroke: ${color.blackLight_color};
  fill: none;
  cursor: pointer;

  @media (min-width: 768px) {
    top: 17px;
    right: 17px;
  }
`;

export const ErrorFeedback = styled(ErrorMessage)`
  padding: 4px 0px 0px 14px;

  font-size: 10px;
  color: red;
`;

export const FeedbackMessage = styled.p`
  padding: 4px 0px 0px 14px;

  font-size: 10px;
  color: ${color.green_color};
`;
