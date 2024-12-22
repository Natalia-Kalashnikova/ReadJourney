import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth.js';

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
