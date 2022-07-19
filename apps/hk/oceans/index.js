import React, { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { Box, Flex } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import {
  Spinner,
  Center,
} from '@chakra-ui/react';
import ScrollToTargetButton from '@components/ScrollToTargetButton/ScrollToTargetButton';
import formContent from './form';
import SEO from './SEO';
import * as formActions from 'store/actions/action-types/form-actions';

import heroBannerImage from './images/GP1SUB1C_PressMedia_ed.jpg';

import Donation from './Donation';
import Content from './Content';
import Thankyou from './Thankyou';

import HeroBanner from '@components/Banner/hero';
import ThanksBanner from '@components/Banner/thanks';
import PageContainer from '@containers/pageContainer';
import DonationModule from '@components/GP/DonationModule';
import SignupForm from '@components/GP/HKForm';

function Index() {
  const [routeReady, setRouteReady] = useState(false);
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
      setRouteReady(true);
    }
  }, [router]);

  // console.log('theme.params', theme?.params);
  // console.log('signup', signup?.step);

  if (!routeReady) {
    return (
      <Center minH={{ base: '380px', md: '500px' }}>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    );
  }

  return (
    <>
      <SEO />
      {signup?.step === 'donation' && (
        <>
          <HeroBanner
            bgImage={theme?.params?.hero_image_desktop??heroBannerImage}
            content={{
              title: `${theme?.params?.headline_prefix??""}請即聯署<br/>將全球 30% 海洋<br/>納入保護區`,
              description: [''],
            }}
          />
          <PageContainer>
            <OverflowWrapper>
              <Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
                <Box flex={1} mt={{ base: 10, sm: 60 }}>
                  <ContentContainer theme={theme}>
                    <Donation />
                  </ContentContainer>
                </Box>
                <Box flex={1} ref={mobileForm}>
                  <FormContainer>
                    <Box ref={ref}>
                      <DonationModule
                        market={theme.Market}
                        language={'zh_HK'}
                        campaign={'oceans'}
                        // campaignId={''}
                        env={'production'}
                      />
                    </Box>
                  </FormContainer>
                </Box>
              </Flex>
            </OverflowWrapper>
          </PageContainer>
        </>
      )}
      {signup?.step === 'default' && (
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
                title: '請即捐款<br/>讓全球30%海洋<br/>納入保護區',
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
      )}
      {signup?.step !== 'donation' && signup?.step !== 'default' && (
        <Box>其他</Box>
      )}
      <PetitionFooter locale={'HKChinese'} />
      <ScrollToTargetButton target={mobileForm} targetInView={inView} />
    </>
  );
}

export default Index;
