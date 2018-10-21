import 'babel-polyfill';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './style/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import './style/codemi.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import '!file-loader?name=[name].[ext]!./images/logo.png';

import AdminDashboard from './container/AdminDashboard'

const MOUNT_NODE = document.getElementById('app');

ReactDOM.render(<AdminDashboard/>, MOUNT_NODE);