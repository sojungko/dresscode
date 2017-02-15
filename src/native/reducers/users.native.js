import * as A from '../constants/index.native';

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case A.SIGN_UP_USER:
      return [...state, action.payload];
    case A.LOG_IN_USER:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default usersReducer;
