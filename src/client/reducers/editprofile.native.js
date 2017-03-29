import * as A from '../actions/index.native';

const editProfileReducer = (state = [], action) => {
  switch (action.type) {
    case A.PROFILE_PIC_IS_SELECTED:
      return [...state, action.payload];
    case A.SELECT_PROFILE_PIC:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default editProfileReducer;
