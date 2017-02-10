import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer/index.native';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()));
