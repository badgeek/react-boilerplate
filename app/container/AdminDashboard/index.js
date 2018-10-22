import React, { Component } from 'react';

import App from './app'
import Reducers from './reducers'

import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'

import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watcherSaga);


class AdminDashboard extends Component {
    render() { 
        return ( 
            <Provider store={store}>
                <App></App>
            </Provider>
         );
    }
}
 
export default AdminDashboard;

