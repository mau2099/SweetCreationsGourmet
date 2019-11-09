import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../containers/Home";
import Login from "../containers/Login";
import Layout from "../containers/Layout";
import Register from "../components/Register";
import ListProducts from "../containers/ListProducts";
import ProductDetail from "../components/ProductDetail";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import NotFound from "../components/NotFound";

const App = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/products" component={ListProducts} />
        <Route exact path="/productDetail" component={ProductDetail} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/checkout" component={Checkout} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default App;
