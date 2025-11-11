export default function CustomRules(values, formContent) {
	const errors = {};

	// For question 1, check if any options are selected
	if (!values.CampaignData1__c) {
		errors.question_01_error = formContent.question_01_error;
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
