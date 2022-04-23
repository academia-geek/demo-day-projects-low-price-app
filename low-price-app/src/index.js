import React from 'react';
import './style/App.css'
import ReactDOM from 'react-dom';
import AppRoutes from './routes/AppRoutes';

  ReactDOM.render(
    <React.StrictMode>
      <AppRoutes />
    </React.StrictMode>,
    document.getElementById('root')
  );

