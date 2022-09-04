import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as formActions from 'store/actions/action-types/form-actions';
// Import library
import { useInView } from 'react-intersection-observer';
import { Box, Flex } from '@chakra-ui/react';
// Import custom containers
import PageContainer from '@containers/pageContainer';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
// Import custom components
import HeroBanner from '@components/ResponsiveBanner/hero';
import ThanksBanner from '@components/ResponsiveBanner/thanks';
import DonationModule from '@components/GP/DonationModule';
import SignupForm from '@components/GP/KRForm';
import ScrollToTargetButton from '@components/ScrollToTargetButton/ScrollToTargetButton';
// Import Contents
import Donation from './Donation';
import Content from './Content';
import Thankyou from './Thankyou';

import formContent from './form';
import SEO from './SEO';
// Import static
import heroBannerImage from './images/GP0STSX96_PressMedia_ed.jpg';

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
                  }지금 가입하세요<br/>전 세계 바다의 30%가 보호 구역에<br/>포함됩니다.`,
                  description: [''],
                }}
              />
            );
          } else {
            return submitted ? (
              <ThanksBanner
                defaultImage={
                  theme?.params?.hero_image_desktop ?? heroBannerImage
                }
                content={{
                  title: `(${
                    signup?.data?.LastName
                      ? signup?.data?.LastName
                      : '그린피스 서포터즈'
                  })님, 청원에 함께해 주셔서 감사합니다.`,
                  //description: ['바다를 위해 한 걸음 더 나아가 해양 보존 프로젝트를 지원하기 위해 기부합니다.'],
                }}
              />
            ) : (
              <HeroBanner
                defaultImage={
                  theme?.params?.hero_image_desktop ?? heroBannerImage
                }
                content={{
                  title:
                    `${
                      theme?.params?.headline_prefix
                        ? theme?.params?.headline_prefix + '<br/>'
                        : ''
                    }` +
                    '후쿠시마 오염수 <br/>해양 방류 최종 결정,<br/>지금 행동해야 합니다.',
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
              <ContentContainer>
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
                    // return (
                    //   <DonationModule
                    //     market={'kr'}
                    //     language={'ko_KR'}
                    //     // campaign={
                    //     //   theme?.params?.donation_module_campaign ?? 'oceans'
                    //     // }
                    //     campaign={'General'}
                    //     // campaignId={''}
                    //     //FIXME: 추후 production으로 변경 필요
                    //     env={'full'}
                    //   />
                    // );
                    if (step === 'donation') {
                      return (
                        <DonationModule
                          market={'kr'}
                          language={'ko_KR'}
                          campaign={
                            theme?.params?.donation_module_campaign ?? 'General'
                          }
                          // campaignId={''}
                          //FIXME: 추후 production으로 변경 필요
                          env={'full'}
                        />
                      );
                    } else {
                      return submitted ? (
                        <DonationModule
                          market={'kr'}
                          language={'ko_KR'}
                          campaign={
                            theme?.params?.donation_module_campaign ?? 'General'
                          }
                          // campaignId={''}
                          env={'full'}
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
      <PetitionFooter locale={'Korean'} />
      <ScrollToTargetButton target={mobileForm} targetInView={inView} />
    </>
  );
}

export default Index;
