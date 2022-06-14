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
    values,
    children,
    setShowErrorMessage,
    placeholderContent,
    buttonContent
  } = props;

  useEffect(() => {
    if (signup.submitted) {
      setWebStatus(true);
    }
  }, [signup.submitted]);

  return (
    <Box py={{ base: 6, md: 8 }} mx={'auto'} maxWidth={'520px'}>
      <Form onSubmit={handleSubmit}>
        <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
          <Box flex={1} color={'#000'}>
            <Field
              errors={errors.Password}
              touched={touched.Password}
              label={placeholderContent}
              name={'Password'}
              type={'text'}
              bgColor={'#FFF'}
              _placeholder={{ fontSize: 16 }}
              h={'56px'}
              size={'lg'}
              value={values.Password}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </Box>

          <Box flex={1}>
            <Button {...OrangeCTA} isLoading={isLoading} type={'submit'}>
              {buttonContent}
            </Button>
          </Box>
        </Stack>
      </Form>
      <Box>{children}</Box>
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
    const { setShowVideo, setShowErrorMessage } = props;

    setShowErrorMessage(false);

    const PASSCODE_LIST = PASSCODE.data;
    const getPasscode = PASSCODE_LIST.find(
      (d) => d.toString() === values.Password,
    );
    if (getPasscode) {
      setShowVideo(true);
      setShowErrorMessage(false);
      // Record the passcode
      let code = values.Password;
      window.dataLayer = window.dataLayer || [];

      window.dataLayer.push({
        event: 'gaEvent',
        eventCategory: 'lantau-documentary',
        eventAction: 'verify',
        eventLabel: `${code}`,
      });
    } else {
      setShowErrorMessage(true);
      // Record the passcode
      let code = values.Password;
      window.dataLayer = window.dataLayer || [];

      window.dataLayer.push({
        event: 'gaEvent',
        eventCategory: 'lantau-documentary',
        eventAction: 'reject',
        eventLabel: `${code}`,
      });
    }
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
    },
  };
};

connect(mapStateToProps, mapDispatchToProps)(MyForm);

export default connect(mapStateToProps, mapDispatchToProps)(MyEnhancedForm);
