import 'babel-polyfill';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './style/codemi.css';

import '../node_modules/jquery/dist/jquery';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import '!file-loader?name=[name].[ext]!./images/logo.png';

import AdminDashboard from './container/AdminDashboard'

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(
    // <Provider>
        <AdminDashboard/>
    // </Provider>
, MOUNT_NODE);

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
    require('offline-plugin/runtime').install(); // eslint-disable-line global-require
  }
  