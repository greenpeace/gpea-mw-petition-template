import React, { useEffect, useState } from 'react';
import { Form, withFormik } from 'formik';
import { connect } from 'react-redux';
import { Field } from '@components/Field/fields';
import { capitalize, clearURL } from '@common/utils';
import { validation } from './validation';
import Mailcheck from 'mailcheck';
import * as signupActions from 'store/actions/action-types/signup-actions';
import * as statusActions from 'store/actions/action-types/status-actions';
import * as formActions from 'store/actions/action-types/form-actions';
import {
  FormLabel,
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
  const [birthDateYear, setBirthDateYear] = useState([]);
  const [progressNumber, setProgressNumber] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure(true);
  const themeInterests = theme.interests;
  const numberOfChildren = [
    { label: 0, value: 0 },
    { label: 1, value: 1 },
    { label: 2, value: 2 },
    { label: 3, value: 3 },
    { label: 4, value: 4 },
    { label: 5, value: '5個或以上' },
  ];

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
      <Box py={{ base: 6, md: 8 }} px={{ base: 4, md: 6 }}>
        <Stack spacing="4">
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
                      pt={2}
                      pl={2}
                      cursor="pointer"
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
                  <Select onChange={handleChange} value={values.Birthdate}>
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
                  <FormErrorMessage px={2} color="var(--error-900)">
                    {errors.Birthdate}
                  </FormErrorMessage>
                </FormControl>
              </Box>

              <Box>
                <FormLabel fontSize="xs" color={'gray.700'} lineHeight="1.7">
                  參與小朋友數目（如適用）
                </FormLabel>
                <FormControl
                  id="NumberOfChildren"
                  isInvalid={
                    errors.NumberOfChildren && touched.NumberOfChildren
                  }
                >
                  <Select
                    onChange={handleChange}
                    value={values.NumberOfChildren}
                  >
                    {numberOfChildren.map((d) => (
                      <option key={d.value} value={d.value}>
                        {d.label}
                      </option>
                    ))}
                  </Select>
                  <FormErrorMessage px={2} color="var(--error-900)">
                    {errors.Birthdate}
                  </FormErrorMessage>
                </FormControl>
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
    NumberOfChildren: 0,
  }),

  validate: async (values, props) => {
    const { formContent } = props;

    return validation(values, formContent);
  },

  handleSubmit: async (values, { setSubmitting, props }) => {
    const { submitForm, theme, hiddenFormData } = props;
    const isProd = process.env.NODE_ENV === 'production';
    const fallbackValue = (d) => (d ? d : '');
    const LeadSource = `Petition - ${capitalize(theme.interests)}`;
    // TODO: Fix Access-Control-Allow-Origin issue
    const endPoint = isProd ? theme.EndpointURL : process.env.dummyEndpoint;
    const completionURL = await clearURL(
      window?.location.href,
      EXCLUDE_URL_PARAMETERS,
    );

    const formData = {
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
      CampaignData1__c: values.NumberOfChildren,
    };

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
