import React from 'react';
import { connect } from 'react-redux';
import { Box, Button, Text, Stack } from '@chakra-ui/react';
import { Form, withFormik } from 'formik';
import { Field } from '@components/Field/fields';
import { OrangeCTA } from '@common/styles/components/formStyle';

const ButtonWithMessage = (props) => {
  const {
    formContent: { donate_button, currency },
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    description,
  } = props;

  return (
    <Box>
      <Form onSubmit={handleSubmit}>
        <Box mt={2}>
          <Field
            label={currency}
            name={'Donate'}
            type="number"
            errors={errors.Donate}
            touched={touched.Donate}
            handleChange={handleChange}
            handleBlur={handleBlur}
            size={'lg'}
          />
        </Box>
        <Box pb={6} pt={8}>
          <Text fontSize={'md'}>{description}</Text>
        </Box>
        <Box>
          <Button {...OrangeCTA} type={'submit'}>
            {donate_button}
          </Button>
        </Box>
      </Form>
    </Box>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({
    Donate: '',
  }),

  validate: async (values, props) => {
    const errors = {};
    const { formContent } = props;

    if (!values.Donate) {
      errors.Donate = formContent.empty_data_alert;
    }

    return errors;
  },

  handleSubmit: async (values, { props }) => {
    const { formContent, donateType } = props;
    //
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: 'gaEvent',
      eventCategory: 'donations',
      eventAction: 'form_steps',
      eventLabel: 'form_step:1_amount',
      eventValue: '',
    });
    //
    window.open(
      `${formContent.donateURL}&donate_amt=${donateType}:${values.Donate}`,
    );
  },

  displayName: 'DonateForm',
})(ButtonWithMessage);

const mapStateToProps = ({ form }) => {
  return {
    formContent: form.content,
  };
};

export default connect(mapStateToProps)(MyEnhancedForm);
