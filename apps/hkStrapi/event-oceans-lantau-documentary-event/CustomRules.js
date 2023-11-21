export default function CustomRules(values, formContent) {
  const errors = {};
  console.log(values)
  if (!values.CampaignData1__c) {
    errors.Options_Time = formContent.empty_checkbox_alert;
  }
  if (!values.CampaignData4__c) {
    errors.Options_Kids = formContent.empty_checkbox_alert;
  }
  if (!values.CampaignData5__c) {
    errors.Options_Friends = formContent.empty_checkbox_alert;
  }

  return errors;
}
