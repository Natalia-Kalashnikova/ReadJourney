import sprite from '../../../images/sprite.svg';
import likeDesktop2x from '../../../images/like-desctop@2x.png';
import likeDesktop from '../../../images/like-desctop.png';
import likeMobile2x from '../../../images/like-mobil@2x.png';
import likeMobile from '../../../images/like-mobil.png';
import {
  Heading,
  Img,
  LibraryName,
  SuccessMessage,
} from '../../BookDetails/BookDetails.styled.js';
import { CloseButton, ModalContainer } from '../BookReadModal/BookReadModal.styled.js';

const AddedSuccessfullyModal=({ closeModals })=>{
  return (
    <ModalContainer>
      <CloseButton onClick={closeModals}>
        <svg width={22} height={22}>
          <use href={`${sprite}#icon-x`} />
        </svg>
      </CloseButton>
      <picture>
        <source
          srcSet={`${likeMobile} 1x, ${likeMobile2x} 2x`}
          media="(max-width: 767px)"
        />
        <source
          srcSet={`${likeDesktop} 1x, ${likeDesktop2x} 2x`}
          media="(min-width: 768px)"
        />
        <Img src={likeDesktop} alt="add book" />
      </picture>
      <SuccessMessage>Good job</SuccessMessage>
      <Heading>
        Your book is now in <LibraryName>the library!</LibraryName> The joy
        knows no bounds and now you can start your training
      </Heading>
    </ModalContainer>
  );
}

export default AddedSuccessfullyModal;