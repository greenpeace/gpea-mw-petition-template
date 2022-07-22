import React, { useEffect, useRef } from 'react';
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

import HeroBanner from '@components/Banner/hero';
import ThanksBanner from '@components/Banner/thanks';
import PageContainer from '@containers/pageContainer';
import DonationModule from '@components/GP/DonationModule';
import SignupForm from '@components/GP/HKForm';
// Import Contents
import Donation from './Donation';
import Content from './Content';
import Thankyou from './Thankyou';
// Import Images
import heroBannerImage from './images/GP1SUB1C_PressMedia_ed.jpg';

function Index() {
  const dispatch = useDispatch();
  const signup = useSelector((state) => state?.signup);
  const { step } = signup;
  const submitted = useSelector((state) => state?.status?.submitted);
  const theme = useSelector((state) => state?.theme);

  const [ref, inView] = useInView({
    threshold: 0,
  });
  const mobileForm = useRef(null);

  useEffect(() => {
    dispatch({ type: formActions.SET_FORM, data: formContent }); // set form content from form.json
  }, [dispatch]);

  return (
    <>
      <SEO />
      <Box>
        {(() => {
          if (step === 'donation') {
            return (
              <HeroBanner
                bgImage={theme?.params?.hero_image_desktop ?? heroBannerImage}
                content={{
                  title: `${
                    theme?.params?.headline_prefix ?? ''
                  }請即聯署<br/>將全球 30% 海洋<br/>納入保護區`,
                  description: [''],
                }}
              />
            );
          } else {
            return submitted ? (
              <ThanksBanner
                bgImage={theme?.params?.hero_image_desktop ?? heroBannerImage}
                content={{
                  title: `${
                    signup?.data?.FirstName
                      ? signup?.data?.FirstName
                      : '綠色和平支持者'
                  }，感謝您加入守護海洋行列！`,
                  description: ['為海洋多走一步，捐助支持保護海洋項目。'],
                }}
              />
            ) : (
              <HeroBanner
                bgImage={theme?.params?.hero_image_desktop ?? heroBannerImage}
                content={{
                  title: `${
                    theme?.params?.headline_prefix ?? ''
                  }請即聯署<br/>將全球 30% 海洋<br/>納入保護區`,
                  description: [''],
                }}
              />
            );
          }
        })()}
      </Box>
      <PageContainer>
        <OverflowWrapper>
          <Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
            <Box flex={1} mt={{ base: 10, sm: 60 }}>
              <ContentContainer theme={theme}>
                {(() => {
                  if (step === 'donation') {
                    return <Donation />;
                  } else {
                    return submitted ? <Thankyou /> : <Content />;
                  }
                })()}
              </ContentContainer>
            </Box>
            <Box flex={1} ref={mobileForm}>
              <FormContainer>
                <Box ref={ref}>
                  {(() => {
                    if (step === 'donation') {
                      return (
                        <DonationModule
                          market={'HK'}
                          language={'zh_HK'}
                          campaign={
                            theme?.params?.donation_module_campaign ?? 'oceans'
                          }
                          // campaignId={''}
                          env={'production'}
                        />
                      );
                    } else {
                      return submitted ? (
                        <DonationModule
                          market={'HK'}
                          language={'zh_HK'}
                          campaign={
                            theme?.params?.donation_module_campaign ?? 'oceans'
                          }
                          // campaignId={''}
                          env={'production'}
                        />
                      ) : (
                        <SignupForm />
                      );
                    }
                  })()}
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

export default Index;
