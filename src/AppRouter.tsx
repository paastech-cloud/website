import { createHashRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import { Root as RootDashboard } from '@pages/dashboard/Root';
import { Root as HomeRoot } from '@pages/homepage/Root';
import { HomePage } from '@pages/homepage/HomePage';
import { LoginPage } from '@pages/LoginPage';
import { RegisterPage } from '@pages/RegisterPage';
import { DashboardHomePage } from '@pages/dashboard/DashboardHomePage';
import { DashboardDetails } from '@pages/dashboard/DashboardDetails';
import { EmailVerificationPage } from '@pages/EmailVerificationPage';
import { ProfilePage } from '@pages/dashboard/ProfilePage';

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
        {
          path: 'email-verification/:token',
          element: <EmailVerificationPage />,
        },
      ],
    },
    {
      path: '/dashboard',
      element: <RootDashboard />,
      children: [
        {
          path: '/dashboard',
          element: <DashboardHomePage />,
        },
        {
          path: '/dashboard/profile',
          element: <ProfilePage />,
        },
        {
          path: '/dashboard/:projectId',
          element: <DashboardDetails tabTitle={'Overview'} />,
        },
        {
          path: '/dashboard/:projectId/logs',
          element: <DashboardDetails tabTitle={'Logs'} tabSlug={'/logs'} />,
        },
        {
          path: '/dashboard/:projectId/env',
          element: <DashboardDetails tabTitle={'Environment'} tabSlug={'/env'} />,
        },
        {
          path: '/dashboard/:projectId/settings',
          element: <DashboardDetails tabTitle={'Settings'} tabSlug={'/settings'} />,
        },
      ],
    },
  ]);
};
