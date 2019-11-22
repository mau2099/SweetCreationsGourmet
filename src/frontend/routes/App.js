import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Layout from '../containers/Layout';
import Register from '../components/Register';
import ProductsFormEdit from '../components/ProductFormEdit';
import ProductsFormNew from '../components/ProductFormNew';
import Categories from '../components/Categories';
import CategoriesFormNew from '../components/CategoriesFormNew';
import CategoriesFormEdit from '../components/CategoriesFormEdit';
import Flavors from '../components/Flavors';
import FlavorsFormNew from '../components/FlavorsFormNew';
import FlavorsFormEdit from '../components/FlavorsFormEdit';
import ListProducts from '../containers/ListProducts';
import ProductDetail from '../components/ProductDetail';
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import NotFound from '../components/NotFound';

const App = ({ isLogged }) => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path='/' component={isLogged ? ListProducts : Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/products' component={ListProducts} />
        <Route exact path='/productFormEdit' component={ProductsFormEdit} />
        <Route exact path='/categories' component={Categories} />
        <Route exact path='/categoriesFormNew' component={CategoriesFormNew} />
        <Route exact path='/categoriesFormEdit' component={CategoriesFormEdit} />
        <Route exact path='/flavors' component={Flavors} />
        <Route exact path='/flavorsFormNew' component={FlavorsFormNew} />
        <Route exact path='/flavorsFormEdit' component={FlavorsFormEdit} />
        <Route exact path='/productFormNew' component={ProductsFormNew} />
        <Route exact path='/productDetail' component={ProductDetail} />
        <Route exact path='/cart' component={Cart} />
        <Route exact path='/checkout' component={Checkout} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
