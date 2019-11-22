import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../components/Register';
import ListProducts from '../containers/ListProducts';
import ProductDetail from '../components/ProductDetail';
import ProductsFormEdit from '../components/ProductFormEdit';
import ProductsFormNew from '../components/ProductFormNew';
import Categories from '../components/Categories';
import CategoriesFormNew from '../components/CategoriesFormNew';
import CategoriesFormEdit from '../components/CategoriesFormEdit';
import Flavors from '../components/Flavors';
import FlavorsFormNew from '../components/FlavorsFormNew';
import FlavorsFormEdit from '../components/FlavorsFormEdit';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import NotFound from '../components/NotFound';

const serverRoutes = (isLogged) => {
  return [
    {
      path: '/',
      component: Home,
      exact: true,
    },
    {
      path: '/login',
      component: Login,
      exact: true,
    },
    {
      path: '/register',
      component: Register,
      exact: true,
    },
    {
      path: '/categories',
      component: Categories,
      exact: true,
    },
    {
      path: '/categoriesFormNew',
      component: CategoriesFormNew,
      exact: true,
    },
    {
      path: '/categoriesFormEdit',
      component: CategoriesFormEdit,
      exact: true,
    },
    {
      path: '/flavors',
      component: Flavors,
      exact: true,
    },
    {
      path: '/flavorsFormNew',
      component: FlavorsFormNew,
      exact: true,
    },
    {
      path: '/flavorsFormEdit',
      component: FlavorsFormEdit,
      exact: true,
    },
    {
      path: '/products',
      component: ListProducts,
      exact: true,
    },
    {
      path: '/productFormEdit',
      component: ProductsFormEdit,
      exact: true,
    },
    {
      path: '/productFormNew',
      component: ProductsFormNew,
      exact: true,
    },
    {
      path: '/productDetail',
      component: ProductDetail,
      exact: true,
    },
    {
      path: '/cart',
      component: Cart,
      exact: true,
    },
    {
      path: '/checkout',
      component: isLogged ? Checkout : Login,
      exact: true,
    },
    {
      name: 'NotFound',
      component: NotFound,
    },
  ];
};

export default serverRoutes;
