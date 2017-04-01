import * as C from '../constants/index.native';

const INITIAL_STATE = {
  profilePicIsSelected: false,
  selectedPic: null,
  postSuccess: false,
};

const editProfileReducer = (state = INITIAL_STATE, action) => {
  console.log('editProfileReducer action: ', action);
  switch (action.type) {
    case C.PROFILE_PIC_IS_SELECTED:
      return { ...state, profilePicIsSelected: action.payload };
    case C.SELECT_PROFILE_PIC:
      return { ...state, selectedPic: action.payload };
    case C.POST_PROFILE_PIC_SUCCESS:
      return { ...state, postSuccess: action.payload };
    default:
      return state;
  }
};

export default editProfileReducer;
