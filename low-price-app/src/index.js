import React from 'react';
import './style/App.css'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRoutes from './routes/AppRoutes';
import { store } from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById('root')
);
