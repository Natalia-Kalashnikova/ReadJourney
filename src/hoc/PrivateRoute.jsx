import { useAuth } from '../hooks/useAuth.js';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing, token } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return !token ? (
    <Navigate to="/register" />
  ) : shouldRedirect ? (
    <Navigate to={redirectTo} />
  ) : (
    Component
  );
};
