import React, { useEffect, useState } from 'react';
import { Form, isFunction, withFormik } from 'formik';
import { connect } from 'react-redux';
import { Field } from '@components/Field/fields';
import { numberFormat, capitalize } from '@common/utils';
import { validation } from './validation';
import Popup from './popup';
import Mailcheck from 'mailcheck';
import * as signupActions from 'store/actions/action-types/signup-actions';
import * as statusActions from 'store/actions/action-types/status-actions';
import * as formActions from 'store/actions/action-types/form-actions';

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
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
import { OrangeCTA } from '@common/styles/components/formStyle';

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

  const [popupOpen, setPopupOpen] = useState(false);
  const [progressNumber, setProgressNumber] = useState(0);
  const [birthDateYear, setBirthDateYear] = useState([]);
  const themeInterests = theme.interests;

  const { FirstName, LastName } = values;
  const popupMsg = { FirstName, LastName };
  const [popupType, setPopupType] = useState('OK');
  const [clearForm, setClearForm] = useState(false);

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
      if (signup.lastAction === signupActions.SIGN_UP_FAILED) {
        setPopupType('FAIL');
      } else {
        setPopupType('OK');
      }
      setPopupOpen(true);
    }
  }, [signup.submitted]);

  const mailSuggestion = (value) => {
    const domains = [
      'me.com',
      'outlook.com',
      'netvigator.com',
      'cloud.com',
      'live.hk',
      'msn.com',
      'gmail.com',
      'hotmail.com',
      'ymail.com',
      'yahoo.com',
      'yahoo.com.tw',
      'yahoo.com.hk',
    ];
    const topLevelDomains = ['com', 'net', 'org'];

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

  useEffect(() => {
    if (!popupOpen && signup.submitted) {
      setWebStatus(false);
      signup.submitted = false;
      console.log(signup.lastAction, clearForm);
      if (signup.lastAction === signupActions.SIGN_UP_SUCCESS) {
        resetForm('notall');
      }
      if (signup.lastAction === signupActions.SIGN_UP_FAILED && clearForm) {
        resetForm('all');
      }
    }
    console.log(values);
  }, [popupOpen]);

  useEffect(() => {
    if (Object.keys(formContent).length > 0) {
      setFieldValue('CampaignData1__c', formContent.campaign_type[0]);
      setFieldValue('CampaignData2__c', formContent.payment_method[0].value);
      setFieldValue('CampaignData3__c', '');
      setFieldValue(
        'CampaignData4__c',
        formContent.contact_time.map((d) => d.value),
      );
    }
  }, [formContent]);

  const resetForm = (resetAll) => {
    values.FirstName = '';
    values.LastName = '';
    values.Email = '';
    values.Phone = '';
    values.Birthdate = '';

    document.getElementById('LastName').value = '';
    document.getElementById('FirstName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('Phone').value = '';
    document.getElementById('Birthdate').value = '';

    if (resetAll === 'all')
      setFieldValue('CampaignData1__c', formContent.campaign_type[0]);
    setFieldValue('CampaignData2__c', formContent.payment_method[0].value);
    setFieldValue('CampaignData3__c', '');
    setFieldValue(
      'CampaignData4__c',
      formContent.contact_time.map((d) => d.value),
    );

    if (resetAll === 'all')
      document.getElementById('CampaignData1__c').value =
        formContent.campaign_type[0];
    document.getElementById('CampaignData2__c').value =
      formContent.payment_method[0].value;
    document.getElementById('CampaignData3__c').value = '';
    [].forEach.call(document.getElementsByName('CampaignData4__c'), (item) => {
      item.checked = true;
    });
  };

  return (
    <Box py="8" px="4">
      <Popup
        popupType={popupType}
        msg={popupMsg}
        isOpen={popupOpen}
        setIsOpen={setPopupOpen}
        setClearForm={setClearForm}
      />
      <Stack spacing="4">
        {/* {numberOfResponses && numberOfTarget ? (
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
        ) : null} */}
        <Box>
          <Heading
            fontSize={'2xl'}
            dangerouslySetInnerHTML={{ __html: formContent.form_header }}
          />
        </Box>
        <Box>
          <Text
            as="p"
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
                  _placeholder={{ fontSize: 16 }}
                  size={'lg'}
                />
                <FormErrorMessage color="red">{errors.Email}</FormErrorMessage>
                {suggestion && (
                  <Box
                    onClick={() => {
                      setFieldValue('Email', suggestion);
                      initSuggestion();
                    }}
                    pt={2}
                    cursor={`pointer`}
                  >
                    <Text fontSize={`sm`} color={`theme.${themeInterests}`}>
                      {formContent.suggestion_message} <b>{suggestion}</b>
                    </Text>
                  </Box>
                )}
              </FormControl>
            </Box>

            <HStack align="flex-end">
              <Box flex={1}>
                <Field
                  errors={errors.Phone}
                  touched={touched.Phone}
                  label={formContent.label_phone}
                  name={'Phone'}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
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
                  fontSize={'16px'}
                  placeholder={formContent.label_year_of_birth}
                  size={'lg'}
                >
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
              <FormControl
                id="CampaignData1__c"
                isInvalid={errors.CampaignData1__c && touched.CampaignData1__c}
              >
                <FormLabel>{formContent.label_campaign_type}</FormLabel>
                {formContent.campaign_type && (
                  <Select
                    onChange={handleChange}
                    fontSize={'16px'}
                    size={'lg'}
                    name="CampaignData1__c"
                  >
                    {formContent.campaign_type.map((d, index) => (
                      <option key={index} value={d}>
                        {d}
                      </option>
                    ))}
                  </Select>
                )}
                <FormErrorMessage color="red">
                  {errors.CampaignData1__c}
                </FormErrorMessage>
              </FormControl>
            </Box>

            <Box>
              <FormControl
                id="CampaignData2__c"
                isInvalid={errors.CampaignData2__c && touched.CampaignData2__c}
              >
                <FormLabel>{formContent.label_payment_method}</FormLabel>
                <Select
                  onChange={handleChange}
                  fontSize={'16px'}
                  size={'lg'}
                  name="CampaignData2__c"
                >
                  {formContent.payment_method &&
                    formContent.payment_method.map((d, index) => (
                      <option key={index} value={d.value}>
                        {d.display}
                      </option>
                    ))}
                </Select>
                <FormErrorMessage color="red">
                  {errors.PaymentMethod}
                </FormErrorMessage>
              </FormControl>
            </Box>

            <Box>
              <FormLabel>{formContent.label_amount}</FormLabel>
              <Field
                errors={errors.CampaignData3__c}
                touched={touched.CampaignData3__c}
                label={formContent.label_amount}
                name={'CampaignData3__c'}
                handleChange={handleChange}
                handleBlur={handleBlur}
                type="number"
              />
            </Box>

            <Box pl="2">
              <FormControl id="ContactTime">
                <Text
                  mb="2"
                  as="p"
                  dangerouslySetInnerHTML={{
                    __html: formContent.label_contact_time,
                  }}
                />
                {formContent.contact_time &&
                  formContent.contact_time.map((d, index) => (
                    <Flex
                      py="1"
                      mx="3"
                      direction={{ base: 'row' }}
                      align={'flex-start'}
                      key={index}
                    >
                      <Box flex={0} mr={2} pt={1}>
                        <Checkbox
                          id={`ContactTime${index}`}
                          name="CampaignData4__c"
                          onChange={handleChange}
                          isChecked={
                            values.CampaignData4__c &&
                            values.CampaignData4__c.includes(d.value)
                          }
                          value={d.value}
                        />
                      </Box>
                      <Text fontSize="sm">{d.display}</Text>
                    </Flex>
                  ))}
              </FormControl>
            </Box>

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
                <Text fontSize="xs" color={'gray.700'}>
                  {formContent.label_newsletter}
                </Text>
              </Flex>
            </Box>

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
  mapPropsToValues: (props) => ({
    Email: '',
    FirstName: '',
    LastName: '',
    Phone: '',
    Birthdate: '',
    OptIn: true,
  }),

  validate: async (values, props) => {
    const { formContent } = props;

    return validation(values, formContent);
  },

  handleSubmit: async (values, { setSubmitting, props }) => {
    const { submitForm, theme, hiddenFormData } = props;
    const fallbackValue = (d) => (d ? d : '');

    const LeadSource = fallbackValue(hiddenFormData.leadsource);

    console.log(values);
    const formData = {
      ...hiddenFormData,
      ...values,
      UtmMedium: fallbackValue(hiddenFormData.utm_medium),
      UtmSource: fallbackValue(hiddenFormData.utm_source),
      UtmCampaign: fallbackValue(hiddenFormData.utm_campaign),
      UtmContent: fallbackValue(hiddenFormData.utm_content),
      UtmTerm: fallbackValue(hiddenFormData.utm_term),
      MobileCountryCode: '886',
      MobilePhone: values.Phone,
      CampaignId:
        process.env.NODE_ENV === 'production'
          ? theme.CampaignId
          : '7012u000000OxDYAA0',
      LeadSource: LeadSource,
      [`Petition_Interested_In_${capitalize(theme.interests)}__c`]: true,
      CompletionURL: window.location.href ? window.location.href : '',
    };
    delete formData.Email;
    delete formData.LastName;
    setSubmitting(true);
    submitForm(formData, theme.EndpointURL);
  },

  displayName: 'DRTVForm',
})(MyForm);

const mapStateToProps = ({ signup, status, hiddenForm, form, theme }) => {
  return {
    signup,
    webStatus: status,
    hiddenFormData: hiddenForm.data,
    isLoading: signup.lastAction === signupActions.SIGN_UP,
    formContent: form.content,
    numberOfResponses: form.signupNumbers.tw?.NumberOfResponses,
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
