import React, { useEffect, useRef, useState } from 'react';
import { Form, withFormik } from 'formik';
import { connect } from 'react-redux';
import { Field } from '@components/Field/fields';
import { numberFormat, capitalize, clearURL } from '@common/utils';
import { validation } from './validation';
import Mailcheck from 'mailcheck';
import * as signupActions from 'store/actions/action-types/signup-actions';
import * as statusActions from 'store/actions/action-types/status-actions';
import * as formActions from 'store/actions/action-types/form-actions';
import {
	FormControl,
	FormErrorMessage,
	Button,
	Box,
	Flex,
	Text,
	HStack,
	Stack,
	Select,
	Input,
	Checkbox,
	Heading
} from '@chakra-ui/react';
import {
	MAIL_DOMAINS,
	MAIL_TOP_DOMAINS,
	EXCLUDE_URL_PARAMETERS
} from '@common/constants';
import { OrangeCTA } from '@common/styles/components/formStyle';
import {
	headingProps,
	paragraphProps
} from '@common/styles/components/contentStyle';

const MyForm = (props) => {
	const {
		signup,
		touched,
		errors,
		handleChange,
		handleBlur,
		handleSubmit,
		isLoading,
		setFieldValue,
		setWebStatus,
		values,
		formContent,
		theme,
		setSuggestion,
		initSuggestion,
		suggestion,
		numberOfResponses,
		numberOfTarget,
		setValues, 
		setSignupBtnRef
	} = props;
	const [birthDateYear, setBirthDateYear] = useState([]);
	const [progressNumber, setProgressNumber] = useState(0);
	const themeInterests = theme.interests;

	const btnRef = useRef(null);
	const [formViewed, setFormViewed] = useState(false);

	useEffect(() => {
		if(!formViewed){
			// ga4 event
			window.dataLayer = window.dataLayer || [];

			window.dataLayer.push({
				'event': 'custom_event',
				'event_name' : 'view_form',
				'event_category': 'petitions',
				'event_action': 'load'
			});
			setFormViewed(true);
		}
	}, [formViewed]);

	useEffect(() => {
		setSignupBtnRef(btnRef);
	}, [btnRef]);

	useEffect(() => {
		let optionYear = [];
		function fetchOptionYear() {
			const minYear = 18;
			const maxYear = 110;
			let nowYear = new Date().getFullYear();
			let targetYear = nowYear - maxYear;
			for (var i = nowYear - minYear; i >= targetYear; i--) {
				optionYear.push({ label: i, value: i.toString() });
			}
			setBirthDateYear(optionYear);
		}
		fetchOptionYear(optionYear);
		initSuggestion();
		
	}, []);

	useEffect(() => {
		const currentNumber = numberOfResponses;
		const currentNumberOfTarget = numberOfTarget ? numberOfTarget : 10000;
		const number =
			Math.round((currentNumber / currentNumberOfTarget) * 10000) / 100;
		if (isNaN(number)) {
			return;
		}

		const timer = () => setTimeout(() => setProgressNumber(`${number}%`), 1000);
		const timerId = timer();
		return () => {
			clearTimeout(timerId);
		};
	}, [numberOfResponses]);

	useEffect(() => {
		if (signup.submitted) {
			setWebStatus(true);
		}
	}, [signup.submitted]);

	const mailSuggestion = (value) => {
		const domains = MAIL_DOMAINS;
		const topLevelDomains = MAIL_TOP_DOMAINS;

		if (value) {
			Mailcheck.run({
				email: value,
				domains: domains, // optional
				topLevelDomains: topLevelDomains, // optional
				// secondLevelDomains: secondLevelDomains, // optional
				// distanceFunction: superStringDistance,  // optional
				suggested: function (suggestion) {
					if (value !== suggestion.full) {
						setSuggestion(suggestion.full);
					}
				}
			});
		}
	};

	return (
		<Box pos={'relative'}>
			{isLoading && (
				<Box
					pos={'absolute'}
					top={0}
					right={0}
					left={0}
					bottom={0}
					bgColor={'rgba(255, 255, 255, 0.25)'}
					zIndex={9}
				/>
			)}
			<Box py={{ base: 6, md: 8 }} px={{ base: 4, md: 6 }}>
				<Stack spacing="4">
					{numberOfResponses && numberOfTarget && (
						<Box>
							<Box
								borderRadius={'20px'}
								bgColor="#d2d2d2"
								h={`14px`}
								overflow={`hidden`}
							>
								{numberOfResponses && (
									<Box
										style={{ transition: `width 2s` }}
										h={`14px`}
										w={progressNumber}
										borderRadius={4}
										bgColor={`theme.${themeInterests}`}
									/>
								)}
							</Box>
							<Box>
								<Text color={`theme.${themeInterests}`} fontSize={'sm'} mt={2}>
									{formContent.signed_number}:{' '}
									<Text as="span" fontSize={'2xl'} fontWeight="bold">
										{numberFormat(numberOfResponses)}
									</Text>{' '}
									/ {numberFormat(numberOfTarget)}
								</Text>
							</Box>
						</Box>
					)}
					{formContent.form_header && (
						<Box>
							<Heading
								as="h2"
								{...headingProps}
								mb="0"
								color={`theme.${themeInterests}`}
								dangerouslySetInnerHTML={{ __html: formContent.form_header }}
							/>
						</Box>
					)}
					{formContent.form_description && (
						<Box>
							<Text
								as="p"
								{...paragraphProps}
								mb="0"
								dangerouslySetInnerHTML={{
									__html: formContent.form_description
								}}
							/>
						</Box>
					)}
					<Form onSubmit={handleSubmit}>
						<Stack spacing="4">
							<Box>
								<Stack direction={`row`}>
									<Box w={'100%'}>
										<Field
											errors={errors.LastName}
											touched={touched.LastName}
											label={formContent.label_last_name}
											name={'LastName'}
											type={'text'}
											handleChange={handleChange}
											handleBlur={handleBlur}
											value={values.LastName}
										/>
									</Box>

									<Box w={'100%'}>
										<Field
											errors={errors.FirstName}
											touched={touched.FirstName}
											label={formContent.label_first_name}
											name={'FirstName'}
											type={'text'}
											handleChange={handleChange}
											handleBlur={handleBlur}
											value={values.FirstName}
										/>
									</Box>
								</Stack>
							</Box>

							<Box>
								<FormControl
									id="email"
									isInvalid={errors.Email && touched.Email}
								>
									<Input
										name="Email"
										type="email"
										placeholder={formContent.label_email}
										onChange={handleChange}
										onBlur={(e) => {
											handleBlur(e);
											mailSuggestion(e.target.value);
										}}
										value={values.Email}
										size="md"
									/>
									<FormErrorMessage px={2} color="var(--error-900)">
										{errors.Email}
									</FormErrorMessage>
									{suggestion && (
										<Box
											onClick={() => {
												setFieldValue('Email', suggestion);
												initSuggestion();
											}}
											p={2}
											cursor={'pointer'}
										>
											<Text fontSize={'sm'} color={`theme.${themeInterests}`}>
												{formContent.suggestion_message}
												<b>
													<u>{suggestion}</u>
												</b>
												？
											</Text>
										</Box>
									)}
								</FormControl>
							</Box>

							<Box>
								<HStack align="flex-start">
									<Box minWidth={'100px'}>
										<FormControl id="mobileCountryCode">
											<Select name="MobileCountryCode" onChange={handleChange}>
												{(formContent.mobile_country_code || []).map((d) => (
													<option key={d.value} value={d.value}>
														{d.label}
													</option>
												))}
											</Select>
										</FormControl>
									</Box>
									<Box w={'100%'}>
										<Field
											errors={errors.MobilePhone}
											touched={touched.MobilePhone}
											label={formContent.label_phone}
											name={'MobilePhone'}
											type="tel"
											handleChange={handleChange}
											handleBlur={handleBlur}
											value={values.MobilePhone}
										/>
									</Box>
								</HStack>
							</Box>

							<Box>
								<FormControl
									id="Birthdate"
									isInvalid={errors.Birthdate && touched.Birthdate}
								>
									<Select
										onChange={handleChange}
										placeholder={formContent.label_year_of_birth}
										value={values.Birthdate}
									>
										{birthDateYear &&
											birthDateYear.map((d) => (
												<option key={d.value} value={`${d.value}-01-01`}>
													{d.value}
												</option>
											))}
									</Select>
									<FormErrorMessage px={2} color="var(--error-900)">
										{errors.Birthdate}
									</FormErrorMessage>
								</FormControl>
							</Box>

							<Box>
							{formContent.label_newsletter && (
								<Flex py="2" direction={{ base: 'row' }} align={'flex-start'}>
									<Box mr={2} pt={1}>
										<Checkbox
											name="OptIn"
											defaultChecked
											// colorScheme={`${theme.ProjectName}`}
											onChange={handleChange}
										/>
									</Box>
									<Text
										fontSize="xs"
										color={'gray.700'}
										dangerouslySetInnerHTML={{
											__html: formContent.label_newsletter
										}}
									/>
								</Flex>
							)}
							</Box>

							<Box>
								<Button {...OrangeCTA} isLoading={isLoading} type={'submit'} ref={ btnRef }>
									{formContent.submit_text}
								</Button>
							</Box>
							{formContent.form_remind && (
								<Box>
									<Text
										fontSize="xs"
										color={'gray.700'}
										lineHeight="1.7"
										dangerouslySetInnerHTML={{
											__html: formContent.form_remind,
										}}
									/>
								</Box>
							)}
						</Stack>
					</Form>
				</Stack>
			</Box>
		</Box>
	);
};

