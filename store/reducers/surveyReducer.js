import * as surveyActions from 'store/actions/action-types/survey-actions';

const initState = {
  data: [
    {
      el: 'A',
      count: 3,
    },
    {
      el: 'B',
      count: 3,
    },
    {
      el: 'F',
      count: 1,
    },
    {
      el: 'G',
      count: 1,
    },
    {
      el: 'I',
      count: 1,
    },
    {
      el: 'C',
      count: 1,
    },
  ],
  current: 0,
  page: 'result',
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
