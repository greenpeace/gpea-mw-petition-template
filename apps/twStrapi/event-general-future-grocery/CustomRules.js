export default function CustomRules(values, formContent) {
  const errors = {};
  console.log('CustomRules', values, formContent);
  if (formContent.label_products){
    let productsFieldName = formContent?.name_products || 'CampaignData1__c';
    
    if (!values[productsFieldName] && formContent?.required_products) {
      errors.Options_products = formContent.empty_select_data_alert;
    }
    if (values[productsFieldName]?.length < 3) {
      errors.Options_products = formContent.too_less_products_alert;
    }
  }
  
  return errors;
}