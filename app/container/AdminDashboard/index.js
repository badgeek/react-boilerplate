import React, { Component } from 'react';
import { FETCH_ACTIVE_USER, FETCH_COURSE } from './constants'

import App from './app'
import Reducers from './reducers'

import {createStore, applyMiddleware, compose} from 'redux'
import {Provider} from 'react-redux'

import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "./sagas/";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(Reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watcherSaga);

// store.dispatch({type: FETCH_ACTIVE_USER})
// store.dispatch({type: FETCH_COURSE})

// console.log(store.getState());


class AdminDashboard extends Component {

    state = {  }

    componentDidMount() {
        // console.log("Dispatch Load User Info");                
        // console.log("Dispatch Load stats");                
    }

    render() { 
        return ( 
            <Provider store={store}>
                <App></App>
            </Provider>
         );
    }
}
 
export default AdminDashboard;

