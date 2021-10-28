import * as themeActions from 'store/actions/action-types/theme-actions';

const initState = {
  data: {
    ProjectName: '',
    interests: '',
  },
};

const themeReducer = (state = initState, action) => {
  switch (action.type) {
    case themeActions.INIT_THEME:
      return {
        data: [],
        lastAction: action.type,
      };

    case themeActions.SET_THEME:
      return {
        ...state,
        data: {
          ...action.data,
          interests: action.data?.interests.toLowerCase(),
        },
        lastAction: action.type,
      };

    default:
      return state;
  }
};

export default themeReducer;
