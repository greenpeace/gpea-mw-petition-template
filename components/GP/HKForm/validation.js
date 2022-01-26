export function validation(values, formContent) {
  const errors = {};

  if (!values.Email) {
    errors.Email = formContent.empty_data_alert;
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)) {
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

  if (!values.Birthdate && formContent.showBirthdate) {
    errors.Birthdate = formContent.empty_data_alert;
  }

  if (values.MobilePhone) {
    if (values.MobileCountryCode === '852') {
      const regex = /^[2,3,5,6,8,9]{1}[0-9]{7}$/i;
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

  return errors;
}
