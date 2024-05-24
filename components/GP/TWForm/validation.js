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

	if (!values.FirstName) {
		errors.FirstName = formContent.empty_data_alert;
	}

	if (!values.LastName) {
		errors.LastName = formContent.empty_data_alert;
	}

	if (!values.MobilePhone) {
		errors.MobilePhone =
			formContent?.empty_phone_alert || formContent.empty_data_alert;
	}

	if (!values.Birthdate) {
		errors.Birthdate = formContent.empty_data_alert;
	}

	if (!values.Counties && typeof formContent.counties != 'undefined') {
		errors.Counties = formContent.empty_data_alert;
	}

	if (!values.Careers && typeof formContent.careers != 'undefined') {
		errors.Careers = formContent.empty_data_alert;
	}

	if (!values.Address && typeof formContent.address != 'undefined') {
		errors.Address = formContent.empty_data_alert;
	}

	
	if (customRules) {
		errors = {
			...errors,
			...customRules(values, formContent)
		};
	}

	if (values.MobilePhone) {
		const phoneReg6 = new RegExp(/^(0|886|\+886)?(9\d{8})$/).test(
			values.MobilePhone
		);
		const phoneReg7 = new RegExp(/^(0|886|\+886){1}[3-8]-?\d{6,8}$/).test(
			values.MobilePhone
		);
		const phoneReg8 = new RegExp(/^(0|886|\+886){1}[2]-?\d{8}$/).test(
			values.MobilePhone
		);

		if (!phoneReg6) {
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
	
	
	

	return errors;
}
