import imgBooksDesc from '../../images/book-desctop.png';
import imgBooksDesc2x from '../../images/book-desctop@2.png';
import { RemarkContainer, RemarkSpan, RemarkText } from './Remark.styled.jsx';

const Remark=()=> {
  return (
    <RemarkContainer>
      <picture>
        <source srcSet={imgBooksDesc2x} media="(min-resolution: 192dpi)" />
        <img src={imgBooksDesc} alt="stack books" width={40} />
      </picture>
      <RemarkText>
        "Books are <RemarkSpan>windows</RemarkSpan> to the world, and reading is
        a journey into the unknown."
      </RemarkText>
    </RemarkContainer>
  );
}

export default Remark;