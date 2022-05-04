import React from 'react';
import './style/App.css'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppRoutes } from './routes/AppRoutes';
import '../src/styles/index.scss'
import Map from './components/Map';

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
    {/* <Map/> */}
  </Provider>,
  document.getElementById('root')
);
