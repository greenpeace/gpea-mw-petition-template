import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Box, Flex } from '@chakra-ui/react';
import ScrollToTargetButton from '@components/ScrollToTargetButton/ScrollToTargetButton';

import formContent from './form';
import SEO from './SEO';

import * as formActions from 'store/actions/action-types/form-actions';

import heroBannerImage from './images/GP1SUB1C_PressMedia_ed.jpg';

const Content = dynamic(() => import('./Content'));
const Thankyou = dynamic(() => import('./Thankyou'));
const HeroBanner = dynamic(() => import('@components/Banner/hero'));
const ThanksBanner = dynamic(() => import('@components/Banner/thanks'));
const PageContainer = dynamic(() => import('@containers/pageContainer'));
const DonationModule = dynamic(() => import('@components/GP/DonationModule'));
const SignupForm = dynamic(() => import('@components/GP/HKForm'));

function Index({ status, theme, setFormContent, signup, setHiddenForm }) {
  const { submitted } = status;
  const { FirstName } = signup;

  const [ref, inView] = useInView({
    threshold: 0,
  });
  const mobileForm = useRef(null);

  useEffect(() => {
    setFormContent(formContent);
  }, []);

  useEffect(() => {
    let FormObj = {};
    const selectForm = document.forms['mc-form'];
    const documentFormsArray = Array.from(selectForm);
    if (documentFormsArray) {
      documentFormsArray.map((data) => {
        if (!data.defaultValue) {
          return;
        }

        FormObj[`${data.name}`] = data.defaultValue??"";

        return

        // if (data.name === 'MobilePhone') {
        //   setFieldValue('MobileCountryCode', data.defaultValue?.split(' ')[0]);
        //   setFieldValue('MobilePhone', data.defaultValue?.split(' ')[1]);
        //   return;
        // }

        // if (data.name === 'Birthdate') {
        //   setFieldValue(
        //     'Birthdate',
        //     `${data.defaultValue?.split('/')[2].substring(0, 4)}-01-01`,
        //   );
        //   return;
        // }

        // setFieldValue(data.name, data.defaultValue);

        // console.log('data.name', data.name)
        // console.log('data.defaultValue', data.defaultValue)
      });

      console.log('FormObj-',FormObj)
    }
  }, []);

  return (
    <>
      <SEO />
      {submitted ? (
        <ThanksBanner
          bgImage={heroBannerImage}
          content={{
            title: `${
              FirstName ? FirstName : '綠色和平支持者'
            }，感謝您加入守護海洋行列！`,
            description: ['為海洋多走一步，捐助支持保護海洋項目。'],
          }}
        />
      ) : (
        <HeroBanner
          bgImage={heroBannerImage}
          content={{
            title: '請即聯署<br/>將全球 30% 海洋<br/>納入保護區',
            description: [''],
          }}
        />
      )}
      <PageContainer>
        <OverflowWrapper>
          <Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
            <Box flex={1} mt={{ base: 10, sm: 60 }}>
              <ContentContainer theme={theme}>
                {submitted ? <Thankyou /> : <Content />}
              </ContentContainer>
            </Box>
            <Box flex={1} ref={mobileForm}>
              <FormContainer>
                <Box ref={ref}>
                  {submitted ? (
                    <DonationModule
                      market={theme.Market}
                      language={'zh_HK'}
                      campaign={'oceans'}
                      // campaignId={''}
                      env={'production'}
                    />
                  ) : (
                    <SignupForm />
                  )}
                </Box>
              </FormContainer>
            </Box>
          </Flex>
        </OverflowWrapper>
      </PageContainer>
      <PetitionFooter locale={'HKChinese'} />
      <ScrollToTargetButton target={mobileForm} targetInView={inView} />
    </>
  );
}

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormContent: (data) => {
      dispatch({ type: formActions.SET_FORM, data });
    },
    setHiddenForm: (value) => {
      dispatch({ type: hiddenFormActions.SET_HIDDEN_FORM, data: value });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
