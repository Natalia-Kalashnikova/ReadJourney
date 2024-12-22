import imgBooksDesc from '../../images/book-desctop.png';
import imgBooksDesc2x from '../../images/book-desctop@2.png';
import imgBooksMob from '../../images/book-mobil.png';
import imgBooksMob2x from '../../images/book-desctop@2.png';
import {
  Container,
  ErrorText,
  Img,
  Message,
  Picture,
} from './NoBooksScreen.styled';

export default function NoBooksScreen({ part }) {
  return (
    <Container>
      <Picture>
        <source
          srcSet={`${imgBooksMob} 1x, ${imgBooksMob2x} 2x`}
          media="(max-width: 767px)"
        />
        <source
          srcSet={`${imgBooksDesc} 1x, ${imgBooksDesc2x} 2x`}
          media="(min-width: 766px)"
        />
        <Img src={imgBooksDesc} alt="stack books" />
      </Picture>

      {part === 'Recomended' && (
        <Message>
          Oops <ErrorText>unfortunately</ErrorText> nothing was found
        </Message>
      )}
      {part === 'MyLibraryBooks' && (
        <Message>
          To start training, add <ErrorText>some of your books</ErrorText> or
          from the recommended ones
        </Message>
      )}
    </Container>
  );
}
