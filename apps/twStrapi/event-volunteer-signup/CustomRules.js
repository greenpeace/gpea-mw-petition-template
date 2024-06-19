export default function CustomRules(values, formContent) {
  const errors = {};
  if (!values.CampaignData2__c) {
    errors.CampaignData2__c = formContent.empty_select_data_alert;
  } 
  if (!values.CampaignData3__c) {
    errors.CampaignData3__c = formContent.empty_select_data_alert;
  }
  return errors;
}