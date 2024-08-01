export default function CustomRules(values, formContent) {
  const errors = {};
  if (formContent.label_concern){
    let concernFieldName = formContent?.name_concern || 'CampaignData2__c';
    if (!values[concernFieldName] && formContent?.required_concern) {
      errors.Options_Concern = formContent.empty_select_data_alert;
    }
  }
  if (formContent.max_opinion_alert && formContent?.name_opinion) {
    let opinionFieldName = formContent?.name_opinion;
    let opinionMaxLength = Number(formContent?.max_opinion_length) || 500;
    if(values[opinionFieldName]){
      console.log(values[opinionFieldName].length, opinionMaxLength, values[opinionFieldName].length > opinionMaxLength)
      if (values[opinionFieldName].length > opinionMaxLength) {
        errors.Opinion = formContent.max_opinion_alert;
      }
    }
    
  }
  return errors;
}