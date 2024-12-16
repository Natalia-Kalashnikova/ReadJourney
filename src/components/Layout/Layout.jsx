import { Outlet, useLocation } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from '../Loader/Loader.jsx';
import Header from '../Header/Header.jsx';

const Layout=()=> {
  const location = useLocation();
  const hideHeaderPaths = ['/register', '/login'];
  return (
    <div>
      {hideHeaderPaths.includes(location.pathname) ? null : <Header />}
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default Layout;