const MyEnhancedForm = withFormik({
	enableReinitialize: true,
	mapPropsToValues: ({ signup }) => ({
		Email: signup?.preFill?.Email ?? '',
		FirstName: signup?.preFill?.FirstName ?? '',
		LastName: signup?.preFill?.LastName ?? '',
		MobileCountryCode: '852',
		MobilePhone: signup?.preFill?.MobilePhone ?? '',
		OptIn: true,
		Birthdate: signup?.preFill?.Birthdate ?? ''
	}),

	validate: async (values, props) => {
		const { formContent } = props;

		return validation(values, formContent);
	},

	handleSubmit: async (values, { setSubmitting, props }) => {
		const { submitForm, theme, hiddenFormData, strapi } = props;
		const isProd = process.env.NODE_ENV === 'production';
		const fallbackValue = (d) => (d ? d : '');
		const LeadSource = `Petition - ${capitalize(strapi?.issue?.data?.attributes?.slug) ??
			capitalize(theme.interests)
			}`;

		const { dummyEndpointURL, websignEndpointURL } =
			strapi?.market?.data?.attributes;

		const endpointURL = isProd
			? websignEndpointURL !== '' && websignEndpointURL !== undefined
				? websignEndpointURL
				: theme.EndpointURL
			: dummyEndpointURL !== '' && dummyEndpointURL !== undefined
				? dummyEndpointURL
				: process.env.dummyEndpoint;

		const campaignId = isProd
			? strapi?.campaignId !== '' && strapi.campaignId !== undefined
				? strapi?.campaignId
				: theme.CampaignId
			: '7012u000000OxDYAA0';

		const completionURL = clearURL(
			window.location.href,
			EXCLUDE_URL_PARAMETERS
		);

		const formData = {
			...hiddenFormData,
			...values,
			UtmMedium: fallbackValue(hiddenFormData.utm_medium),
			UtmSource: fallbackValue(hiddenFormData.utm_source),
			UtmCampaign: fallbackValue(hiddenFormData.utm_campaign),
			UtmContent: fallbackValue(hiddenFormData.utm_content),
			UtmTerm: fallbackValue(hiddenFormData.utm_term),
			CampaignId: campaignId,
			LeadSource: LeadSource,
			[`Petition_Interested_In_${capitalize(strapi?.issue?.data?.attributes?.slug) ??
				capitalize(theme.interests)
				}__c`]: true,
			CompletionURL: completionURL
		};

		setSubmitting(true);
		submitForm(formData, endpointURL);
	},

	displayName: 'SignupForm'
})(MyForm);

