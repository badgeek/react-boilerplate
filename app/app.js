import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import './style/bootstrap.css';
import './style/codemi.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/jquery/dist/jquery';


import '!file-loader?name=[name].[ext]!./images/logo.png';

import AdminDashboard from './container/AdminDashboard'

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(<AdminDashboard/>, MOUNT_NODE);

// Install ServiceWorker and AppCache in the end since
// it's not most important operation and if main code fails,
// we do not want it installed
if (process.env.NODE_ENV === 'production') {
    require('offline-plugin/runtime').install(); // eslint-disable-line global-require
  }
  