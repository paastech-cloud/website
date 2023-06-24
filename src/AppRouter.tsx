import { createBrowserRouter } from 'react-router-dom';
import { Root } from '@pages/Root';
import { HomePage } from '@pages/HomePage';
import { LoginPage } from '@pages/LoginPage';
import { RegisterPage } from '@pages/RegisterPage';
import ErrorPage from './pages/ErrorPage';

export const AppRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: 'login',
          element: <LoginPage />,
        },
        {
          path: 'register',
          element: <RegisterPage />,
        },
        {
          path: '*',
          element: <ErrorPage />,
        },
      ],
    },
  ]);
};
