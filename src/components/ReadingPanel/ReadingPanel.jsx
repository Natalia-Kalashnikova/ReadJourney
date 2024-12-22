import Button from '../Button/Button.jsx';
import PortalModal from '../Modal/PortalModal/PortalModal.jsx';
import DashboardWrapper from '../DashboardWrapper/DashboardWrapper.jsx';
import { ErrorMessage, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchBookDetails,
  readingStart,
  readingStop,
} from '../../redux/books/booksOperations.js';
import {
  selectInfoCurrentBook,
  selectReadBook,
} from '../../redux/books/booksSelectors.js';
import * as Yup from 'yup';
import { FormField, Forma } from './ReadingPanel.styled.js';
import {
  FieldContainer,
  FormContainer,
  Heading,
  Label,
} from '../Dashboard/Dashboard.styled.js';
import ProgressBoard from '../ProgressBoard/ProgressBoard.jsx';
import DiaryHeader from '../DiaryHeader/DiaryHeader.jsx';
import ReadingAnalysis from '../ReadingAnalysis/ReadingAnalysis.jsx';
import ReadingDiary from '../ReadingDiary/ReadingDiary.jsx';
import BookReadModal from '../Modal/BookReadModal/BookReadModal.jsx';

const initialValues = {
  page: '',
};

const schema = Yup.object({
  page: Yup.string()
    .required('Required')
    .matches(/^[0-9]+$/, 'Must be only digits')
    .transform((value, originalValue) => originalValue.replace(/\s/g, '')),
});

const ReadingPanel=({ selectedBook, onReadChange })=> {
  const dailyReadings = {};
  let totalReadPages = 0;
  const [isRendered, setIsRendered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [read, setRead] = useState(false);
  const [diaryStat, setDiaryStat] = useState(false);
  const [activeModal, setActiveModal] = useState(false);

  const dispatch = useDispatch();
  const InfoAboutBook = useSelector(selectInfoCurrentBook);
  const ReadBook = useSelector(selectReadBook);

  useEffect(() => {
    setIsRendered(true);
  }, [isRendered]);

  useEffect(() => {
    if (selectedBook) dispatch(fetchBookDetails(selectedBook));
  }, [selectedBook, dispatch, ReadBook]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (activeModal) {
        const totalReadPages = InfoAboutBook?.progress?.reduce(
          (total, entry) => {
            const startPage = Number(entry.startPage);
            const finishPage = Number(entry.finishPage);
            if (!isNaN(startPage) && !isNaN(finishPage)) {
              return total + (finishPage - startPage);
            }
            return total;
          },
          0
        );

        if (totalReadPages >= InfoAboutBook?.totalPages) {
          setModalOpen(true);
        }
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [InfoAboutBook?.progress, InfoAboutBook?.totalPages, activeModal]);

  if (InfoAboutBook?.progress?.length > 0) {
    InfoAboutBook?.progress.forEach(entry => {
      const date = new Date(entry.finishReading).toLocaleDateString();

      if (!dailyReadings[date]) {
        dailyReadings[date] = [];
      }
      const startReadingTime = new Date(entry.startReading).getTime();
      const finishReadingTime = new Date(entry.finishReading).getTime();
      const readingDurationMinutes =
        (finishReadingTime - startReadingTime) / (1000 * 60);

      const totalRead = entry.finishPage - entry.startPage;

      if (!isNaN(totalRead)) {
        dailyReadings[date].push({
          id: entry._id,
          startPage: entry.startPage,
          finishPage: entry.finishPage,
          totalPage: InfoAboutBook.totalPages,
          readingDuration: Math.round(readingDurationMinutes),
          totalRead: totalRead,
          percent: parseFloat(
            ((100 * totalRead) / InfoAboutBook.totalPages).toFixed(1)
          ),
        });
        totalReadPages += totalRead;
      }
    });
  }

  const handleSubmit = e => {
    const requestData = {
      id: selectedBook,
      page: e.page,
    };
    if (e.page) {
      if (!read) {
        setActiveModal(false);
        dispatch(readingStart(requestData));
        setRead(true);
        onReadChange(read);
      }
      if (read) {
        setActiveModal(true);
        dispatch(readingStop(requestData));
        setRead(false);
        onReadChange(read);
      }
    }
    document.getElementById('page').blur();
  };

  return (
    <DashboardWrapper>
      <Forma>
        <Heading>{!read ? 'Start page' : 'Stop page'} :</Heading>
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched }) => (
            <Form>
              <FormContainer>
                <FieldContainer>
                  <Label htmlFor="page">Pages number:</Label>
                  <FormField
                    id="page"
                    name="page"
                    type="page"
                    placeholder="0"
                    paddindleft="111px"
                    error={errors.page && touched.page ? 'true' : 'false'}
                  />
                  <ErrorMessage name="page" component="div" />
                </FieldContainer>
              </FormContainer>
              <Button
                label={read ? 'To stop' : 'To start'}
                onClick={handleSubmit}
              />
            </Form>
          )}
        </Formik>
      </Forma>

      <div>
        {!read && InfoAboutBook?.progress?.length === 0 && <ProgressBoard />}
        {InfoAboutBook?.progress?.length > 0 && (
          <>
            <DiaryHeader diaryStat={diaryStat} setDiaryStat={setDiaryStat} />
            {diaryStat ? (
              <ReadingAnalysis totalReadPages={totalReadPages} />
            ) : (
              <ReadingDiary dailyReadings={dailyReadings} />
            )}
          </>
        )}
      </div>

      <PortalModal active={modalOpen} setActive={setModalOpen}>
        <BookReadModal closeModals={() => setModalOpen()} />
      </PortalModal>
    </DashboardWrapper>
  );
}

export default ReadingPanel;