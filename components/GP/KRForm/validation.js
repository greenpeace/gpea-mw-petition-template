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

  // if (!values.FirstName) {
  //   errors.FirstName = formContent.empty_data_alert;
  // }

  if (!values.LastName) {
    errors.LastName = formContent.empty_data_alert;
  }

  if (!values.MobilePhone) {
    errors.MobilePhone = formContent.empty_data_alert;
  }

  // if (!values.Birthdate) {
  //   errors.Birthdate = formContent.empty_data_alert;
  // }

  if (!values.Counties && typeof formContent.counties != 'undefined') {
    errors.Counties = formContent.empty_data_alert;
  }

  if (values.MobilePhone) {
    const phoneReg6 = new RegExp(/^01([0|1|6|7|8|9])?([0-9]{3,4})?([0-9]{4})$/).test(
      values.MobilePhone,
    );
    

    if (phoneReg6) {
      return errors;
    } else {
      errors.MobilePhone = formContent.invalid_format_alert;
    }
  }

  return errors;
}