const mapStateToProps = ({ signup, hiddenForm, form, theme, status }) => {
	return {
		signup,
		hiddenFormData: hiddenForm.data,
		isLoading: signup.lastAction === signupActions.SIGN_UP,
		formContent: form.content,
		numberOfResponses: Math.max(
			parseInt(form.signupNumbers.hk?.NumberOfResponses),
			parseInt(form.signupNumbers.hk?.NumberOfLeads) +
			parseInt(form.signupNumbers.hk?.NumberOfContacts)
		),
		numberOfTarget: form.signupNumbers.hk?.Petition_Signup_Target__c,
		theme: theme.data,
		suggestion: form.suggestion,
		strapi: theme.strapi
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		submitForm: (data, endPoint) => {
			dispatch({ type: signupActions.SIGN_UP, data, endPoint });
		},
		setWebStatus: (bol) => {
			dispatch({ type: statusActions.SET_FORM_SUBMITTED, data: bol });
		},
		setSuggestion: (value) => {
			dispatch({ type: formActions.SET_SUGGESTION, data: value });
		},
		initSuggestion: () => {
			dispatch({ type: formActions.INIT_SUGGESTION });
		}
	};
};

connect(mapStateToProps, mapDispatchToProps)(MyForm);

export default connect(mapStateToProps, mapDispatchToProps)(MyEnhancedForm);
