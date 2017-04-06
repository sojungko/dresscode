import * as A from '../constants/index.native';

const INITIAL_STATE = {
  isSignedUp: false,
  isLoggedIn: false,
}
const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case A.SIGN_UP_USER:
      return { ...state, isSignedUp: action.payload };
    case A.LOG_IN_USER:
    console.log('[reducers/users] LOG_IN_USER action.payload : ', action.payload);
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
}

export default usersReducer;
