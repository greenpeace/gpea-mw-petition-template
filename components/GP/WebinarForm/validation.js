export function validation(values, formContent, customRules) {
	let errors = {};

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
		errors.MobilePhone =
			formContent?.empty_phone_alert || formContent.empty_data_alert;
	}

	if (!values.Birthdate) {
		errors.Birthdate = formContent.empty_data_alert;
	}

	if (values.MobilePhone) {
		if (values.MobileCountryCode === '852') {
			const regex = /^[4-9]{1}[\d]{7}$/i;
			if (!regex.test(values.MobilePhone)) {
				errors.MobilePhone =
					formContent?.invalid_phone_alert_852 ||
					formContent.invalid_format_alert;
			}
		} else if (values.MobileCountryCode === '853') {
			const regex = /^[6]{1}[\d]{7}$/i;
			if (!regex.test(values.MobilePhone)) {
				errors.MobilePhone =
					formContent?.invalid_phone_alert_853 ||
					formContent.invalid_format_alert;
			}
		}
	}

	if (customRules) {
		errors = {
			...errors,
			...customRules(values, formContent)
		};
	}

	return errors;
}
