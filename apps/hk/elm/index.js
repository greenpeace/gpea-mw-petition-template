import React, { useEffect, useRef, useState } from 'react';
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
import { getUrlParams } from '@common/utils/helper';

import heroBannerImage from './images/DJI_0457_r_c.jpg';

const Content = dynamic(() => import('./Content'));
const Thankyou = dynamic(() => import('./Thankyou'));

const HeroBanner = dynamic(() => import('@components/Banner/hero'));
const ThanksBanner = dynamic(() => import('@components/Banner/thanks'));
const PageContainer = dynamic(() => import('@containers/pageContainer'));
const DonationModule = dynamic(() => import('@components/GP/DonationModule'));
const SignupForm = dynamic(() => import('@components/GP/HKForm'));

function Index({ status, theme, setFormContent, signup }) {
  const [utmSource, setUtmSource] = useState('');
  const { submitted } = status;
  const { FirstName } = signup;
  const scrollToRef = (ref) =>
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const mobileForm = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  useEffect(() => {
    setFormContent(formContent);
  }, []);

  useEffect(() => {
    const params = getUrlParams();
    if (params.utm_source) {
      setUtmSource(params.utm_source);
    }
  }, []);

  return (
    <>
      <SEO />
      <Box>
        {submitted ? (
          <ThanksBanner
            bgImage={heroBannerImage}
            content={{
              title: `${
                FirstName ? FirstName : '綠色和平支持者'
              }，感謝您加入守護大嶼行列！`,
              description: [
                '現以每月$200捐款支持堅守大嶼工作，即可獲得一面「堅守大嶼」旗幟及2次「環保手作工作坊」的機會。',
              ],
            }}
            // removeMask="true"
          ></ThanksBanner>
        ) : (
          <HeroBanner
            bgImage={heroBannerImage}
            content={{
              title: '請即聯署<br/>要求政府撤回<br/>明日大嶼填海計劃',

            }}
            // removeMask="true"
          ></HeroBanner>
        )}
      </Box>
      <PageContainer>
        <OverflowWrapper>
          <Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
            <Box flex={1} mt={{ base: 10, sm: 60 }}>
              <ContentContainer theme={theme}>
                {submitted ? <Thankyou /> : <Content />}
              </ContentContainer>
            </Box>
            <Box flex={1} ref={mobileForm}>
              {submitted ? (
                utmSource != 'dd' ? (
                  <FormContainer>
                    <Box ref={ref}>
                      <DonationModule
                        market={theme.Market}
                        language={'zh_HK'}
                        campaign={'elm'}
                        // campaignId={''}
                        env={'production'}
                      />
                    </Box>
                  </FormContainer>
                ) : (
                  <Box h="40px" />
                )
              ) : (
                <FormContainer>
                  <Box ref={ref}>
                    <SignupForm />
                  </Box>
                </FormContainer>
              )}
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
