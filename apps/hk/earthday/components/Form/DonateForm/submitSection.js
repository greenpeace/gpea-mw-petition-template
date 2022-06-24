import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Box, Button, Text } from '@chakra-ui/react';
import { Form, withFormik } from 'formik';
import { Field } from '@components/Field/fields';
import { OrangeCTA } from '@common/styles/components/formStyle';

const SubmitSection = (props) => {
  const {
    formContent: { donateURL, donate_button, currency },
    handleChange,
    handleBlur,
    handleSubmit,
    touched,
    errors,
    description,
    amount,
    submitType,
    donateType,
  } = props;

  const [isCustomPrice, setIsCustomPrice] = useState(submitType === 'other');

  const targetDonateURL = donateURL;

  const handleOpenLink = () => {
    //
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: 'gaEvent',
      eventCategory: 'donations',
      eventAction: 'form_steps',
      eventLabel: 'form_step:1_amount',
    });
    //
    window.open(`${targetDonateURL}&donate_amt=${donateType}:${amount}`);
  };

  useEffect(() => {
    submitType === 'other' ? setIsCustomPrice(true) : setIsCustomPrice(false);
  }, [submitType]);

  return (
    <Box>
      {isCustomPrice ? (
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
          <Box py={6}>
            <Text fontSize={'md'}>{description}</Text>
          </Box>
          <Box>
            <Button {...OrangeCTA} type={'submit'}>
              {donate_button}
            </Button>
          </Box>
        </Form>
      ) : (
        <Box>
          <Box py={6}>
            <Text fontSize={'md'}>{description}</Text>
          </Box>
          <Box>
            <Button {...OrangeCTA} onClick={handleOpenLink}>
              {donate_button}
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({
    Donate: '',
  }),

  validate: async (values, props) => {
    const errors = {};
    const { formContent, donateType } = props;

    // Set error if empty value
    if (!values.Donate) {
      errors.Donate = formContent.empty_data_alert;
    }

    // Check if amount config available
    const donate_amount = parseInt(values.Donate);
    const min_amount_monthly_amount = parseInt(formContent.min_amount_monthly);
    const min_amount_oneoff_amount = parseInt(formContent.min_amount_oneoff);
    // Set error if value less than requirement
    if (
      formContent.min_amount_monthly &&
      formContent.min_amount_oneoff &&
      formContent.min_amount_alert
    ) {
      if (donateType === 'monthly') {
        if (donate_amount <= min_amount_monthly_amount) {
          errors.Donate =
            formContent.min_amount_alert + formContent.min_amount_monthly;
        }
      } else if (donateType === 'single') {
        if (donate_amount <= min_amount_oneoff_amount) {
          errors.Donate =
            formContent.min_amount_alert + formContent.min_amount_oneoff;
        }
      }
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
    });
    //
    window.open(
      `${formContent.donateURL}&donate_amt=${donateType}:${values.Donate}`,
    );
  },

  displayName: 'DonateForm',
})(SubmitSection);

const mapStateToProps = ({ form }) => {
  return {
    formContent: form.content,
  };
};

export default connect(mapStateToProps)(MyEnhancedForm);
