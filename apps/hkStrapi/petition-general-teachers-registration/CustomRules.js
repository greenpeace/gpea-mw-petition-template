export default function CustomRules(values, formContent) {
  const errors = {};
  console.log(values)
  if (!values.CampaignData2__c) {
    errors.CampaignData2__c = formContent.empty_data_alert;
  } else if(values.CampaignData2__c.length > 200) {
    errors.CampaignData2__c = formContent.max_data_alert;
  }
  if (!values.CampaignData3__c) {
    errors.CampaignData3__c = formContent.empty_select_data_alert;
  }
  console.log(errors)
  return errors;
}
