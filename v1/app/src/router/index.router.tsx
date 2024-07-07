import { createBrowserRouter } from 'react-router-dom';
import { SigninPage } from '../pages/signin.page';
import { SignupPage } from '../pages/signup.page';
import { SettingsPage } from '../pages/settings.page';
import { HomePage } from '../pages/home.page';
import { UserSpacePage } from '../pages/user-space';

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/signin',
    element: <SigninPage />,
  },
  {
    path: '/signup',
    element: <SignupPage />,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
  },
  {
    path: '/user',
    element: <UserSpacePage />,
  },
]);
