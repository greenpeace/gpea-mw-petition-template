import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { Box, Flex } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import ScrollToTargetButton from '@components/ScrollToTargetButton/ScrollToTargetButton';
import formContent from './form';
import SEO from './SEO';
import * as formActions from 'store/actions/action-types/form-actions';
import * as signupActions from 'store/actions/action-types/signup-actions';
import * as themeActions from 'store/actions/action-types/theme-actions';

import heroBannerImage from './images/GP1SUB1C_PressMedia_ed.jpg';

const Content = dynamic(() => import('./Content'));
const Thankyou = dynamic(() => import('./Thankyou'));
const HeroBanner = dynamic(() => import('@components/Banner/hero'));
const ThanksBanner = dynamic(() => import('@components/Banner/thanks'));
const PageContainer = dynamic(() => import('@containers/pageContainer'));
const DonationModule = dynamic(() => import('@components/GP/DonationModule'));
const SignupForm = dynamic(() => import('@components/GP/HKForm'));

function Index() {
  const dispatch = useDispatch();
  const router = useRouter();
  const status = useSelector((state) => state?.status);
  const theme = useSelector((state) => state?.theme);
  const signup = useSelector((state) => state?.signup);
  const { submitted } = status;
  const { FirstName } = signup?.data;

  const [ref, inView] = useInView({
    threshold: 0,
  });
  const mobileForm = useRef(null);

  useEffect(() => {
    dispatch({ type: formActions.SET_FORM, data: formContent }); // set form content from form.json

    if (router.isReady) {
      const { step, donation_module_campaign, headline_prefix, hero_image_desktop, hero_image_mobile } = router.query;
      dispatch({ type: signupActions.SET_STEP, data: step??'default' });
      dispatch({ type: themeActions.SET_PARAMS, data: {
        donation_module_campaign,
        headline_prefix,
        hero_image_desktop,
        hero_image_mobile
      } });
    }
  }, [router]);

  // console.log('theme.params', theme?.params);
  // console.log('signup', signup?.step);

  return (
    <>
      <SEO />


      <>
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
      </>
      <PetitionFooter locale={'HKChinese'} />
      <ScrollToTargetButton target={mobileForm} targetInView={inView} />
    </>
  );
}

export default Index
