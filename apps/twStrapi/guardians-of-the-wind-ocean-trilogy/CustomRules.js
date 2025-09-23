export default function CustomRules(values, formContent) {
  const errors = {};
  console.log('CustomRules', values, formContent);
  
  if (formContent.label_viewers){
    let viewersFieldName = formContent?.name_viewers || 'CampaignData1__c';
    if(typeof values[viewersFieldName] == 'undefined') values[viewersFieldName] = '';
    if (!values[viewersFieldName]) {
      errors.Options_viewers = formContent.empty_select_data_alert;
    }
  }
  
  
  return errors;
}