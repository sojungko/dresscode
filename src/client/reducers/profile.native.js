import * as C from '../constants/index.native';

const INITIAL_STATE = {
  profilePicIsSelected: false,
  selectedPic: null,
  postSuccess: false,
};

const profileReducer = (state = INITIAL_STATE, action) => {
  console.log('profileReducer action: ', action);
  switch (action.type) {
    case C.PROFILE_PIC_IS_SELECTED:
      return { ...state, profilePicIsSelected: action.payload };
    case C.SELECT_PROFILE_PIC:
      return { ...state, selectedPic: action.payload };
    case C.POST_PROFILE_PIC_SUCCESS:
      return { ...state, postSuccess: action.payload };
    case C.NO_PROFILE_PIC_SELECTED:
      return { ...state, profilePicIsSelected: action.payload };
    case C.CAPTURE_PROFILE_PIC:
      return { ...state, capturedPic: action.payload };
    case C.SET_PROFILE_PIC:
      return { ...state, profilePic: action.paylod };
    default:
      return state;
  }
};

export default profileReducer;
