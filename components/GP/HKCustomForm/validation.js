export function validation(values, formContent) {
  const errors = {};

  if (!values.Email) {
    errors.Email = formContent.empty_data_alert;
  } else if (
    !/^(?!.*(?:''|\.\.))[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
      values.Email,
    )
  ) {
    errors.Email = formContent.invalid_email_alert;
  }

  if (!values.FirstName) {
    errors.FirstName = formContent.empty_data_alert;
  }

  if (!values.LastName) {
    errors.LastName = formContent.empty_data_alert;
  }

  if (!values.MobilePhone) {
    errors.MobilePhone = formContent.empty_data_alert;
  }

  if (!values.Birthdate) {
    errors.Birthdate = formContent.empty_data_alert;
  }

  if (values.MobilePhone) {
    if (values.MobileCountryCode === '852') {
      const regex = /^[2-9]{1}[0-9]{7}$/i;
      if (!regex.test(values.MobilePhone)) {
        errors.MobilePhone = formContent.invalid_format_alert;
      }
    } else if (values.MobileCountryCode === '853') {
      const regex = /^[6]{1}[0-9]{7}$/i;
      if (!regex.test(values.MobilePhone)) {
        errors.MobilePhone = formContent.invalid_format_alert;
      }
    }
  }

  if (formContent.label_concern){
    let concernFieldName = formContent?.name_concern || 'CampaignData2__c';
    if (!values[concernFieldName]) {
      errors.Options_Concern = formContent.empty_select_data_alert;
    }
  }
  
  

  return errors;
}
