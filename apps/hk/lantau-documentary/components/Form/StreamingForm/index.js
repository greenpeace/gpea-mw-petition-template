import React, { useEffect } from 'react';
import { Form, withFormik } from 'formik';
import { connect } from 'react-redux';
import { Field } from '@components/Field/fields';
import { validation } from './validation';
import PASSCODE from '../../../passcode.json';
import * as signupActions from 'store/actions/action-types/signup-actions';
import * as statusActions from 'store/actions/action-types/status-actions';
import { Button, Box, Stack } from '@chakra-ui/react';
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
    setWebStatus,
    values
  } = props;

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
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Box flex={1} color={'#000'}>
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
                value={values.Password}
              />
            </Box>

            <Box flex={1}>
              <Button {...OrangeCTA} isLoading={isLoading} type={'submit'}>
                收看紀錄片
              </Button>
            </Box>
          </Stack>
        </Form>
      </Box>
    </Box>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({
    Password: '',
  }),

  validate: async (values) => {
    return validation(values);
  },

  handleSubmit: async (values, { setSubmitting, props }) => {
    const PASSCODE_LIST = PASSCODE.data
    const getPasscode = PASSCODE_LIST.find(d=> d.toString() === values.Password)
    if(getPasscode){
      const {setShowVideo} = props
      setShowVideo(true)
    } else {
    }

    // const { submitForm, theme, hiddenFormData } = props;
    // const isProd = process.env.NODE_ENV === 'production';
    // const fallbackValue = (d) => (d ? d : '');
    // const LeadSource = `Petition - ${capitalize(theme.interests)}`;
    // // TODO: Fix Access-Control-Allow-Origin issue
    // const endPoint = isProd ? theme.EndpointURL : process.env.dummyEndpoint;
    // const completionURL = await clearURL(
    //   window?.location.href,
    //   EXCLUDE_URL_PARAMETERS,
    // );

    // const formData = {
    //   ...hiddenFormData,
    //   ...values,
    //   UtmMedium: fallbackValue(hiddenFormData.utm_medium),
    //   UtmSource: fallbackValue(hiddenFormData.utm_source),
    //   UtmCampaign: fallbackValue(hiddenFormData.utm_campaign),
    //   UtmContent: fallbackValue(hiddenFormData.utm_content),
    //   UtmTerm: fallbackValue(hiddenFormData.utm_term),
    //   CampaignId: isProd ? theme.CampaignId : '7012u000000OxDYAA0',
    //   LeadSource: LeadSource,
    //   [`Petition_Interested_In_${capitalize(theme.interests)}__c`]: true,
    //   CompletionURL: completionURL,
    // };

    // setSubmitting(true);
    // submitForm(formData, endPoint);
  },

  displayName: 'SignupForm',
})(MyForm);

const mapStateToProps = ({ signup, hiddenForm, form, theme }) => {
  return {
    signup,
    hiddenFormData: hiddenForm.data,
    isLoading: signup.lastAction === signupActions.SIGN_UP,
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
    }
  };
};

connect(mapStateToProps, mapDispatchToProps)(MyForm);

export default connect(mapStateToProps, mapDispatchToProps)(MyEnhancedForm);
