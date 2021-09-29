import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
//import {AppRouters} from  './routers/AppRouters'
import AppRouter2 from './routers/AppRouter2'
//import AuthProvider from './auth/AuthProvider'
import {Provider} from 'react-redux'
import {store} from './store/store'

ReactDOM.render(
 // <AuthProvider>
    <Provider store={store}>
      <AppRouter2 />
    </Provider>,
 // </AuthProvider>,
  document.getElementById('root')
);
