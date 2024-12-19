import Button from '../Button/Button.jsx';
import DashboardWrapper from '../DashboardWrapper/DashboardWrapper.jsx';
import { Formik, Form, Field} from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchRecommendedBooks } from '../../redux/books/booksOperations';
import * as Yup from 'yup';
import css from './RecommendedDashboard.module.css';
import StartWorkout from '../StartWorkout/StartWorkout.jsx';
import Remark from '../Remark/Remark.jsx';
import classNames from 'classnames';

const initialValues = {
  title: '',
  author: '',
};

const schema = Yup.object({
  title: Yup.string(),
  author: Yup.string(),
});

const RecommendedDashboard=()=> {
  const [isRestButtonVisible, setIsRestButtonVisible] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    const { title, author } = e;
    if (title === undefined) return;
    if (title) {
      setIsRestButtonVisible(true);
      dispatch(fetchRecommendedBooks({ title, author }));
    } else {
      toast.warn('Kindly complete the form');
    }
    document.getElementById('page').blur();
  };

  const handleReset = resetForm => {
    setIsRestButtonVisible(false);
    resetForm();
    dispatch(fetchRecommendedBooks({ page: 1, limit: 10 }));
  };

  return (
    <DashboardWrapper>
      <div className={css.styledFormContainer}>
        <h3 className={css.styledFiltersTitle}>Filters:</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ resetForm }) => (
            <Form>
              <div className={css.formContainer}>
                <div className={css.fieldContainer}>
                  <label className={css.label} htmlFor="title">Book title:</label>
                  <Field className={css.field}
                    id="title"
                    name="title"
                    type="title"
                    placeholder="Enter text"
                  />
                </div>
                <div className={css.fieldContainer}>
                  <label className={css.label} htmlFor="author">The author:</label>
                  <Field className={classNames(css.field, css.authorField)}
                    id="author"
                    name="author"
                    type="author"
                    placeholder="Enter text"                    
                  />
                </div>
              </div>
              <div className={css.buttonContainer}>
                <Button label="To apply" onClick={handleSubmit} />
                {isRestButtonVisible && (
                  <Button label="Rest" onClick={() => handleReset(resetForm)} />
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>

      <StartWorkout />
      <Remark />
    </DashboardWrapper>
  );
}

export default RecommendedDashboard;