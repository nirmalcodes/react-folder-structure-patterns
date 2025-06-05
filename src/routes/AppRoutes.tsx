import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const LoginPage = lazy(() => import('@/pages/auth/LoginPage'));

const AppRoutes = () => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default AppRoutes;
