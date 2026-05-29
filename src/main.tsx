import './main.css';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import type { RouteObject } from 'react-router';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { loginRoutes } from './modules/login/route.tsx';
import { GlobalProvider } from './shared/hooks/useGlobalContext.tsx';

const mainRoutes: RouteObject[] = [
  {
    path: '/',
    element: <div>Tela principal</div>,
    errorElement: <div>Pagina nao encontrada</div>,
  },
];

const router: ReturnType<typeof createBrowserRouter> = createBrowserRouter([
  ...loginRoutes,
  ...mainRoutes,
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalProvider>
      <RouterProvider router={router} />
    </GlobalProvider>
  </StrictMode>,
);
