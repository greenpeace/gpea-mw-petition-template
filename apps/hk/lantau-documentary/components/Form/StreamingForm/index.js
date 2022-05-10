import React, { useEffect, useState } from 'react';
import { Form, withFormik } from 'formik';
import { connect } from 'react-redux';
import { Field } from '@components/Field/fields';
import { capitalize, clearURL } from '@common/utils';
import { validation } from './validation';
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
  Center,
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
  const themeInterests = theme.interests;

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
      <Box py={{ base: 6, md: 8 }} mx={'auto'} maxWidth={'400px'}>
        <Form onSubmit={handleSubmit}>
          <Box>
            <Stack direction={{base: 'column', md: 'row' }} spacing={4}>
              <Box flex={1}>
                <Field
                  errors={errors.Password}
                  touched={touched.Password}
                  label={'密碼'}
                  name={'Password'}
                  type={'text'}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  bgColor={'#FFF'}
                  h={'56px'}
                />
              </Box>

              <Box flex={1}>
                <Button {...OrangeCTA} isLoading={isLoading} type={'submit'}>
                  收看紀錄片
                </Button>
              </Box>
            </Stack>
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: ({ props }) => ({
    Password: '',
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
