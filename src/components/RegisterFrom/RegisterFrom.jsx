import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import css from './RegisterFrom.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../redux/auth/authOperations.js';
import { toast } from 'react-toastify';
import RegSubmitBlock from '../RegSubmitBlock/RegSubmitBlock.jsx';
import AuthImage from '../AuthImage/AuthImage.jsx';
import LogoTitle from '../LogoTitle/LogoTitle.jsx';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const schema = Yup.object({
  name: Yup.string().required('Required').min(2, 'The name must have at least 2 letters'),
  email: Yup.string()
    .matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/, 'Invalid email address')
    .required('Required'),
  password: Yup.string().required('Required').min(7, 'Password must be at least 7 characters'),
});

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (values) => {
    try {
      await dispatch(registerUser(values)).unwrap();
      navigate('/recommended');
    } catch (error) {
      if (error === 'Request failed with status code 409') {
        toast.error('A user with this email address already exists');
      } else {
        toast.error('Registration was unsuccessful. Please try again later.');
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
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <div className={css.formContainer}>
                <div className={css.fieldContainer}>
                  <label className={css.label} htmlFor="name">
                    Name:
                  </label>
                  <Field
                    id="name"
                    name="name"
                    type="text"
                    className={`${css.field} ${
                      touched.name && errors.name ? css.error : ''
                    }`}
                    placeholder="Nik Ovson"
                  />
                  {touched.name && errors.name && <div className={css.errorFeedback}>{errors.name}</div>}
                  {touched.name && !errors.name && (
                    <div className={css.feedbackMessage}>Name is secure</div>
                  )}
                </div>

                <div className={css.fieldContainer}>
                  <label className={css.label} htmlFor="email">
                    Email:
                  </label>
                  <Field
                    id="email"
                    name="email"
                    type="email"
                    className={`${css.field} ${
                      touched.email && errors.email ? css.error : ''
                    }`}
                    placeholder="nik@google.com"
                  />
                  {touched.email && errors.email && <div className={css.errorFeedback}>{errors.email}</div>}
                  {touched.email && !errors.email && (
                    <div className={css.feedbackMessage}>Email is secure</div>
                  )}
                </div>

                <div className={css.fieldContainer}>
                  <label className={css.label} htmlFor="password">
                    Password:
                  </label>
                  <Field
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    className={`${css.field} ${
                      touched.password && errors.password ? css.error : ''
                    }`}
                    placeholder="********"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className={css.icon}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                  {touched.password && errors.password && (
                    <div className={css.errorFeedback}>{errors.password}</div>
                  )}
                  {touched.password && !errors.password && (
                    <div className={css.feedbackMessage}>Password is secure</div>
                  )}
                </div>
              </div>

              <div style={{ marginTop: 'auto' }}>
                <RegSubmitBlock />
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <AuthImage />
    </div>
  );
}

