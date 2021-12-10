import * as hiddenFormActions from 'store/actions/action-types/hidden-form-actions';

const initState = {
  data: {
    LeadSource: 'Petition - Plastics',
    Petition_Interested_In_Arctic__c: false,
    Petition_Interested_In_Climate__c: false,
    Petition_Interested_In_Forest__c: false,
    Petition_Interested_In_Health__c: false,
    Petition_Interested_In_Oceans__c: false,
    Petition_Interested_In_Plastics__c: false,
    CampaignData1__c: '',
    CampaignData2__c: '',
    CampaignData3__c: '',
    CampaignData4__c: '',
    CampaignData5__c: '',
  },
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
        data: {
          ...state.data,
          ...action.data,
        },
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
