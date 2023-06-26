import { createHashRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import { Root as RootDashboard } from '@pages/dashboard/Root';
import { Root as HomeRoot } from '@pages/homepage/Root';
import { HomePage } from '@pages/homepage/HomePage';
import { LoginPage } from '@pages/homepage/LoginPage';
import { RegisterPage } from '@pages/homepage/RegisterPage';
import { DashboardHomePage } from '@pages/dashboard/DashboardHomePage';

export const AppRouter = () => {
  return createHashRouter([
    {
      path: '/',
      errorElement: <ErrorPage />,
      element: <HomeRoot />,
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
      ],
    },
  ]);
};
