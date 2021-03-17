import MainPage from '../pages/mainPage';
import AuthorizationPage from '../pages/authentication/auth';
import RegistrationPage from '../pages/authentication/register';
import VehiclePage from '../pages/vehiclePage';
import CategoryPage from '../pages/categoryPage';
import ProductPage from '../pages/productPage';

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
  },
  {
    id: 3,
    Component: RegistrationPage,
    path: '/register',
    isPrivate: false
  },
  {
    id: 4,
    Component: VehiclePage,
    path: '/vehicle',
    isPrivate: false
  },
  {
    id: 5,
    Component: CategoryPage,
    path: '/category',
    isPrivate: false
  },
  {
    id: 6,
    Component: ProductPage,
    path: '/product',
    isPrivate: false
  }
]