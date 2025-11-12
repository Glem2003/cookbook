import { HashRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

// components
import Loading from '../components/common/loading/index.tsx';

// data
import { routes } from '../data/routes.tsx';

// style
import { contentCenter } from '../assets/style/common.ts';

const AppRouter = () => {
  return (
    <HashRouter>
      <Suspense
        fallback={
          <div style={{ height: '100vh', ...contentCenter }}>
            <Loading />
          </div>
        }
      >
        <Routes>
          {routes.map(({ path, element, index }) => (
            <Route key={path} path={path} element={element} index={index} />
          ))}
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default AppRouter;
