import { QueryClient, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { createBrowserRouter } from 'react-router';
import { RouterProvider } from 'react-router/dom';
import React, { Suspense } from 'react';

import { paths } from '@/config/paths';

const Layout = React.lazy(() => import('@/app/routes/Layout'));
const Home = React.lazy(() => import('@/app/routes/Home'));
const Test1 = React.lazy(() => import('@/app/routes/test1'));

export const createAppRouter = (queryClient: QueryClient) =>
  createBrowserRouter([
    {
      element: (
        <Suspense fallback={<div>Loading...</div>}>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          path: paths.home.path,
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "/test1",
          element: (
            <Suspense fallback={<div>Loading...</div>}>
              <Test1 />
            </Suspense>
          ),
        },
        // Add more child routes here as needed
      ],
    },
  ]);

export const AppRouter = () => {
  const queryClient = useQueryClient();
  const router = useMemo(() => createAppRouter(queryClient), [queryClient]);
  return <RouterProvider router={router} />;
};
