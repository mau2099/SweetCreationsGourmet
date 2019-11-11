import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import Routes from '../../frontend/routes/serverRoutes';
import Layout from '../../frontend/containers/Layout.jsx';
import reducer from '../../frontend/reducers';
import initialState from '../../frontend/initialState';
import render from '../render';

const main = (req, res, next) => {
  try {
    const store = createStore(reducer, initialState, composeEnhancers());
  } catch (err) {
    next(err);
  }
};

export default main;
