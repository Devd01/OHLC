import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {rootReducer}  from './reducers/index'
import {watchHistoricalData} from './sagas';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer,{},applyMiddleware( sagaMiddleware));
sagaMiddleware.run(watchHistoricalData);
export default (props)=>{
     return <Provider store={store}>
         {props.children}
     </Provider>
}