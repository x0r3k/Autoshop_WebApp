import MainPage from '../pages/main';
import SignInPage from '../pages/authentication/signIn';
import SignUpPage from '../pages/authentication/signUp';
import VehiclePage from '../pages/vehicle';
import CategoryPage from '../pages/category';
import ProductPage from '../pages/product';
import OrderPage from '../pages/order';
import TestPage from '../pages/test';

export default [
  {
    id: 1,
    Component: MainPage,
    path: '/',
    isPrivate: false
  },
  {
    id: 2,
    Component: SignInPage,
    path: '/auth',
    isPrivate: false
  },
  {
    id: 3,
    Component: SignUpPage,
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
  },
  {
    id: 7,
    Component: OrderPage,
    path: '/order',
    isPrivate: false
  },
  {
    id: 8,
    Component: TestPage,
    path: '/test',
    isPrivate: false
  }
]