import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { fetchCurrentUser } from '../../redux/auth/authOperations.js';
import { selectToken } from '../../redux/auth/authSelectors.js';
import MyLibrary from '../MyLibrary/MyLibrary.jsx';
import { ToastContainer } from 'react-toastify';

function App () {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  const token = useSelector(selectToken);
  useEffect(() => {
    if (token) {
      dispatch(fetchCurrentUser());
    }
  }, [dispatch, token]);
  return isRefreshing ? (
    <Loader />
  ) : (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate replace to="/register" />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/recommended"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/recommended"
                component={<Login />}
              />
            }
          />
          <Route
            path="/recommended"
            element={
              <PrivateRoute
                redirectTo="/recommended"
                component={<Recommended />}
              />
            }
          />
          <Route
            path="/library"
            element={<PrivateRoute redirectTo="/library" component={<Lib />} />}
          />
          <Route
            path="/reading/:bookId"
            element={
              <PrivateRoute redirectTo="/library" component={<Reading />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={1500} />
    </div>
  );
};

export default App;