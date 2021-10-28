import React, { useEffect, useState } from 'react';
import { Form, withFormik } from 'formik';
import { connect } from 'react-redux';
import { Field } from '@components/Field/fields';
import * as helper from '@common/utils/helper';
import * as signupActions from 'store/actions/action-types/signup-actions';
import * as statusActions from 'store/actions/action-types/status-actions';

import {
  FormControl,
  FormErrorMessage,
  Button,
  Box,
  Flex,
  Text,
  HStack,
  Select,
  Progress,
} from '@chakra-ui/react';

const MyForm = (props) => {
  const {
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setFieldValue,
    setSubmitting,
    submitted,
    values,
    formContent,
    theme,
  } = props;
  const space = 4;
  const [birthDateYear, setBirthDateYear] = useState([]);

  useEffect(() => {
    let optionYear = [];
    async function fetchOptionYear() {
      let nowYear = new Date().getFullYear();
      let targetYear = nowYear - 110;
      for (var i = nowYear - 18; i >= targetYear; i--) {
        await optionYear.push({ label: i, value: i.toString() });
      }
      setBirthDateYear(optionYear);
    }
    fetchOptionYear(optionYear);
  }, []);

  const newsletterButtons = [
    {
      label: formContent.label_yes,
      value: true,
    },
    {
      label: formContent.label_no,
      value: false,
    },
  ];

  return (
    <Form onSubmit={handleSubmit}>
      <Flex direction="column">
        <Box pb={space}>
          <Progress
            value={80}
            borderRadius={4}
            colorScheme={`${theme.ProjectName}`}
          />
          <HStack>
            <Text fontSize={12} color={`theme.${theme.ProjectName}`}>
              {formContent.signed_number}:{' '}
              <Text as="span" fontSize={24} fontWeight={700}>
                4,588{' '}
              </Text>
              / 10,000
            </Text>
          </HStack>
        </Box>

        <Box pb={space} pb={6}>
          <Text as="p">
            <span
              dangerouslySetInnerHTML={{ __html: formContent.form_description }}
            />
          </Text>
        </Box>

        <Box pb={space}>
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

        <Box pb={space}>
          <Field
            errors={errors.LastName}
            touched={touched.LastName}
            label={formContent.label_last_name}
            name={'LastName'}
            type={'text'}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </Box>

        <Box pb={space}>
          <Field
            errors={errors.Email}
            touched={touched.Email}
            label={formContent.label_email}
            name={'Email'}
            type={'email'}
            handleChange={handleChange}
            handleBlur={handleBlur}
          />
        </Box>

        <Box pb={space}>
          <Flex direction={{ base: 'row' }} align={'center'}>
            <Box flex={1} pr={{ base: 0, sm: 12 }}>
              <Text fontSize={'sm'}>{formContent.label_newsletter}</Text>
            </Box>
            <HStack spacing={2}>
              {newsletterButtons.map((d, i) => (
                <Button
                  key={i}
                  bgColor={d.value === values.Newsletter ? '#66cc00' : '#FFF'}
                  color={d.value === values.Newsletter ? '#FFF' : '#000'}
                  variant={`outline`}
                  fontSize={'sm'}
                  onClick={() => setFieldValue('Newsletter', d.value)}
                >
                  {d.label}
                </Button>
              ))}
            </HStack>
          </Flex>
        </Box>

        <HStack align="flex-end">
          <Box pb={space} flex={1}>
            <Field
              errors={errors.Phone}
              touched={touched.Phone}
              label={formContent.label_phone}
              name={'Phone'}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
          </Box>
        </HStack>

        <Box pb={space}>
          <FormControl
            id="Birthdate"
            isInvalid={errors.Birthdate && touched.Birthdate}
          >
            <Select
              placeholder={formContent.select}
              onChange={handleChange}
              fontSize={'sm'}
            >
              {birthDateYear &&
                birthDateYear.map((d) => (
                  <option key={d.value} value={`${d.value}-01-01`}>
                    {d.value}
                  </option>
                ))}
            </Select>
            <FormErrorMessage color="red">{errors.Birthdate}</FormErrorMessage>
          </FormControl>
        </Box>

        <Box flex="1" pt={3} pb={3}>
          <Button
            w="100%"
            isLoading={isSubmitting}
            type="submit"
            height="48px"
            borderRadius="md"
            fontSize="xl"
            color="#FFF"
            bg={`theme.${theme.ProjectName}`}
            _hover={{ bg: 'campaign.climate' }}
          >
            {formContent.submit_text}
          </Button>
        </Box>

        <Box pt={4} pb={4}>
          <Text fontSize="xs" color={'gray.900'}>
            {formContent.form_remind}
          </Text>
        </Box>
      </Flex>
    </Form>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: () => ({
    Email: '',
    FirstName: '',
    LastName: '',
    Phone: '',
    Birthdate: '',
    Newsletter: true,
  }),

  validate: async (values, props) => {
    const { formContent } = props;
    const errors = {};

    if (!values.Email) {
      errors.Email = formContent.empty_data_alert;
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.Email)
    ) {
      errors.Email = formContent.invalid_email_alert;
    }

    if (!values.FirstName) {
      errors.FirstName = formContent.empty_data_alert;
    }

    if (!values.LastName) {
      errors.LastName = formContent.empty_data_alert;
    }

    if (!values.Phone) {
      console.log(`values.Phone-`, values.Phone);
      errors.Phone = formContent.empty_data_alert;
    }

    if (!values.Birthdate) {
      errors.Birthdate = formContent.empty_data_alert;
    }

    if (values.Phone) {
      const phoneReg6 = new RegExp(/^(0|886|\+886)?(9\d{8})$/).test(
        values.Phone,
      );
      const phoneReg7 = new RegExp(/^(0|886|\+886){1}[3-8]-?\d{6,8}$/).test(
        values.Phone,
      );
      const phoneReg8 = new RegExp(/^(0|886|\+886){1}[2]-?\d{8}$/).test(
        values.Phone,
      );

      if (phoneReg6 || phoneReg7 || phoneReg8) {
        return;
      } else {
        errors.Phone = formContent.invalid_format_alert;
      }
    }

    return errors;
  },

  handleSubmit: async (values, { setSubmitting, props }) => {
    const { signup, setStatus, theme } = props;
    const themeData = theme;
    const fallbackValue = (d) => (d ? d : '');
    const hiddenFormData = props.hiddenForm.data;
    const FORM_URL = helper.getPostURL();
    const CAMPAIGN_ID =
      process.env.NODE_ENV === 'production'
        ? helper.getCampaignID()
        : '7012u000000OxDYAA0';
    const getHiddenFields = document.querySelectorAll(
      'input[value][type="hidden"]:not([value=""])',
    );
    const hiddenFormValue = [...getHiddenFields].reduce(
      (obj, e) => ({ ...obj, [e.name]: e.value }),
      {},
    );

    const formData = {
      ...hiddenFormValue,
      ...values,
      // TODO: Match values from hidden from
      UtmMedium: fallbackValue(hiddenFormData.utm_medium),
      UtmSource: fallbackValue(hiddenFormData.utm_source),
      UtmCampaign: fallbackValue(hiddenFormData.utm_campaign),
      UtmContent: fallbackValue(hiddenFormData.utm_content),
      UtmTerm: fallbackValue(hiddenFormData.utm_term),
      CampaignId: themeData.CampaignId,
    };

    alert(JSON.stringify(formData, null, '\t'));

    // FAKE SUBMIT
    signup(formData);
    setStatus(true);
  },

  displayName: 'SignupForm',
})(MyForm);

const mapStateToProps = ({ user, signup, hiddenForm, form, theme }) => {
  return {
    user,
    signup,
    hiddenForm,
    formContent: form.content,
    theme: theme.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signup: (data) => {
      dispatch({ type: signupActions.SIGN_UP, data });
    },
    setStatus: (bol) => {
      dispatch({ type: statusActions.SET_FORM_SUBMITTED, data: bol });
    },
  };
};

connect(null, mapDispatchToProps)(MyForm);

export default connect(mapStateToProps, mapDispatchToProps)(MyEnhancedForm);
