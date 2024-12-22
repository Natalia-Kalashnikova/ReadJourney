import { StyledButton } from './Button.styled';

const Button=({ className, label, onClick, prop })=> {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      type="submit"
      $prop={prop}
    >
      {label}
    </StyledButton>
  );
}

export default Button;