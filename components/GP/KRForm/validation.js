export function validation(values, formContent, customRules) {
	let errors = {};
	
	if (!values.Email) {
		errors.Email = formContent.empty_data_alert;
	} else if (
		!/^(?!.*(?:''|\.\.))[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
			values.Email
		)
	) {
		errors.Email = formContent.invalid_email_alert;
	}

	// if (!values.FirstName) {
	// 	errors.FirstName = formContent.empty_data_alert;
	// }

	if (!values.LastName || /\s/.test(values.LastName)) {
		errors.LastName = formContent.empty_data_alert;
	}

	if (!values.MobilePhone) {
		errors.MobilePhone =
			formContent?.empty_phone_alert || formContent.empty_data_alert;
	}

	if (formContent.label_year_of_birth !== "" && !values.Birthdate) {
		errors.Birthdate = formContent.empty_data_alert;
	}
	console.log('values', values);
	console.log('formContent', formContent);
	if (typeof formContent?.custom_default_values?.OptIn1 != 'undefined' && !values.OptIn1) {
    errors.OptIn1 = formContent.unchecked_alert;
  } 
  if (typeof formContent?.custom_default_values?.OptIn2 != 'undefined' && !values.OptIn2) {
    errors.OptIn2 = formContent.unchecked_alert;
  } 
	if (typeof formContent?.custom_default_values?.OptIn3 != 'undefined' && !values.OptIn3) {
    errors.OptIn3 = formContent.unchecked_alert;
  } 

	
	if (customRules) {
		errors = {
			...errors,
			...customRules(values, formContent)
		};
	}

	if (values.MobilePhone) {
		const phoneReg = new RegExp(/^01[0-9]-\d{3,4}-\d{4}$/).test(
			values.MobilePhone
		);
		if (!phoneReg) {
			errors.MobilePhone = formContent.invalid_format_alert;
		} 
	}else{
		errors.MobilePhone = formContent?.empty_phone_alert || formContent.invalid_format_alert;
	}
	Object.keys(values).forEach(function (key) {
		if ((typeof values[key] === 'undefined' || values[key] === '') && !errors[key]) {
			errors[key] = formContent.empty_data_alert;
		}
	});
	
	// console.log(errors)
	

	return errors;
}
