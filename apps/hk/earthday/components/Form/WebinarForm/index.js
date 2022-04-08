import React, { useEffect, useState } from 'react';
import { Form, withFormik } from 'formik';
import { connect } from 'react-redux';
import { Field } from '@components/Field/fields';
import { numberFormat, capitalize, clearURL } from '@common/utils';
import { validation } from './validation';
import Mailcheck from 'mailcheck';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import * as signupActions from 'store/actions/action-types/signup-actions';
import * as statusActions from 'store/actions/action-types/status-actions';
import * as formActions from 'store/actions/action-types/form-actions';
import {
  FormControl,
  FormErrorMessage,
  Button,
  Box,
  Text,
  HStack,
  Stack,
  Select,
  Input,
  Heading,
  useDisclosure,
  Flex,
  Textarea,
} from '@chakra-ui/react';
import {
  MAIL_DOMAINS,
  MAIL_TOP_DOMAINS,
  EXCLUDE_URL_PARAMETERS,
} from '@common/constants';
import { OrangeCTA } from '@common/styles/components/formStyle';
import {
  headingProps,
  paragraphProps,
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
    formData,
  } = props;
  const [birthDateYear, setBirthDateYear] = useState([]);
  const [progressNumber, setProgressNumber] = useState(0);
  const themeInterests = theme.interests;

  const handleEncrypt = (content) => {
    const AES_KEY = '@greenpeace12345'; //16 characters
    const AES_IV = 'abcdef0123456789'; //16 characters
    const key = CryptoJS.enc.Utf8.parse(AES_KEY);
    const iv = CryptoJS.enc.Utf8.parse(AES_IV);

    const CONTENT = CryptoJS.enc.Utf8.parse(content);

    let encrypted = CryptoJS.AES.encrypt(CONTENT, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    return encrypted.toString();
  };

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

  useEffect(async () => {
    if (signup.submitted) {
      setWebStatus(true);
    }

    if (signup.submitted) {
      const ciphertext = await handleEncrypt(values.Email);

      const gSheetFormData = [
        {
          Timestamp: Date.now(),
          Id: ciphertext,
          FirstName: values.FirstName,
          Thoughts: values.Thoughts,
          Status: 'Pending',
          Highlighted: 'FALSE',
          Commitment1: formData.includes(0),
          Commitment2: formData.includes(1),
          Commitment3: formData.includes(2),
        },
      ];

      console.log('gSheetFormData-', gSheetFormData);

      axios
        .post(
          `https://gsheet-toolkit.small-service.gpeastasia.org/v1/db/climate-commitment`,
          gSheetFormData,
          {
            headers: {
              'content-type': 'application/json',
            },
          },
        )
        .then(function (res) {
          return res;
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }, [signup.submitted]);

  useEffect(() => {
    const selectForm = document.forms['mc-form'];
    const documentFormsArray = Array.from(selectForm);
    if (documentFormsArray) {
      documentFormsArray.map((data) => {
        if (!data.defaultValue) {
          return;
        }

        if (data.name === 'MobilePhone') {
          setFieldValue('MobileCountryCode', data.defaultValue?.split(' ')[0]);
          setFieldValue('MobilePhone', data.defaultValue?.split(' ')[1]);
          return;
        }

        if (data.name === 'Birthdate') {
          setFieldValue(
            'Birthdate',
            `${data.defaultValue?.split('/')[2].substring(0, 4)}-01-01`,
          );
          return;
        }

        setFieldValue(data.name, data.defaultValue);
      });
    }
  }, []);

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
        },
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
      <Box py={{ base: 4, md: 8 }} px={{ base: 0, md: 6 }}>
        <Stack spacing="4">
          {numberOfResponses && numberOfTarget ? (
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
                  {/* {formContent.signed_number}:{' '} */}
                  {/* <Text as="span" fontSize={'2xl'} fontWeight="bold">
                    {numberFormat(numberOfResponses)}
                  </Text>{' '}
                  / {numberFormat(numberOfTarget)} */}
                  距離目標尚餘
                  <Text as="span" mx="1" fontSize={'2xl'} fontWeight="bold">
                    {100 -
                      Math.round(
                        (100 * numberOfResponses) / parseInt(numberOfTarget),
                      )}
                  </Text>
                  %
                </Text>
              </Box>
            </Box>
          ) : null}
          <Box>
            <Heading
              as="h2"
              {...headingProps}
              mb="0"
              color={`theme.${themeInterests}`}
              dangerouslySetInnerHTML={{ __html: formContent.form_header }}
            />
          </Box>
          <Box>
            <Text
              as="p"
              {...paragraphProps}
              mb="0"
              dangerouslySetInnerHTML={{ __html: formContent.form_description }}
            />
          </Box>
          <Form onSubmit={handleSubmit}>
            <Stack spacing="4">
              <Box>
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
                <Text
                  fontSize={{ base: 'sm', md: 'md' }}
                  py={2}
                  color={'gray.700'}
                >
                  你的名字將會出現在電子證書上
                </Text>
              </Box>

              <Box flex={1}>
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
                    _placeholder={{ fontSize: 16 }}
                    size={'lg'}
                  />
                  <FormErrorMessage color="red">
                    {errors.Email}
                  </FormErrorMessage>
                  {suggestion && (
                    <Box
                      onClick={() => {
                        setFieldValue('Email', suggestion);
                        initSuggestion();
                      }}
                      pt={2}
                      pl={2}
                      cursor={`pointer`}
                    >
                      <Text fontSize={`sm`} color={`theme.${themeInterests}`}>
                        {formContent.suggestion_message} <b>{suggestion}</b>
                      </Text>
                    </Box>
                  )}
                </FormControl>
              </Box>

              <Box>
                <HStack align="flex-start">
                  <Box>
                    <FormControl id="mobileCountryCode">
                      <Select
                        name="MobileCountryCode"
                        onChange={handleChange}
                        fontSize={'16px'}
                        size={'lg'}
                        value={values.mobileCountry}
                      >
                        {(formContent.mobile_country_code || []).map((d) => (
                          <option key={d.value} value={d.value}>
                            {d.label}
                          </option>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                  <Box flex={1}>
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
                    fontSize={'16px'}
                    size={'lg'}
                    value={values.Birthdate}
                  >
                    <option value={''}>
                      {formContent.label_year_of_birth}
                    </option>
                    {birthDateYear &&
                      birthDateYear.map((d) => (
                        <option key={d.value} value={`${d.value}-01-01`}>
                          {d.value}
                        </option>
                      ))}
                  </Select>
                  <FormErrorMessage color="red">
                    {errors.Birthdate}
                  </FormErrorMessage>
                </FormControl>
              </Box>

              <Box>
                <Stack direction={`row`}>
                  <Box flex={1}>
                    <FormControl
                      id={'Thoughts'}
                      isInvalid={errors.Thoughts && touched.Thoughts}
                    >
                      <Textarea
                        label={formContent.Thoughts}
                        name={'Thoughts'}
                        placeholder={'你有為地球減碳的鼓勵字句嗎？'}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      />
                      <Text
                        fontSize={{ base: 'sm', md: 'md' }}
                        py={2}
                        color={'gray.700'}
                      >
                        你的鼓勵字句將有機會出現在「我做得到」！
                      </Text>
                      <FormErrorMessage color="red">
                        {errors.Thoughts}
                      </FormErrorMessage>
                    </FormControl>
                  </Box>
                </Stack>
              </Box>

              <Box>
                <Button {...OrangeCTA} isLoading={isLoading} type={'submit'}>
                  {formContent.submit_text}
                </Button>
              </Box>

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
            </Stack>
          </Form>
        </Stack>
      </Box>
    </Box>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({
    Email: '',
    FirstName: '',
    LastName: '',
    MobileCountryCode: '852',
    MobilePhone: '',
    OptIn: true,
    Birthdate: '',
    Thoughts: '',
  }),

  validate: async (values, props) => {
    const { formContent } = props;

    return validation(values, formContent);
  },

  handleSubmit: async (values, { setSubmitting, props }) => {
    const { submitForm, theme, hiddenFormData, formData } = props;
    const isProd = process.env.NODE_ENV === 'production';
    const fallbackValue = (d) => (d ? d : '');
    const LeadSource = `Petition - ${capitalize(theme.interests)}`;
    // TODO: Fix Access-Control-Allow-Origin issue
    const endPoint = isProd ? theme.EndpointURL : process.env.dummyEndpoint;
    const completionURL = await clearURL(
      window?.location.href,
      EXCLUDE_URL_PARAMETERS,
    );

    const submitData = {
      ...hiddenFormData,
      ...values,
      UtmMedium: fallbackValue(hiddenFormData.utm_medium),
      UtmSource: fallbackValue(hiddenFormData.utm_source),
      UtmCampaign: fallbackValue(hiddenFormData.utm_campaign),
      UtmContent: fallbackValue(hiddenFormData.utm_content),
      UtmTerm: fallbackValue(hiddenFormData.utm_term),
      CampaignId: isProd ? theme.CampaignId : '7012u000000OxDYAA0',
      LeadSource: LeadSource,
      [`Petition_Interested_In_${capitalize(theme.interests)}__c`]: true,
      CompletionURL: completionURL,
      CampaignData1__c: formData.includes(0),
      CampaignData2__c: formData.includes(1),
      CampaignData3__c: formData.includes(2),
    };

    setSubmitting(true);
    submitForm(submitData, endPoint);
  },

  displayName: 'SignupForm',
})(MyForm);

const mapStateToProps = ({ signup, hiddenForm, form, theme, status }) => {
  return {
    signup,
    hiddenFormData: hiddenForm.data,
    isLoading: signup.lastAction === signupActions.SIGN_UP,
    formContent: form.content,
    formData: form.data,
    numberOfResponses: Math.max(
      parseInt(form.signupNumbers.hk?.NumberOfResponses),
      parseInt(form.signupNumbers.hk?.NumberOfLeads) +
        parseInt(form.signupNumbers.hk?.NumberOfContacts),
    ),
    numberOfTarget: form.signupNumbers.hk?.Petition_Signup_Target__c,
    theme: theme.data,
    suggestion: form.suggestion,
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
    },
  };
};

connect(mapStateToProps, mapDispatchToProps)(MyForm);

export default connect(mapStateToProps, mapDispatchToProps)(MyEnhancedForm);
