import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from '../../redux/auth/authOperations.js';
import { selectToken } from '../../redux/auth/authSelectors.js';
import { ToastContainer } from 'react-toastify';
import { useAuth } from '../../hooks/useAuth.js';
import Loader from '../Loader/Loader.jsx';
import Layout from '../Layout/Layout.jsx'
import { AuthRoute } from '../../hoc/AuthRoute.jsx';
import { PrivateRoute } from '../../hoc/PrivateRoute.jsx';
import 'react-toastify/dist/ReactToastify.css';

const Register = lazy(() => import('../../pages/RegisterPage.jsx'));
const Login = lazy(() => import('../../pages/LoginPage.jsx'));
const Recommended = lazy(() => import('../../pages/RegisterPage.jsx'));
const Library = lazy(() => import('../../pages/MyLibraryPage.jsx'));
const Reading = lazy(() => import('../../pages/ReadingPage.jsx'));

function App () {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const token = useSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, token]);

   return (
    <Suspense fallback={<Loader />}>
      {isRefreshing ? (
        <Loader />
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate replace to="/register" />} />
              <Route
                path="/register"
                element={
                  <AuthRoute
                    redirectTo="/recommended"
                    component={<Register />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <AuthRoute redirectTo="/recommended" component={<Login />} />
                }
              />
              <Route
                path="/recommended"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<Recommended />}
                  />
                }
              />
              <Route
                path="/library"
                element={
                  <PrivateRoute redirectTo="/login" component={<Library />} />
                }
              />
              <Route
                path="/reading/:bookId"
                element={
                  <PrivateRoute redirectTo="/login" component={<Reading />} />
                }
              />
            </Route>
          </Routes>
          <ToastContainer autoClose={1500} />
        </div>
      )}
    </Suspense>
  );
};

export default App;