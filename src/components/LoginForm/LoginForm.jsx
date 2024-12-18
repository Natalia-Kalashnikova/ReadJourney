import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import sprite from '../../images/sprite.svg';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../redux/auth/authOperations.js';
import { toast } from 'react-toastify';
import css from './LoginForm.module.css';
import LoginSubmitBlock from '../LoginSubmitBlock/LoginSubmitBlock.jsx';
import AuthImage from '../AuthImage/AuthImage.jsx';
import LogoTitle from '../LogoTitle/LogoTitle.jsx';
import classNames from 'classnames';


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

const LoginForm = () => {
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
    <div className={css.container}>
      <div className={css.formBlock}>
        <LogoTitle />

        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}>
          {({ errors, touched }) => (
            <Form>
              <div className={css.formContainer}>
                <div className={css.formGroup}>
                  <div className={css.fieldContainer}>
                    <label className={css.label} htmlFor="email">
                      Mail:
                    </label>
                    <Field
                      className={classNames(css.field, css.nameField)}
                      id="email"
                      name="email"
                      type="email"
                      placeholder="nik@google.com"
                      error={errors.email && touched.email ? 'true' : 'false'}
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
                        <svg className={css.icon} width={20} height={20}>
                          <use href={`${sprite}#icon-pajamas_error`} />
                        </svg>
                      ) : (
                        <svg className={css.icon} width={20} height={20}>
                          <use href={`${sprite}#icon-check-ok`} />
                        </svg>
                      ))}
                    {touched.email && !errors.email && (
                      <p className={css.feedbackMessage}>Email is secure</p>
                    )}
                    <ErrorMessage
                      className={css.errorFeedback}
                      name="email"
                      component="div"
                    />
                  </div>

                  <div className={css.fieldContainer}>
                    <label className={css.label} htmlFor="password">
                      Password:
                    </label>
                    <Field
                      className={classNames(css.field, css.passwordField)}
                      id="password"
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="********"
                      error={
                        errors.password && touched.password ? 'true' : 'false'
                      }
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
                      <svg className={css.icon} width={20} height={20}>
                        <use href={`${sprite}#icon-pajamas_error`} />
                      </svg>
                    ) : !errors.password && touched.password ? (
                      <svg className={css.icon} width={20} height={20}>
                        <use href={`${sprite}#icon-check-ok`} />
                      </svg>
                    ) : showPassword ? (
                      <svg
                        className={css.icon}
                        width={20}
                        height={20}
                        onMouseDown={e => {
                          e.preventDefault();
                          togglePasswordVisibility();
                        }}>
                        <use href={`${sprite}#icon-eye`} />
                      </svg>
                    ) : (
                      <svg
                        className={css.icon}
                        width={20}
                        height={20}
                        onMouseDown={e => {
                          e.preventDefault();
                          togglePasswordVisibility();
                        }}>
                        <use href={`${sprite}#icon-eye-off`} />
                      </svg>
                    )}

                    {touched.password && !errors.password && (
                      <p className={css.feedbackMessage}>Password is secure</p>
                    )}
                    <ErrorMessage
                      className={css.errorFeedback}
                      name="password"
                      component="div"
                    />
                  </div>
                </div>
                <div style={{ marginTop: 'auto' }}>
                  <LoginSubmitBlock />
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <AuthImage />
    </div>
  );
};

export default LoginForm;
