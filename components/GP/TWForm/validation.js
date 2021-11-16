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

  if (!values.Phone) {
    errors.Phone = formContent.empty_data_alert;
  }

  if (!values.Birthdate) {
    errors.Birthdate = formContent.empty_data_alert;
  }

  if (values.Phone) {
    const phoneReg6 = new RegExp(/^(0|886|\+886)?(9\d{8})$/).test(values.Phone);
    const phoneReg7 = new RegExp(/^(0|886|\+886){1}[3-8]-?\d{6,8}$/).test(
      values.Phone,
    );
    const phoneReg8 = new RegExp(/^(0|886|\+886){1}[2]-?\d{8}$/).test(
      values.Phone,
    );

    if (phoneReg6 || phoneReg7 || phoneReg8) {
      return errors;
    } else {
      errors.Phone = formContent.invalid_format_alert;
    }
  }

  return errors;
}
