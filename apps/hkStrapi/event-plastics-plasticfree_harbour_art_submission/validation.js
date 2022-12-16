export function validation(values, formContent) {
	const errors = {};

	if (!values.contact) {
		errors.contact = formContent.empty_data_alert;
	} else if (
		!/^(?!.*(?:''|\.\.))[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
			values.contact
		)
	) {
		errors.contact = formContent.invalid_email_alert;
	}

	if (!values.name) {
		errors.name = formContent.empty_data_alert;
	}

	if (!values.message) {
		errors.message = formContent.empty_data_alert;
	}

	if (!values.File) {
		errors.File = '請上傳圖片';
	}

	if (!values.tnc) {
		errors.tnc = '請先同意條款';
	}

	// if (!values.LastName) {
	//   errors.LastName = formContent.empty_data_alert;
	// }

	// if (!values.MobilePhone) {
	//   errors.MobilePhone = formContent.empty_data_alert;
	// }

	// if (!values.Birthdate) {
	//   errors.Birthdate = formContent.empty_data_alert;
	// }

	// if (values.MobilePhone) {
	//   if (values.MobileCountryCode === '852') {
	//     const regex = /^[2-9]{1}[0-9]{7}$/i;
	//     if (!regex.test(values.MobilePhone)) {
	//       errors.MobilePhone = formContent.invalid_format_alert;
	//     }
	//   } else if (values.MobileCountryCode === '853') {
	//     const regex = /^[6]{1}[0-9]{7}$/i;
	//     if (!regex.test(values.MobilePhone)) {
	//       errors.MobilePhone = formContent.invalid_format_alert;
	//     }
	//   }
	// }

	return errors;
}
