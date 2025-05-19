export default function CustomRules(values, formContent) {
	const errors = {};

	// For question 1, check if any options are selected
	if (!values.CampaignData1__c) {
		errors.question_01_error = formContent.question_01_error;
	}

	const q2Value = values.CampaignData2__c;

	// Check if string is empty/undefined/null/whitespace only
	const isEmpty =
		!q2Value || (typeof q2Value === 'string' && q2Value.trim() === '');

	// Check that the format appears correct and all options are included
	// Count the number of options in the formatted string
	const optionCount = q2Value ? q2Value.split(',').length : 0;
	const expectedOptionCount = formContent.question_02_options
		? formContent.question_02_options.length
		: 5;

	// Check for correct format (includes colons and numbers) and all options are present
	const hasCorrectFormat =
		q2Value &&
		typeof q2Value === 'string' &&
		q2Value.includes(':') &&
		/\d/.test(q2Value) &&
		optionCount >= expectedOptionCount;

	if (isEmpty || !hasCorrectFormat) {
		// Set error if the field is empty, formatted incorrectly, or missing options
		errors.question_02_error = formContent.question_02_error;
	} else {
		// If we have a valid value, do not show the error
		delete errors.question_02_error;
	}

	if (formContent.label_concern){
		let concernFieldName = formContent?.name_concern || 'CampaignData3__c';
		if (!values[concernFieldName] && formContent?.required_concern) {
		  errors.Options_Concern = formContent.empty_select_data_alert;
		}
	  }
	  if (formContent.max_opinion_alert && formContent?.name_opinion) {
		let opinionFieldName = formContent?.name_opinion;
		let opinionMaxLength = Number(formContent?.max_opinion_length) || 500;
		if(values[opinionFieldName]){
		  if (values[opinionFieldName].length > opinionMaxLength) {
			errors.Opinion = formContent.max_opinion_alert;
		  }
		}
	  }

	return errors;
}
