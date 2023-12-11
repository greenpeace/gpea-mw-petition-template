import React, { useEffect, useState, useRef } from 'react';
import { Form, withFormik } from 'formik';
import { connect } from 'react-redux';
import axios from 'axios';
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
		customEndpoint,
		customOfTarget,
		customMapFields, //an array for copy values to preset CampaignData fileds. ex: [{"from":"BirthDate", "to":"CampaignData3__c"}]
		setSignupBtnRef,
		hasMKT = true,
		ctaText
	} = props;
	const [birthDateYear, setBirthDateYear] = useState([]);
	const [progressNumber, setProgressNumber] = useState(0);
	const themeInterests = theme.interests;
	const [customNumbers, setCustomNumbers] = useState(null);

	const btnRef = useRef(null);
	const [formViewed, setFormViewed] = useState(false);

	useEffect(() => {
		if (!formViewed) {
			// ga4 event
			window.dataLayer = window.dataLayer || [];

			window.dataLayer.push({
				event: 'custom_event',
				event_name: 'view_form',
				event_category: 'petitions',
				event_action: 'load'
			});
			if(window.__greenpeace__.sendHackleTrack){
				// Hackle: 送給 hackle 跟 ga4 一樣的 event 資料
				window.__greenpeace__.sendHackleTrack({
						event: 'custom_event',
						event_name: 'view_form',
						event_category: 'petitions',
						event_action: 'load',
						currency: theme?.Market.toUpperCase() === 'TW' ? 'TWD' : 'HKD',
						market: theme?.Market.toUpperCase(),
						CompletionURL: clearURL(
							window.location.href,
							EXCLUDE_URL_PARAMETERS
						)
				})
			}
			setFormViewed(true);
		}
	}, [formViewed]);

	useEffect(() => {
		if (setSignupBtnRef) setSignupBtnRef(btnRef);
	}, [btnRef]);

	useEffect(() => {
		let optionYear = [];
		function fetchOptionYear() {
			const minYear = 18;
			const maxYear = 110;
			let nowYear = new Date().getFullYear();
			let targetYear = nowYear - maxYear;
			for (var i = nowYear - minYear; i >= targetYear; i--) {
				optionYear.unshift({ label: i, value: i.toString() });
			}
			setBirthDateYear(optionYear);
		}
		fetchOptionYear(optionYear);
		initSuggestion();
	}, []);

	// get numberOfResponses from custom endpoint
	useEffect(() => {
		if (customEndpoint) {
			axios
				.get(customEndpoint)
				.then((response) => {
					setCustomNumbers(Number(response.data.unique_count));
				})
				.catch((error) => console.log(error));
		}
	}, []);

	useEffect(() => {
		console.log(
			'numberOfResponses: ',
			numberOfResponses,
			customNumbers,
			numberOfTarget
		);

		const currentNumber = customNumbers ? customNumbers : numberOfResponses;
		const currentNumberOfTarget = numberOfTarget
			? numberOfTarget
			: customOfTarget
			? customOfTarget
			: 10000;
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
	}, [numberOfResponses, customNumbers]);

	//setting additional fileds for formik
	useEffect(() => {
		if (Object.keys(formContent).length > 0) {
			if (formContent.counties) setFieldValue('Counties', '');
			if (formContent.namelist)
				setFieldValue('Namelist', formContent.namelist[0].value);
			if (formContent.additional)
				setFieldValue(formContent.additional.fieldName, '');
		}
	}, [formContent]);

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
		<Box py="8" px="4">
			<Stack spacing="4">
				{formContent.signed_number &&
					(numberOfResponses || customNumbers) &&
					(numberOfTarget || customOfTarget) && (
						<Box>
							<Box
								borderRadius={'20px'}
								bgColor="#d2d2d2"
								h={`14px`}
								overflow={`hidden`}
							>
								{(numberOfResponses || customNumbers) && (
									<Box
										style={{ transition: `width 2s` }}
										h={`14px`}
										w={progressNumber}
										borderRadius={4}
										bgColor={
											formContent.signed_progress_color
												? formContent.signed_progress_color
												: `theme.${themeInterests}`
										}
									/>
								)}
							</Box>
							<Box>
								<Text color={`theme.${themeInterests}`} fontSize={'sm'} mt={2}>
									{formContent.signed_number}:{' '}
									<Text as="span" fontSize={'2xl'} fontWeight="bold">
										{numberFormat(
											customNumbers ? customNumbers : numberOfResponses
										)}
									</Text>{' '}
									/{' '}
									{numberFormat(
										customOfTarget ? customOfTarget : numberOfTarget
									)}
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
							dangerouslySetInnerHTML={{ __html: formContent.form_description }}
						/>
					</Box>
				)}
				<Form onSubmit={handleSubmit}>
					<Stack spacing="4">
						<Stack direction={`row`}>
							<Box flex={1}>
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

							<Box flex={1}>
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

						<Box>
							<FormControl id="email" isInvalid={errors.Email && touched.Email}>
								<Input
									name="Email"
									type="email"
									placeholder={formContent.label_email}
									onChange={handleChange}
									onBlur={(e) => {
										// call the built-in handleBur
										handleBlur(e);
										// and do something about e
										mailSuggestion(e.target.value);
									}}
									value={values.Email}
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

						<HStack align="flex-end">
							<Box flex={1}>
								<Field
									errors={errors.MobilePhone}
									touched={touched.MobilePhone}
									label={formContent.label_phone}
									name={'MobilePhone'}
									handleChange={handleChange}
									handleBlur={handleBlur}
									value={values.MobilePhone}
								/>
								<Box pt="1" pl="2">
									<Text color="gray.700" fontSize="sm" as="span">
										電話格式範例：0912345678 或 02-23612351
									</Text>
								</Box>
							</Box>
						</HStack>

						<Box>
							<FormControl
								id="Birthdate"
								isInvalid={errors.Birthdate && touched.Birthdate}
							>
								<Select
									onChange={handleChange}
									placeholder={formContent.label_year_of_birth}
									fontSize={'16px'}
									size={'lg'}
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
						{/* optional select: county */}
						{formContent.counties && (
							<Box>
								<FormControl
									id={
										formContent.counties.fieldName
											? formContent.counties.fieldName
											: 'Counties'
									}
									isInvalid={errors.Counties && touched.Counties}
								>
									<Select
										onChange={handleChange}
										fontSize={'16px'}
										placeholder={formContent.label_counties}
										size={'lg'}
									>
										{formContent.counties.options.map((d, index) => (
											<option
												key={index}
												value={`${d.value}`}
												disabled={d.disabled ? true : null}
											>
												{d.value}
											</option>
										))}
									</Select>
									<FormErrorMessage px={2} color="var(--error-900)">
										{errors.Counties}
									</FormErrorMessage>
								</FormControl>
							</Box>
						)}
						{/* optional field */}
						{formContent.additional && (
							<HStack align="flex-end">
								<Box flex={1}>
									<Field
										errors={errors[formContent.additional.fieldName]}
										touched={touched[formContent.additional.fieldName]}
										label={formContent.label_additional}
										name={formContent.additional.fieldName}
										type={formContent.additional.type}
										handleChange={handleChange}
										handleBlur={handleBlur}
									/>
									{formContent.additional.note && (
										<Box pt="1" pl="2">
											<Text color="gray.700" fontSize="sm" as="span">
												{formContent.additional.note}
											</Text>
										</Box>
									)}
								</Box>
							</HStack>
						)}
						{formContent.label_newsletter && hasMKT && (
							<Box>
								<Flex py="2" direction={{ base: 'row' }} align={'flex-start'}>
									<Box flex={0} mr={2} pt={1}>
										<Checkbox
											id="OptIn"
											name="OptIn"
											onChange={handleChange}
											defaultChecked
										/>
									</Box>
									<Text
										fontSize="xs"
										color={'gray.700'}
										dangerouslySetInnerHTML={{
											__html: formContent.label_newsletter
										}}
									></Text>
								</Flex>
							</Box>
						)}

						{formContent.label_newsletter && !hasMKT && (
							<Box>
								<Checkbox
									id="OptIn"
									name="OptIn"
									onChange={handleChange}
									defaultChecked
									display={'none'}
								/>
								<Flex py="2" direction={{ base: 'row' }} align={'flex-start'}>
									<Text
										fontSize="xs"
										color={'gray.700'}
										dangerouslySetInnerHTML={{
											__html: formContent.label_newsletter
										}}
									/>
								</Flex>
							</Box>
						)}

						{formContent.namelist && (
							<Box>
								<Flex py="2" direction={{ base: 'row' }} align={'flex-start'}>
									<Box flex={1} mr={2} pt={1}>
										<Checkbox
											id="Namelist"
											name={
												formContent.namelist.fieldName
													? formContent.namelist.fieldName
													: 'Namelist'
											}
											onChange={handleChange}
											defaultChecked
											value={formContent.namelist[0].value}
										/>
									</Box>
									<Text
										fontSize="xs"
										color={'gray.700'}
										dangerouslySetInnerHTML={{
											__html: formContent.label_namelist
										}}
									></Text>
								</Flex>
							</Box>
						)}

						<Box>
							<Button
								{...OrangeCTA}
								isLoading={isLoading}
								type={'submit'}
								ref={btnRef}
							>
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
										__html: formContent.form_remind
									}}
								/>
							</Box>
						)}
					</Stack>
				</Form>
			</Stack>
		</Box>
	);
};

