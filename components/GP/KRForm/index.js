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
		setTouched,
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
		CustomFields,
		CustomRules,
		hasMKT = true
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
				event_name: 'petition_load',
				event_category: 'petitions',
				event_action: 'load',
				custom_metric: 'petition_load'
			});
			setFormViewed(true);
		}
	}, [formViewed]);

	useEffect(() => {
		if (setSignupBtnRef) setSignupBtnRef(btnRef);
	}, [btnRef]);

	useEffect(() => {
		let optionYear = [];
		function fetchOptionYear() {
			let minYear = 18;
			let maxYear = 90;
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
		const currentNumberOfTarget = customOfTarget
			? customOfTarget
			: numberOfTarget
			? numberOfTarget
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
			if (formContent.careers) setFieldValue('Careers', '');
			if (formContent.namelist)
				setFieldValue('Namelist', formContent.namelist[0].value);
			if (formContent.additional)
				setFieldValue(formContent.additional.fieldName, '');

			if(Object.keys(formContent.custom_default_values).length > 0) {
				Object.keys(formContent.custom_default_values).map((key) => {
					setFieldValue(key, formContent.custom_default_values[key]);
				});
			}
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
	const [checkedItems, setCheckedItems] = React.useState([false, false, false])
	const allChecked = checkedItems.every(Boolean)

	const handleCheckbox = async (e) => {
		// values[e.target.name] = e.target.checked;
		if (e.target.name === 'OptIn') {
			await setCheckedItems([e.target.checked, e.target.checked, e.target.checked])
			// setFieldValue(e.target.name, e.target.checked, true);
			for(let i = 1; i <= 3; i++){
				setFieldValue(`OptIn${i}`, e.target.checked, false);
			}
			setTouched({
				OptIn1: true,
				OptIn2: true,
				OptIn3: true
			},true);
		} else {
			// const index = parseInt(e.target.name.replace('OptIn', '')) -1;
			const index = Object.keys(formContent.custom_default_values).indexOf(e.target.name) -1;
			console.log('index', index, e.target.name);
			const newCheckedItems = [...checkedItems];
			newCheckedItems[index] = e.target.checked;
			setCheckedItems(newCheckedItems);
			await setFieldValue(e.target.name, e.target.checked, true);
			setFieldValue('OptIn', newCheckedItems.every(Boolean), false);
			setTouched({
				OptIn1: true,
				OptIn2: true,
				OptIn3: true
			},true);
		}
		handleChange(e);
	}
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
							lineHeight={1.4}
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
							lineHeight={1.7}
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

							{/* <Box flex={1}>
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
							</Box> */}
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
									handleChange={function(e){
										const formatPhoneNumber = (value) => {
											const cleaned = ('' + value).replace(/\D/g, '');
											const match = cleaned.match(/^(\d{3})(\d{0,4})(\d{0,4})$/);
											if (match) {
												return [match[1], match[2], match[3]].filter(Boolean).join('-');
											}
											return value;
										};

										
										setFieldValue('MobilePhone', formatPhoneNumber(e.target.value));
										e.target.value = formatPhoneNumber(e.target.value);
										console.log(e.target.value, values.MobilePhone);
										handleChange(e);
									}}
									handleBlur={handleBlur}
									value={values.MobilePhone}
								/>
								<Box pt="1" pl="2">
									<Text color="gray.700" fontSize="sm" as="span">
										전화번호 예：010-0000-0000
									</Text>
								</Box>
							</Box>
						</HStack>
						
						{formContent.label_year_of_birth && (
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
						)}
						

						{CustomFields && formContent && (
							<CustomFields 
								errors={errors} 
								touched={touched} 
								values={values}
								formContent={formContent}
								handleChange={handleChange}
								handleBlur={handleBlur}
								setFieldValue={setFieldValue}
								setTouched={setTouched}
								// setFieldTouched={setFieldTouched}
							/>
						)}					

						{formContent?.options_mkt && (
							<Box>
								<FormControl
										id={formContent.OptIn}
										isInvalid={errors.OptIn && touched.OptIn }
								>
									<Flex direction={{ base: 'row' }} align={'flex-start'}>
										<Box flex={0} mr={2} pt={1}>
											<Checkbox
												id="OptIn"
												name="OptIn"
												onChange={handleCheckbox}
												onBlur={handleBlur}
												isChecked={allChecked}
											/>
										</Box>
										<Text
											fontSize="xs"
											dangerouslySetInnerHTML={{
												__html: formContent?.options_mkt[0].label
											}}
										></Text>
									</Flex>	
								</FormControl>
								{Object.keys(formContent.custom_default_values).map((key, index) => {
									if(key !== 'OptIn') {
										return (
											<FormControl
												id={formContent[key]}
												isInvalid={errors[key] && (touched.OptIn1 || touched.OptIn2 || touched.OptIn3) }
											>
												<Flex direction={{ base: 'row' }} align={'flex-start'}>
													<Box flex={0} mr={2} pt={1}>
														<Checkbox
															id={key}
															name={key}
															onChange={handleCheckbox}
															onBlur={handleBlur}
															isChecked={checkedItems[index-1]}
														/>
													</Box>
													<Text
														fontSize="xs"
														dangerouslySetInnerHTML={{
															__html: formContent.options_mkt[index].label
														}}
													></Text>
													<FormErrorMessage px={2} mt={0} fontSize="xs" color="var(--error-900)">
														{errors[key]}
													</FormErrorMessage>
												</Flex>
											</FormControl>
										)
									}
								})}
								{/* <FormControl
										id={formContent.OptIn1}
										isInvalid={errors.OptIn1 && (touched.OptIn1 || touched.OptIn2 || touched.OptIn3) }
								>
									<Flex direction={{ base: 'row' }} align={'flex-start'}>
										<Box flex={0} mr={2} pt={1}>
											<Checkbox
												id="OptIn1"
												name="OptIn1"
												onChange={handleCheckbox}
												onBlur={handleBlur}
												isChecked={checkedItems[0]}
											/>
										</Box>
										<Text
											fontSize="xs"
											dangerouslySetInnerHTML={{
												__html: formContent.options_mkt[1].label
											}}
										></Text>
										<FormErrorMessage px={2} mt={0} fontSize="xs" color="var(--error-900)">
											{errors.OptIn1}
										</FormErrorMessage>
									</Flex>
								</FormControl>
								<FormControl
										id={formContent.OptIn2}
										isInvalid={errors.OptIn2 && (touched.OptIn1 || touched.OptIn2 || touched.OptIn3) }
								>
									<Flex direction={{ base: 'row' }} align={'flex-start'}>
										<Box flex={0} mr={2} pt={1}>
											<Checkbox
												id="OptIn2"
												name="OptIn2"
												onChange={handleCheckbox}
												onBlur={handleBlur}
												isChecked={checkedItems[1]}
											/>
										</Box>
										<Text
											fontSize="xs"
											dangerouslySetInnerHTML={{
												__html: formContent.options_mkt[2].label
											}}
										></Text>
										<FormErrorMessage px={2} mt={0} fontSize="xs" color="var(--error-900)">
											{errors.OptIn2}
										</FormErrorMessage>
									</Flex>
								</FormControl>
								<FormControl
										id={formContent.OptIn3}
										isInvalid={errors.OptIn3 && (touched.OptIn1 || touched.OptIn2 || touched.OptIn3) }
								>
									<Flex direction={{ base: 'row' }} align={'flex-start'}>
										<Box flex={0} mr={2} pt={1}>
											<Checkbox
												id="OptIn3"
												name="OptIn3"
												onChange={handleCheckbox}
												onBlur={handleBlur}
												isChecked={checkedItems[2]}
											/>
										</Box>
										<Text
											fontSize="xs"
											dangerouslySetInnerHTML={{
												__html: formContent.options_mkt[3].label
											}}
										></Text>
										<FormErrorMessage px={2} mt={0} fontSize="xs" color="var(--error-900)">
											{errors.OptIn3}
										</FormErrorMessage>
									</Flex>
								</FormControl> */}
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
	mapPropsToValues: (props) => {
		console.log('props', props);
		return {
			Email: '',
			// FirstName: '',
			LastName: '',
			MobilePhone: '',
			OptIn: false,
			// Birthdate: '',
			// ...formContent.custom_default_values
		}
	},

	validate: async (values, props) => {
    const { formContent, CustomRules } = props;
		return validation(values, formContent, CustomRules);
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
			: dummyEndpointURL !== '' && dummyEndpointURL !== undefined && !dummyEndpointURL.includes('greenkr')
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
			MobileCountryCode: '82',
			CampaignId: campaignId,
			LeadSource: LeadSource,
			[`Petition_Interested_In_${
				capitalize(strapi?.issue?.data?.attributes?.slug) ??
				capitalize(theme.interests)
			}__c`]: true,
			CompletionURL: completionURL
		};
		if(capitalize(theme.interests) === 'General' || capitalize(strapi?.issue?.data?.attributes?.slug) === 'General') {
			formData.Petition_Interested_In_Health__c = true;
		}

		if (values.Counties) formData.CampaignData1__c = values.Counties;
		if (values.Careers) formData.CampaignData1__c = values.Careers;
		if (values.Namelist) formData.CampaignData2__c = values.Namelist;
		// if (values.MobilePhone.indexOf('0') == 0)
		// 	formData.MobilePhone = values.MobilePhone.replace(/^0+/, '');
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
		numberOfResponses:Math.max(
			parseInt(form.signupNumbers.kr?.NumberOfResponses),
			parseInt(form.signupNumbers.kr?.NumberOfLeads) +
			parseInt(form.signupNumbers.kr?.NumberOfContacts)
		),
		numberOfTarget: form.signupNumbers.kr?.Petition_Signup_Target__c,
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
