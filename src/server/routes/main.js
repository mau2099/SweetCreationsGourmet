import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import axios from 'axios';
import Routes from '../../frontend/routes/serverRoutes';
import Layout from '../../frontend/containers/Layout';
import reducer from '../../frontend/reducers';
import initialState from '../../frontend/initialState';
import render from '../render';

const main = async (req, res, next) => {
  try {
    let initialState;
    try {
      let productList = await axios({
        url: `${process.env.API_URL}/api/products`,
        method: 'get',
      });
      productList = productList.data.data;

      const { email, name, id } = req.cookies;
      initialState = {
        user: {
          email,
          name,
          id,
        },
        cart: [],
        products: productList.filter((product) => product),
        sidebarisOpen: false,
      };
    } catch (err) {
      console.log(err);
    }
    const isLogged = initialState.user.id;
    const store = createStore(reducer, initialState);
    const html = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.url} context={{}}>
          <Layout>{renderRoutes(Routes(isLogged))}</Layout>
        </StaticRouter>
      </Provider>,
    );
    const preloadedState = store.getState();
    res.send(render(html, preloadedState));
  } catch (err) {
    next(err);
  }
};

export default main;
