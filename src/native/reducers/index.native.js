import { combineReducers } from 'redux';
import usersReducer from './users.native';

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
