import { combineReducers } from 'redux';
import usersReducer from './users.native';
import profileReducer from './profile.native';

const rootReducer = combineReducers({
  users: usersReducer,
  profile: profileReducer,
});

export default rootReducer;
