import { useAuth } from '../hooks/useAuth.js';
import { Navigate } from 'react-router-dom';

export const AuthRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};