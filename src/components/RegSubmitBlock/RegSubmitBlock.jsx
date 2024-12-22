import {
  ActionButton,
  ActionLink,
} from '../LoginSubmitBlock/AuthorizationSubmitBlock.styled.js';

const RegSubmitBlock = () => {
  return (
    <div>
      <ActionButton type="submit">Registration</ActionButton>
      <ActionLink to="/login">Already have an account?</ActionLink>
    </div>
  );
};

export default RegSubmitBlock;
