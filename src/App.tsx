import type { RouteObject } from 'react-router';
import { createBrowserRouter, RouterProvider } from 'react-router';

import { loginRoutes } from './modules/login/route.tsx';
import { useNotification } from './shared/hooks/useNotification.ts';

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

function App() {
  const { contextHolder } = useNotification();
  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
