export default function CustomRules(values, formContent) {
  const errors = {};

  if (!values.CampaignData1__c) {
    errors.Options_Time = formContent.empty_checkbox_alert;
  }
  if (!values.CampaignData2__c) {
    errors.Options_Kids = formContent.empty_checkbox_alert;
  }
  if (!values.CampaignData3__c) {
    errors.Options_Friends = formContent.empty_checkbox_alert;
  }

  return errors;
}
