import css from '../Dashboard/Dashboard.module.css';
import Button from '../Button/Button.jsx';
import DashboardWrapper from '../DashboardWrapper/DashboardWrapper.jsx';
import { Form, Formik, ErrorMessage, Field } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { addNewBook, fetchOwnBooks } from '../../redux/books/booksOperations.js';
import { selectOwnBooks } from '../../redux/books/booksSelectors.js';
import * as Yup from 'yup';
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

export default function Dashboard() {
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
    e.target.blur();
  };

  return (
    <DashboardWrapper>
      <div>
        <h3 className={css.heading}>Create your library:</h3>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, resetForm }) => (
            <Form>
              <div className={`${css.formContainer} ${window.innerWidth >= 1440 ? css.formContainerLarge : ''}`}>
                <div className={css.fieldContainer}>
                  <label htmlFor="title" className={css.label}>Book title:</label>
                  <Field
                    id="title"
                    name="title"
                    type="text"
                    placeholder="I See You Are..."
                    className={`${css.inputField} ${errors.title && touched.title ? css.inputFieldError : ''}`}
                    style={bookExists ? { borderColor: 'red' } : {}}
                  />
                  <ErrorMessage name="title" component="div" className={css.titleError} />
                </div>

                <div className={css.fieldContainer}>
                  <label htmlFor="author" className={css.label}>The author:</label>
                  <Field
                    id="author"
                    name="author"
                    type="text"
                    placeholder="Hilarion Pavlyuk"
                    className={`${css.inputField} ${errors.author && touched.author ? css.inputFieldError : ''}`}
                  />
                  <ErrorMessage name="author" component="div" className={css.titleError} />
                </div>

                <div className={css.fieldContainer}>
                  <label htmlFor="page" className={css.label}>Number of pages:</label>
                  <Field
                    id="page"
                    name="page"
                    type="text"
                    placeholder="664"
                    className={`${css.inputField} ${errors.page && touched.page ? css.inputFieldError : ''}`}
                  />
                  <ErrorMessage name="page" component="div" className={css.titleError} />
                </div>
              </div>
              <Button label="Add book" />
            </Form>
          )}
        </Formik>
      </div>
      <RecommendedBooks />
      <PortalModal active={modalOpen} setActive={setModalOpen}>
        <AddedSuccessfullyModal closeModals={() => setModalOpen()}/>
      </PortalModal>
    </DashboardWrapper>
  );
}