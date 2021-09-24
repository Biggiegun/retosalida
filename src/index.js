import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {AppRouters} from  './routers/AppRouters'
import AuthProvider from './auth/AuthProvider'

ReactDOM.render(
  <AuthProvider>
    <AppRouters />
  </AuthProvider>,
  document.getElementById('root')
);
