import * as A from '../constants/index.native';

const INITIAL_STATE = {
  profilePicIsSelected: false,
  selectedPic: null,
};

const editProfileReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case A.PROFILE_PIC_IS_SELECTED:
      console.log('Reducer : ', action.payload);
      return { ...state, profilePicIsSelected: action.payload };
    case A.SELECT_PROFILE_PIC:
      return { ...state, selectedPic: action.payload };
    default:
      return state;
  }
};

export default editProfileReducer;
