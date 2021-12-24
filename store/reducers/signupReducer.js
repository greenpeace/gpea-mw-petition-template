import * as signupActions from 'store/actions/action-types/signup-actions';

const initState = {
  data: {},
  submitted: false,
  lastAction: null,
};

const signupReducer = (state = initState, action) => {
  switch (action.type) {
    case signupActions.SIGN_UP:
      return {
        ...state,
        data: action.data,
        lastAction: action.type,
      };

    case signupActions.SIGN_UP_SUCCESS:
      return {
        ...state,
        submitted: true,
        lastAction: action.type,
      };

    case signupActions.SIGN_UP_FAILED:
      return {
        ...state,
        submitted: true,
        lastAction: action.type,
      };

    default:
      return state;
  }
};

export default signupReducer;
