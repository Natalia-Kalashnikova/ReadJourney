import { ActionButton, ActionLink } from './AuthorizationSubmitBlock.styled';

const LoginSubmitBlock = () => {
  return (
    <div>
      <ActionButton type="submit" $log="login">
        Log In
      </ActionButton>
      <ActionLink to="/register">Don't have an account?</ActionLink>
    </div>
  );
};

export default LoginSubmitBlock;
