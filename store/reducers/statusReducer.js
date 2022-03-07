import * as statusActions from 'store/actions/action-types/status-actions';

const initState = {
  submitted: false,
  scrollToTarget: [],
  lastAction: null,
};

const signupReducer = (state = initState, action) => {
  switch (action.type) {
    case statusActions.SET_FORM_SUBMITTED:
      return {
        ...state,
        submitted: action.data,
        lastAction: action.type,
      };

    case statusActions.SET_SCROLL_TO_TARGET:
      return {
        ...state,
        scrollToTarget: action.data,
        lastAction: action.type,
      };

    default:
      return state;
  }
};

export default signupReducer;