const MyEnhancedForm = withFormik({
	mapPropsToValues: () => ({
		Email: '',
		FirstName: '',
		LastName: '',
		MobilePhone: '',
		OptIn: true,
		Birthdate: ''
	}),

	validate: async (values, props) => {
		const { formContent } = props;
		return validation(values, formContent);
	},

	handleSubmit: async (values, { setSubmitting, props }) => {
		const { submitForm, theme, hiddenFormData, strapi, customMapFields } =
			props;
		const isProd = process.env.NODE_ENV === 'production';
		const fallbackValue = (d) => (d ? d : '');
		const LeadSource = `Petition - ${
			capitalize(strapi?.issue?.data?.attributes?.slug) ??
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
			MobileCountryCode: '886',
			CampaignId: campaignId,
			LeadSource: LeadSource,
			[`Petition_Interested_In_${
				capitalize(strapi?.issue?.data?.attributes?.slug) ??
				capitalize(theme.interests)
			}__c`]: true,
			CompletionURL: completionURL
		};

		if (values.Counties) formData.CampaignData1__c = values.Counties;
		if (values.Namelist) formData.CampaignData2__c = values.Namelist;
		if (values.MobilePhone.indexOf('0') == 0)
			formData.MobilePhone = values.MobilePhone.replace(/^0+/, '');
		if (customMapFields) {
			customMapFields.forEach((val) => {
				formData[val.to] = values[val.from];
			});
		}

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
		numberOfResponses:
			theme.data.ProjectName === 'oceans'
				? form.signupNumbers.tw?.NumberOfResponses
				: Math.max(
						parseInt(form.signupNumbers.tw?.NumberOfResponses),
						parseInt(form.signupNumbers.tw?.NumberOfLeads) +
							parseInt(form.signupNumbers.tw?.NumberOfContacts)
				  ),
		numberOfTarget: form.signupNumbers.tw?.Petition_Signup_Target__c,
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
