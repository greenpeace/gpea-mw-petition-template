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
import SignupForm from '@components/GP/HKForm';
import ScrollToTargetButton from '@components/ScrollToTargetButton/ScrollToTargetButton';
// Import Contents
import Donation from './Donation';
import Content from './Content';
import Thankyou from './Thankyou';

import formContent from './form';
import SEO from './SEO';
// Import static
import heroBannerImage from './images/GP1SUB1C_PressMedia_ed.jpg';

function Index() {
  const dispatch = useDispatch();
  const signup = useSelector((state) => state?.signup);
  const strapi = useSelector((state) => state?.theme?.strapi);
  const { step } = signup;
  const submitted = useSelector((state) => state?.status?.submitted);
  const pageType = strapi?.page_type?.data?.attributes?.name

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
          if (pageType.toLowerCase() === 'donation') {
            return (
              <HeroBanner
                defaultImage={strapi?.contentHero?.desktopImageURL ?? heroBannerImage}
                content={{
                  title: strapi?.contentHero?.richContent,
                  description: [''],
                }}
              />
            );
          } else {
            return submitted ? (
              <ThanksBanner
                defaultImage={
                  strapi?.thankyouHero?.desktopImageURL ?? heroBannerImage
                }
                content={{
                  title: strapi?.thankyouHero?.richContent,
                  description: [''],
                }}
              />
            ) : (
              <HeroBanner
                defaultImage={strapi?.contentHero?.desktopImageURL ?? heroBannerImage}
                content={{
                  title: strapi?.contentHero?.richContent,
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
                  if (pageType.toLowerCase() === 'donation') {
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
                    if (pageType.toLowerCase() === 'donation') {
                      return (
                        <DonationModule
                          market={strapi?.market?.data?.attributes?.market === 'Hong Kong' ? 'HK' : 'TW'}
                          language={strapi?.donationModuleLanguage}
                          campaign={strapi?.donationModuleCampaign}
                          env={strapi?.donationModuleEnv}
                        />
                      );
                    } else {
                      return submitted ? (
                        <DonationModule
                           market={strapi?.market?.data?.attributes?.market === 'Hong Kong' ? 'HK' : 'TW'}
                          language={strapi?.donationModuleLanguage}
                          campaign={strapi?.donationModuleCampaign}
                          env={strapi?.donationModuleEnv}
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
