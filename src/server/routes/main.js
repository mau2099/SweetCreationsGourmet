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

const main = (req, res, next) => {
  try {
    let initialState;
    try {
      const { email, name, id } = req.cookies;
      initialState = {
        user: {
          email,
          name,
          id,
        },
        cart: [],
        products: [
          {
            id: '1',
            image: '.../../frontend/assets/img/cupcakes/red-velvet-cupcake.jpg',
            title: 'Red Velvet',
            price: 62.5,
            description: 'Cupcake Red Velvet',
          },
          {
            id: '3',
            image: '../../frontend/assets/img/cupcakes/cookies-cupcake.png',
            title: 'Cookies',
            price: 58.7,
            description: 'Cupcake Cookies & Cream',
          },
          {
            id: '4',
            image: '../../frontend/assets/img/cupcakes/rosa-cupcake.jpg',
            title: 'Cupcake Rosa',
            price: 42,
            description: 'Cupcake Rosa',
          },
          {
            id: '5',
            image: '../../frontend/assets/img/cupcakes/unicorn-cupcake.jpg',
            title: 'Cupcake Unicornio',
            price: 53.4,
            description: 'Cupcake de Unicornio',
          },
          {
            id: '6',
            image: '../../frontend/assets/img/cupcakes/vainilla-cupcake.jpg',
            title: 'Cupcake Vainilla',
            price: 28,
            description: 'Cupcake de Vainilla',
          },
          {
            id: '7',
            image: '/src/frontend/assets/img/cupcakes/chai-latte-cupcakes.jpg',
            title: 'Cupcake Chai Latte',
            price: 39,
            description: 'Cupcake Chai Latte',
          },
        ],
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
