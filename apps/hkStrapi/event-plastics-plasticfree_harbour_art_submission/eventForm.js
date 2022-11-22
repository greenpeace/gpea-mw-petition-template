import React, { useEffect, useState, useRef } from 'react';
import { Form, withFormik } from 'formik';
import { connect, useSelector } from 'react-redux';
import { Field } from '@components/Field/fields';
import { capitalize, clearURL } from '@common/utils';
import { validation } from './validation';
import Mailcheck from 'mailcheck';
import * as signupActions from 'store/actions/action-types/signup-actions';
import * as statusActions from 'store/actions/action-types/status-actions';
import * as formActions from 'store/actions/action-types/form-actions';
import axios from 'axios';
import {
	FormControl,
	FormErrorMessage,
	Button,
	Box,
	Flex,
	Text,
	Stack,
	Input,
	Checkbox,
	Heading,
	Textarea,
	Center,
	Icon,
	Image
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

import { AiOutlineCloudUpload } from 'react-icons/ai';

const EventForm = (props) => {
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
		status,
		values,
		formContent,
		theme,
		setSuggestion,
		initSuggestion,
		suggestion
	} = props;
	const themeInterests = theme.interests;
	const uploadRef = useRef(null);
	const [imagePreview, setImagePreview] = useState('');
	const [errorMessage, setErrorMessage] = useState(null);

	useEffect(() => {
		initSuggestion();
	}, []);

	useEffect(() => {
		if (signup.submitted) {
			setWebStatus(true);
		}
	}, [signup.submitted]);

	const handleFileUpload = () => {
		uploadRef.current.click();
	};

	const handleReset = () => {
		setFieldValue('File', '');
		setImagePreview('');
	};

	const handleDragEnter = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};
	const handleDragLeave = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};
	const handleDragOver = (e) => {
		e.preventDefault();
		e.stopPropagation();
	};

	const handleDrop = (e) => {
		e.preventDefault();
		e.stopPropagation();

		const files = e.dataTransfer.files;
		if (files) {
			setFieldValue('File', files[0]);
		}
	};

	useEffect(() => {
		if (values.File) {
			setImagePreview(URL.createObjectURL(values.File));
		}
	}, [values.File]);

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

	if (signup.submitted) {
		return (
			<Stack p={4} gap={2}>
				<Text as="h2" fontWeight="bold">
					感謝您的報名參與！
				</Text>
				<Text as="p">
					感謝您參與綠色和平舉辦的「無塑海港」重用杯創意設計比賽，您已成功報名參與比賽，重用杯設計檔、遞交網址、活動重要資訊等將經電郵傳送給您。
				</Text>
			</Stack>
		);
	}

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
											errors={errors.name}
											touched={touched.name}
											label={'參賽者姓名（姓名亦會列印在參賽證書之上）'}
											name={'name'}
											type={'text'}
											handleChange={handleChange}
											handleBlur={handleBlur}
											value={values.name}
										/>
									</Box>
								</Stack>
							</Box>

							<Box>
								<FormControl
									id="email"
									isInvalid={errors.contact && touched.contact}
								>
									<Input
										name="contact"
										type="email"
										placeholder={'聯絡方式（我們將聯絡閣下如你的作品得獎）'}
										onChange={handleChange}
										onBlur={(e) => {
											handleBlur(e);
											mailSuggestion(e.target.value);
										}}
										value={values.contact}
										size="md"
									/>
									<FormErrorMessage px={2} color="var(--error-900)">
										{errors.contact}
									</FormErrorMessage>
									{suggestion && (
										<Box
											onClick={() => {
												setFieldValue('contact', suggestion);
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
								<Stack direction={`row`}>
									<Box w={'100%'}>
										<FormControl
											id={'message'}
											isInvalid={errors?.message && touched?.message}
											pos="relative"
										>
											<Textarea
												name="message"
												placeholder="作品說明"
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.message}
											/>
											<FormErrorMessage px={2} color="var(--error-900)">
												{errors?.message}
											</FormErrorMessage>
										</FormControl>
									</Box>
								</Stack>
							</Box>

							<Box flex={1}>
								{!imagePreview && (
									<Box>
										<Center
											border={`1px dashed #d9d9d9`}
											bgColor={`#fafafa`}
											borderRadius={`2px`}
											onClick={() => handleFileUpload()}
											onDrop={(e) => handleDrop(e)}
											onDragOver={(e) => handleDragOver(e)}
											onDragEnter={(e) => handleDragEnter(e)}
											onDragLeave={(e) => handleDragLeave(e)}
											cursor={`pointer`}
											_hover={{
												border: `1px dashed #000`
											}}
											minH={`xs`}
										>
											<Stack justifyContent={'center'} alignItems={'center'}>
												<Icon as={AiOutlineCloudUpload} w={8} h={8} />
												<Text>上載作品</Text>
												<Text>將照片拖動到此處，或瀏覽要上載的檔案</Text>
											</Stack>
										</Center>
									</Box>
								)}

								<FormControl id="File" isInvalid={errors.File && touched.File}>
									<FormErrorMessage color="red">{errors.File}</FormErrorMessage>
									<Box className="upload-btn-wrapper" h={0} overflow={`hidden`}>
										<Button>Upload a file</Button>
										<Input
											variant={'clear'}
											textAlign={`center`}
											name="File"
											type="file"
											onChange={(event) => {
												setErrorMessage(null);
												const expectedSizeInMB = 1;
												const expectedSizeInBytes =
													1024 * 1024 * expectedSizeInMB;
												const file = event.target.files[0];
												if (file?.size > expectedSizeInBytes) {
													setErrorMessage('上傳檔案容量不可以超過20MB');
													return;
												}

												setFieldValue('File', event.target.files[0]);

												event.target.value = '' // Fix can't upload same file twice
											}}
											ref={uploadRef}
											accept="image/*, .pdf"
										/>
									</Box>
									<Text color="red" fontSize={'sm'} py={2}>
										{errorMessage}
									</Text>
								</FormControl>
							</Box>

							<Box>
								<FormControl
									id={'message'}
									isInvalid={touched?.tnc && errors?.tnc}
									pos="relative"
								>
									<Flex py="2" direction={{ base: 'row' }} align={'flex-start'}>
										<Box mr={2} pt={1}>
											<Checkbox
												name="tnc"
												defaultChecked
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
								</FormControl>
							</Box>

							<Box>
								<Button {...OrangeCTA} isLoading={isLoading} type={'submit'} disabled={!!errors?.tnc}>
									{formContent.submit_text}
								</Button>
							</Box>

							{imagePreview && (
								<Box>
									<Image src={imagePreview} alt="Image" />
									<Center my={4}>
										<Button onClick={() => handleReset()} px={8} py={4}>
											刪除
										</Button>
									</Center>
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
		Birthdate: signup?.preFill?.Birthdate ?? '',
		// for event
		name: '',
		contact: '',
		message: '',
		submissionURL: '',
		tnc: true, // UI only
		File: ''
	}),

	validate: async (values, props) => {
		const { formContent } = props;
		return validation(values, formContent);
	},

	handleSubmit: async (values, { setSubmitting, props }) => {
		const { submitForm, setSubmitStep, theme, hiddenFormData, strapi } = props;
		const isProd = process.env.NODE_ENV === 'production';
		const fallbackValue = (d) => (d ? d : '');
		const LeadSource = `Petition - ${capitalize(theme.interests)}`;

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

		const imageFormData = new FormData();
		imageFormData.append('file', values.File);
		imageFormData.append('upload_preset', 'dev_upload_preset');
		imageFormData.append('resource_type', 'raw');

		setSubmitStep("submitting")

		const submissionURL = await axios
			.post('https://api.cloudinary.com/v1_1/hellocc1002/upload', imageFormData)
			.then(async (res) => {
				const { statusText, data } = res;
				if (statusText === 'OK') {
					return data?.secure_url;
				}
			});

		const formData = {
			...hiddenFormData,
			Email: values?.Email,
			FirstName: values?.Email,
			LastName: values?.LastName,
			MobileCountryCode: values?.MobileCountry,
			MobilePhone: values?.MobilePhone,
			OptIn: true,
			Birthdate: values?.Birthdate,
			CampaignData1__c: values?.name,
			CampaignData2__c: values?.contact,
			CampaignData3__c: values?.message,
			CampaignData4__c: submissionURL,
			UtmMedium: fallbackValue(hiddenFormData.utm_medium),
			UtmSource: fallbackValue(hiddenFormData.utm_source),
			UtmCampaign: fallbackValue(hiddenFormData.utm_campaign),
			UtmContent: fallbackValue(hiddenFormData.utm_content),
			UtmTerm: fallbackValue(hiddenFormData.utm_term),
			CampaignId: campaignId,
			LeadSource: LeadSource,
			[`Petition_Interested_In_${capitalize(theme.interests)}__c`]: true,
			CompletionURL: completionURL
		};
		submitForm(formData, endpointURL);

		setSubmitStep("done")
	},

	displayName: 'SignupForm'
})(EventForm);

const mapStateToProps = ({ signup, hiddenForm, form, theme }) => {
	return {
		signup,
		hiddenFormData: hiddenForm.data,
		isLoading: signup.lastAction === signupActions.SIGN_UP || signup.step === "submitting",
		formContent: form.content,
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
		setSubmitStep: (data) => {
			dispatch({ type: signupActions.SET_STEP, data: data}) // Free text to switch form submit status
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

connect(mapStateToProps, mapDispatchToProps)(EventForm);

export default connect(mapStateToProps, mapDispatchToProps)(MyEnhancedForm);
