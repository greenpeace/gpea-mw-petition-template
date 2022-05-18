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
    setShowErrorMessage
  } = props;

  useEffect(() => {
    if (signup.submitted) {
      setWebStatus(true);
    }
  }, [signup.submitted]);

  return (
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
        {children}
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
    const {setShowVideo, setShowErrorMessage} = props

    setShowErrorMessage(false);

    const PASSCODE_LIST = PASSCODE.data
    const getPasscode = PASSCODE_LIST.find(d=> d.toString() === values.Password)
    if(getPasscode){
      setShowVideo(true)
      setShowErrorMessage(false);
    } else {
      setShowErrorMessage(true);
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
    }
  };
};

connect(mapStateToProps, mapDispatchToProps)(MyForm);

export default connect(mapStateToProps, mapDispatchToProps)(MyEnhancedForm);
