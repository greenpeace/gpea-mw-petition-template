import React, { useEffect, useState } from 'react';
import { Form, withFormik } from 'formik';
import { connect } from 'react-redux';
import { Field } from '@components/Field/fields';
import { numberFormat, capitalize } from '@common/utils';
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
  Heading,
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
  } = props;
  //const [birthDateYear, setBirthDateYear] = useState([]);
  const [progressNumber, setProgressNumber] = useState(0);
  const themeInterests = theme.interests;

  // useEffect(() => {
  //   let optionYear = [];
  //   function fetchOptionYear() {
  //     const minYear = 18;
  //     const maxYear = 110;
  //     let nowYear = new Date().getFullYear();
  //     let targetYear = nowYear - maxYear;
  //     for (var i = nowYear - minYear; i >= targetYear; i--) {
  //       optionYear.unshift({ label: i, value: i.toString() });
  //     }
  //     setBirthDateYear(optionYear);
  //   }
  //   fetchOptionYear(optionYear);
  //   initSuggestion();
  // }, []);

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

  //setting additional fileds for formik
  useEffect(() => {
    if (Object.keys(formContent).length > 0) {
      if (formContent.counties) setFieldValue('Counties', '');
      if (formContent.namelist)
        setFieldValue('Namelist', formContent.namelist[0].value);
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
        },
      });
    }
  };

  return (
    <Box py="8" px="4">
      <Stack spacing="4">
        {formContent.signed_number && numberOfResponses && numberOfTarget ? (
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
        ) : null}
        <Box>
          <Heading
            as="h2"
            {...headingProps}
            mb="0"
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
                  handleChange={handleChange}
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

            {/* <Box>
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
            </Box> */}

            {formContent.counties && (
              <Box>
                <FormControl
                  id="Counties"
                  isInvalid={errors.Counties && touched.Counties}
                >
                  <Select
                    onChange={handleChange}
                    fontSize={'16px'}
                    placeholder={formContent.label_counties}
                    size={'lg'}
                  >
                    {formContent.counties.map((d, index) => (
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

            <Box>
              <Flex py="2" direction={{ base: 'row' }} align={'flex-start'}>
                <Box flex={1} mr={2} pt={1}>
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
                    __html: formContent.label_newsletter,
                  }}
                ></Text>
              </Flex>
            </Box>

            {formContent.namelist && (
              <Box>
                <Flex py="2" direction={{ base: 'row' }} align={'flex-start'}>
                  <Box flex={1} mr={2} pt={1}>
                    <Checkbox
                      id="Namelist"
                      name="Namelist"
                      onChange={handleChange}
                      defaultChecked
                      value={formContent.namelist[0].value}
                    />
                  </Box>
                  <Text
                    fontSize="xs"
                    color={'gray.700'}
                    dangerouslySetInnerHTML={{
                      __html: formContent.label_namelist,
                    }}
                  ></Text>
                </Flex>
              </Box>
            )}

            <Box>
              <Button {...OrangeCTA} isLoading={isLoading} type={'submit'}>
                {formContent.submit_text}
              </Button>
            </Box>
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
    Birthdate: '',
  }),

  validate: async (values, props) => {
    const { formContent } = props;
    return validation(values, formContent);
  },

  handleSubmit: async (values, { setSubmitting, props }) => {
    console.log(`handleSubmit`, values, props);
    const { submitForm, theme, hiddenFormData } = props;
    const isProd = process.env.NODE_ENV === 'production';
    const fallbackValue = (d) => (d ? d : '');
    const LeadSource = `Petition - ${capitalize(theme.interests)}`;
    const endPoint = isProd ? theme.EndpointURL : `https://cors-anywhere.small-service.gpeastasia.org/${theme.EndpointURL}`;

    const formData = {
      ...hiddenFormData,
      ...values,
      UtmMedium: fallbackValue(hiddenFormData.utm_medium),
      UtmSource: fallbackValue(hiddenFormData.utm_source),
      UtmCampaign: fallbackValue(hiddenFormData.utm_campaign),
      UtmContent: fallbackValue(hiddenFormData.utm_content),
      UtmTerm: fallbackValue(hiddenFormData.utm_term),
      MobileCountryCode: '',
      CampaignId: isProd ? theme.CampaignId : '7012u000000OxDYAA0',
      LeadSource: LeadSource,
      [`Petition_Interested_In_${capitalize(theme.interests)}__c`]: true,
      CompletionURL: window.location.href ? window.location.href : '',
    };

    if (values.Counties) formData.CampaignData1__c = values.Counties;
    if (values.Namelist) formData.CampaignData2__c = values.Namelist;

    setSubmitting(true);
    submitForm(formData, endPoint);
  },

  displayName: 'SignupForm',
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
              parseInt(form.signupNumbers.tw?.NumberOfContacts),
          ),
    numberOfTarget: form.signupNumbers.tw?.Petition_Signup_Target__c,
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
