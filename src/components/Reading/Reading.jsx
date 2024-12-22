import FallbackImage from '../FallbackImage/FallbackImage.jsx';
import Block from '../Container/Container.jsx';
import BaseMainWrapper from '../BaseMainWrapper/BaseMainWrapper.jsx';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectInfoCurrentBook,
  selectOwnBooks,
} from '../../redux/books/booksSelectors.js';
import notFoundImg from '../../images/desctop-default-image.jpg';
import sprite from '../../images/sprite.svg';
import {
  BookAuthor,
  BookContainer,
  BookImage,
  BookTitle,
  ReadingIcon,
  ReadingInfo,
  ReadingTitle,
  TimeLeft,
} from './Reading.styled.jsx';
import ReadingPanel from '../ReadingPanel/ReadingPanel.jsx';

const Reading=()=> {
  const { bookId } = useParams();
  const books = useSelector(selectOwnBooks);
  const [read, setRead] = useState(false);
  const selectCurrentBookInfo = useSelector(selectInfoCurrentBook);

  const selectedBook = books.find(book => book._id === bookId);

  return (
    <Block>
      <ReadingPanel
        selectedBook={selectedBook._id}
        onReadChange={() => setRead(!read)}
      />

      <BaseMainWrapper>
        <ReadingInfo>
          <ReadingTitle>My reading</ReadingTitle>
          {selectCurrentBookInfo.timeLeftToRead && (
            <TimeLeft>
              {selectCurrentBookInfo.timeLeftToRead.hours} hours and{' '}
              {selectCurrentBookInfo.timeLeftToRead.minutes} minutes left
            </TimeLeft>
          )}
        </ReadingInfo>
        <BookContainer>
          {selectedBook.imageUrl ? (
            <BookImage src={selectedBook.imageUrl} alt="title" />
          ) : (
            <FallbackImage>
              <BookImage src={notFoundImg} alt="title" />
            </FallbackImage>
          )}

          <BookTitle>{selectedBook.title}</BookTitle>
          <BookAuthor>{selectedBook.author}</BookAuthor>
          {read ? (
            <ReadingIcon>
              <use href={`${sprite}#icon-block-start`} />
            </ReadingIcon>
          ) : (
            <ReadingIcon>
              <use href={`${sprite}#icon-block-pause`} />
            </ReadingIcon>
          )}
        </BookContainer>
      </BaseMainWrapper>
    </Block>
  );
}

export default Reading;