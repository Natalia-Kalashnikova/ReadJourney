import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/auth/authOperations.js';
import { toast } from 'react-toastify';
import {
  Container,
  ErrorFeedback,
  FeedbackMessage,
  FieldContainer,
  FormBlock,
  FormGroup,
  Icon,
  Label,
  StyledField,
  FormContainer,
} from './Auth.styled';
import LogoTitle from '../LogoTitle/LogoTitle.jsx';
import LoginSubmitBlock from '../LoginSubmitBlock/LoginSubmitBlock.jsx';
import AuthorizationImage from '../AuthImage/AuthImage.jsx';

const initialValues = {
  email: '',
  password: '',
};

const schema = Yup.object({
  email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email address')
    .required('Required'),
  password: Yup.string()
    .required('Required')
    .min(7, 'Password must be at least 7 characters'),
});

const LoginForm=()=> {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const handleSubmit = async values => {
    try {
      await dispatch(loginUser(values)).unwrap();
      navigate('/recommended');
    } catch (error) {
      if (error === 'Invalid email or password code 401') {
        toast.error('Invalid email or password. Please try again.');
      } else {
        toast.error('Please verify the email and password');
      }
    }
  };

  return (
    <Container>
      <FormBlock>
        <LogoTitle />

        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <FormContainer>
                <FormGroup>
                  <FieldContainer>
                    <Label htmlFor="email">Mail:</Label>
                    <StyledField
                      id="email"
                      name="email"
                      type="email"
                      placeholder="nik@google.com"
                      error={errors.email && touched.email ? 'true' : 'false'}
                      paddingleft="53px"
                      style={{
                        borderColor:
                          touched.email && errors.email
                            ? 'red'
                            : touched.email && !errors.email
                            ? 'green'
                            : 'defaultColor',
                      }}
                    />
                    {touched.email &&
                      (errors.email ? (
                        <Icon width={20} height={20}>
                          <use href={`${sprite}#icon-pajamas_error`} />
                        </Icon>
                      ) : (
                        <Icon width={20} height={20}>
                          <use href={`${sprite}#icon-check-ok`} />
                        </Icon>
                      ))}
                    {touched.email && !errors.email && (
                      <FeedbackMessage>Email is secure</FeedbackMessage>
                    )}
                    <ErrorFeedback name="email" component="div" />
                  </FieldContainer>

                  <FieldContainer>
                    <Label htmlFor="password">Password:</Label>
                    <StyledField
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="********"
                      error={
                        errors.password && touched.password ? 'true' : 'false'
                      }
                      paddingleft="86px"
                      style={{
                        borderColor:
                          touched.password && errors.password
                            ? 'red'
                            : touched.password && !errors.password
                            ? 'green'
                            : 'defaultColor',
                      }}
                    />

                    {errors.password && touched.password ? (
                      <Icon width={20} height={20}>
                        <use href={`${sprite}#icon-pajamas_error`} />
                      </Icon>
                    ) : !errors.password && touched.password ? (
                      <Icon width={20} height={20}>
                        <use href={`${sprite}#icon-check-ok`} />
                      </Icon>
                    ) : showPassword ? (
                      <Icon
                        width={20}
                        height={20}
                        onMouseDown={e => {
                          e.preventDefault();
                          togglePasswordVisibility();
                        }}
                      >
                        <use href={`${sprite}#icon-eye`} />
                      </Icon>
                    ) : (
                      <Icon
                        width={20}
                        height={20}
                        onMouseDown={e => {
                          e.preventDefault();
                          togglePasswordVisibility();
                        }}
                      >
                        <use href={`${sprite}#icon-eye-off`} />
                      </Icon>
                    )}

                    {touched.password && !errors.password && (
                      <FeedbackMessage>Password is secure</FeedbackMessage>
                    )}
                    <ErrorFeedback name="password" component="div" />
                  </FieldContainer>
                </FormGroup>
                <LoginSubmitBlock />
              </FormContainer>
            </Form>
          )}
        </Formik>
      </FormBlock>

      <AuthorizationImage />
    </Container>
  );
}

export default LoginForm;

