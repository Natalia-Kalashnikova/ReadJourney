import Button from '../Button/Button.jsx';
import DashboardWrapper from '../DashboardWrapper/DashboardWrapper.jsx';
import { Form, Formik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { fetchRecommendedBooks } from '../../redux/books/booksOperations.js';
import * as Yup from 'yup';
import {
  FieldContainer,
  FormContainer,
  InputField,
  Label,
  StyledButtonContainer,
  StyledFiltersTitle,
  StyledFormContainer,
} from './RecommendedDashboard.styled.js';
import StartWorkout from '../StartWorkout/StartWorkout.jsx';
import Remark from '../Remark/Remark.jsx';

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

  const handleSubmit = (values, {setSubmitting }) => {
  const { title, author } = values;

  if (!title && !author) {
    toast.warn('Kindly complete the form');
    setSubmitting(false);
    return;
  }

  setIsRestButtonVisible(true);
  dispatch(fetchRecommendedBooks({ title, author }));
  document.getElementById('page').blur();
};

  const handleReset = resetForm => {
    setIsRestButtonVisible(false);
    resetForm();
    dispatch(fetchRecommendedBooks({ page: 1, limit: 10 }));
  };

  return (
    <DashboardWrapper>
      <StyledFormContainer>
        <StyledFiltersTitle>Filters:</StyledFiltersTitle>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ resetForm }) => (
            <Form>
              <FormContainer>
                <FieldContainer>
                  <Label htmlFor="title">Book title:</Label>
                  <InputField
                    id="title"
                    name="title"
                    type="title"
                    placeholder="Enter text"
                  />
                </FieldContainer>
                <FieldContainer>
                  <Label htmlFor="author">The author:</Label>
                  <InputField
                    id="author"
                    name="author"
                    type="author"
                    placeholder="Enter text"
                    paddindleft="95px"
                  />
                </FieldContainer>
              </FormContainer>
              <StyledButtonContainer>
                <Button label="To apply" type="submit" />
                {isRestButtonVisible && (
                  <Button label="Rest" onClick={() => handleReset(resetForm)} />
                )}
              </StyledButtonContainer>
            </Form>
          )}
        </Formik>
      </StyledFormContainer>

      <StartWorkout />
      <Remark />
    </DashboardWrapper>
  );
}

export default RecommendedDashboard;