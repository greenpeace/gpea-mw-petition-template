import * as surveyActions from 'store/actions/action-types/survey-actions';

const initState = {
  data: {},
  current: 0,
  page: 'landing',
  lastAction: null,
};

const formReducer = (state = initState, action) => {
  switch (action.type) {
    case surveyActions.SET_SURVEY_ANSWER:
      return {
        ...state,
        data: { ...state.data, [action.data?.index]: action.data?.value },
        lastAction: action.type,
      };

    case surveyActions.SET_SURVEY_QUIZ:
      return {
        ...state,
        current: action.data,
        lastAction: action.type,
      };

    case surveyActions.SET_SURVEY_PAGE:
      return {
        ...state,
        page: action.data,
        lastAction: action.type,
      };
    default:
      return state;
  }
};

export default formReducer;
