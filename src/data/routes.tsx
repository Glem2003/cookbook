import { lazy } from 'react';

// Lazy load
const Home = lazy(() => import('../pages/homePages.tsx'));

// Routes Config
export const routes = [{ path: '/', element: <Home />, index: true }];
