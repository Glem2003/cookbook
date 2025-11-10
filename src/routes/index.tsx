import { HashRouter, Route, Routes } from 'react-router-dom';
import { Suspense } from 'react';

// data
import { routes } from '../data/routes.tsx';

const AppRouter = () => {
  return (
    <HashRouter>
      <Suspense fallback={<>loading</>}>
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
