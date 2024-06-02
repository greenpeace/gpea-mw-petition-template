import React from 'react';
import { connect } from 'react-redux';
import { Box, Button, Text, Stack } from '@chakra-ui/react';
import { Form, withFormik } from 'formik';
import { numberFormat } from '@common/utils';
import { Field } from '@components/Field/fields';
import { OrangeCTA } from '@common/styles/components/formStyle';

const ButtonWithMessage = (props) => {
	const {
		formContent: { donate_button, currency },
		handleChange,
		handleBlur,
		handleSubmit,
		touched,
		errors,
		description,
		values
	} = props;

	return (
		<Box>
			<Form onSubmit={handleSubmit}>
				<Field
					label={currency}
					name={'Donate'}
					type="number"
					errors={errors.Donate}
					touched={touched.Donate}
					handleChange={handleChange}
					handleBlur={handleBlur}
					size={'lg'}
				/>
				<Box pb={6} pt={8}>
					<Text fontSize={'md'}>{description}</Text>
				</Box>
				<Box>
					<Button {...OrangeCTA} type={'submit'}>
						{donate_button}
					</Button>
				</Box>
			</Form>
		</Box>
	);
};

const MyEnhancedForm = withFormik({
	mapPropsToValues: () => ({
		Donate: ''
	}),

	validate: async (values, props) => {
		const errors = {};
		const { formContent } = props;

		if (!values.Donate) {
			errors.Donate = formContent.empty_data_alert;
		}

		return errors;
	},

	handleSubmit: async (values, { props }) => {
		const { formContent, donateType } = props;
		window.open(
			`${formContent.donateURL}&donate_amt=${donateType}:${values.Donate}`
		);
	},

	displayName: 'DonateForm'
})(ButtonWithMessage);

const mapStateToProps = ({ form }) => {
	return {
		formContent: form.content
	};
};

export default connect(mapStateToProps)(MyEnhancedForm);
