import * as signupActions from 'store/actions/action-types/signup-actions';

const initState = {
  data: {},
  preFill: {},
  submitted: false,
  step: 'default',
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
        submitted: false,
        lastAction: action.type,
      };

    case signupActions.SET_SIGN_UP_FORM_DATA:
      return {
        ...state,
        preFill: action.data,
        lastAction: action.type,
      };

    case signupActions.SET_STEP:
      return {
        ...state,
        step: action.data,
        lastAction: action.type,
      };

    default:
      return state;
  }
};

export default signupReducer;
