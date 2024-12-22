import Logo from '../Logo/Logo.jsx';
import {
  CustomLogo,
  HighlightedText,
  TitleHeading,
  Wrapper,
} from './LogoTitle.styled';

const LogoTitle = () => {
  return (
    <Wrapper>
      <CustomLogo>
        <Logo />
      </CustomLogo>
      <TitleHeading>
        Expand your mind, reading <HighlightedText>a book</HighlightedText>
      </TitleHeading>
    </Wrapper>
  );
};

export default LogoTitle;
