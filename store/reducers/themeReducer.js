import * as themeActions from 'store/actions/action-types/theme-actions';

const initState = {
  data: {
    ProjectName: '',
    CampaignId: '',
    interests: ''
  },
  params: {
    donation_module_campaign: "",
    headline_prefix: "",
    hero_image_desktop: "",
    hero_image_mobile: ""
  },
  showGlobalHeader: true,
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
          interests: action.data?.interests?.toLowerCase(),
        },
        lastAction: action.type,
      };

      case themeActions.SET_PARAMS:
        return {
          ...state,
          params: action.data,
          lastAction: action.type,
        };

    case themeActions.SET_SHOW_GLOBAL_HEADER:
      return {
        ...state,
        showGlobalHeader: action.data,
        lastAction: action.type,
      };

    default:
      return state;
  }
};

export default themeReducer;
