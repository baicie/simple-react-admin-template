/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react';
import { RouteObject, createBrowserRouter } from 'react-router-dom';
import App from '../App';

const Login = lazy(() => import('../pages/login'));

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <div>error</div>,
    children: [

    ]
  },
  {
    path: '/login',
    element: <Login />,
  }
]

const router = createBrowserRouter(routes);

export default router
