import { combineReducers } from 'redux';
import usersReducer from './users.native';
import editProfileReducer from './editprofile.native';

const rootReducer = combineReducers({
  users: usersReducer,
  editProfile: editProfileReducer,
});

export default rootReducer;
