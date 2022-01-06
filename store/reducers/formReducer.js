import * as formActions from 'store/actions/action-types/form-actions';

const initState = {
  data: {},
  content: {},
  signupNumbers: {
    hk: {
      NumberOfResponses: '',
      Petition_Signup_Target__c: '',
    },
    tw: {
      NumberOfResponses: '',
      Petition_Signup_Target__c: '',
    },
  },
  suggestion: '',
  showMessage: false,
  donateType: 'monthly',
  lastAction: null,
};

const formReducer = (state = initState, action) => {
  switch (action.type) {
    case formActions.INIT_FORM:
      return {
        ...state,
        lastAction: action.type,
      };

    case formActions.SET_FORM:
      return {
        ...state,
        content: action.data,
        lastAction: action.type,
      };

    case formActions.SET_FORM_SUCCESS:
      return {
        ...state,
        lastAction: action.type,
      };

    case formActions.INIT_SUGGESTION:
      return {
        ...state,
        suggestion: '',
        lastAction: action.type,
      };

    case formActions.SET_SUGGESTION:
      return {
        ...state,
        suggestion: action.data,
        lastAction: action.type,
      };

    case formActions.SET_SIGNUP_NUMBERS:
      return {
        ...state,
        signupNumbers: action.data,
        lastAction: action.type,
      };

    case formActions.SET_SHOW_MESSAGE:
      return {
        ...state,
        showMessage: action.data,
        lastAction: action.type,
      };

    case formActions.SET_DONATE_TYPE:
      return {
        ...state,
        donateType: action.data,
        lastAction: action.type,
      };

    default:
      return state;
  }
};

export default formReducer;
