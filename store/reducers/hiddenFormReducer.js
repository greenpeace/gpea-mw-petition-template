import * as hiddenFormActions from 'store/actions/action-types/hidden-form-actions';

const initState = {
  data: {},
  lastAction: null,
};

const hiddenFormReducer = (state = initState, action) => {
  switch (action.type) {
    case hiddenFormActions.INIT_HIDDEN_FORM:
      return {
        ...state,
        lastAction: action.type,
      };

    case hiddenFormActions.SET_HIDDEN_FORM:
      return {
        ...state,
        data: action.data,
        lastAction: action.type,
      };

    case hiddenFormActions.SET_HIDDEN_FORM_SUCCESS:
      return {
        ...state,
        lastAction: action.type,
      };

    default:
      return state;
  }
};

export default hiddenFormReducer;
