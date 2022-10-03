export function validation(values, formContent) {
	const errors = {};

	if (!values.Password) {
		errors.Password = '請輸入密碼';
	}

	return errors;
}
