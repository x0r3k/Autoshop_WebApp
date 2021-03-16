import MainPage from '../pages/mainPage';
import AuthorizationPage from '../pages/authentication/auth';

export default [
  {
    id: 1,
    Component: MainPage,
    path: '/',
    isPrivate: false
  },
  {
    id: 2,
    Component: AuthorizationPage,
    path: '/auth',
    isPrivate: false
  }
]