export function validation(values, formContent) {
    const errors = {};

    if (!values.Password) {
      errors.FirstName = formContent.empty_data_alert;
    }

    return errors;
  }
  