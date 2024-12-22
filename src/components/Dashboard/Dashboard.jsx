import Button from '../Button/Button.jsx';
import DashboardWrapper from '../DashboardWrapper/DashboardWrapper.jsx';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addNewBook, fetchOwnBooks } from '../../redux/books/booksOperations';
import { selectOwnBooks } from '../../redux/books/booksSelectors';
import * as Yup from 'yup';
import {
  FieldContainer,
  FormContainer,
  Heading,
  InputField,
  Label,
  TitleError,
} from './Dashboard.styled';
import PortalModal from '../Modal/PortalModal/PortalModal.jsx';
import RecommendedBooks from '../RecommendedBooks/RecommendedBooks.jsx';
import AddedSuccessfullyModal from '../Modal/AddedSuccessfullyModal/AddedSuccessfullyModal.jsx';

const initialValues = {
  title: '',
  author: '',
  page: '',
};

const schema = Yup.object({
  title: Yup.string().required('Required'),
  author: Yup.string().required('Required'),
  page: Yup.string()
    .required('Required')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .transform((value, originalValue) => originalValue.replace(/\s/g, '')),
});

const Dashboard=()=> {
  const [modalOpen, setModalOpen] = useState(false);
  const [bookExists, setBookExists] = useState(false);
  const ownLibrary = useSelector(selectOwnBooks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOwnBooks());
  }, [dispatch]);

  const handleSubmit = (e, { resetForm }) => {
    const title = e.title;
    const author = e.author;
    const page = parseInt(e.page);

    if (page) {
      const bookExists = ownLibrary.find(item => item.title === title);

      if (bookExists === undefined) {
        dispatch(addNewBook({ title, author, totalPages: page }));
        setModalOpen(true);
        setBookExists(false);
        resetForm();
      } else {
        setBookExists(true);
        toast.error('The book is already in the library');
      }
    }
    document.getElementById('page').blur();
  };

  return (
    <DashboardWrapper>
      <div>
        <Heading>Create your library:</Heading>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, resetForm }) => (
            <Form>
              <FormContainer>
                <FieldContainer>
                  <Label htmlFor="title">Book title:</Label>
                  <InputField
                    id="title"
                    name="title"
                    type="title"
                    placeholder="I See You Are..."
                    error={errors.title && touched.title ? 'true' : 'false'}
                    style={bookExists ? { borderColor: 'red' } : {}}
                  />
                  <TitleError name="title" component="div" />
                </FieldContainer>
                <FieldContainer>
                  <Label htmlFor="author">The author:</Label>
                  <InputField
                    id="author"
                    name="author"
                    type="author"
                    placeholder="Hilarion Pavlyuk"
                    paddindleft="95px"
                    error={errors.author && touched.author ? 'true' : 'false'}
                  />
                  <TitleError name="author" component="div" />
                </FieldContainer>
                <FieldContainer>
                  <Label htmlFor="page">Number of pages:</Label>
                  <InputField
                    id="page"
                    name="page"
                    type="page"
                    placeholder="664"
                    paddindleft="135px"
                    error={errors.page && touched.page ? 'true' : 'false'}
                  />
                  <TitleError name="page" component="div" />
                </FieldContainer>
              </FormContainer>
              <Button label="Add book" />
            </Form>
          )}
        </Formik>
      </div>

      <RecommendedBooks />
      <PortalModal active={modalOpen} setActive={setModalOpen}>
        <AddedSuccessfullyModal closeModals={() => setModalOpen()} />
      </PortalModal>
    </DashboardWrapper>
  );
}

export default Dashboard;