import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';

export const AuthRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
