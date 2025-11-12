import { lazy } from 'react';

// Lazy load
const Home = lazy(() => import('../pages/homePages.tsx'));
const GeneralList = lazy(() => import('../pages/generalList.tsx'));
const Warehouse = lazy(() => import('../pages/warehouse.tsx'));

// Routes Config
export const routes = [
    { path: '/', element: <Home />, index: true },
    { path: '/generalList', element: <GeneralList /> },
    { path: '/warehouse', element: <Warehouse /> },
    { path: '*', element: <>404</> }
];
