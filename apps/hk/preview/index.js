import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import * as formActions from 'store/actions/action-types/form-actions';
import * as themeActions from 'store/actions/action-types/theme-actions';
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

function Index() {
  const dispatch = useDispatch();
  const router = useRouter();
  const strapi = useSelector((state) => state?.theme?.strapi);
  const submitted = useSelector((state) => state?.status?.submitted);
  const pageType = strapi?.page_type?.data?.attributes?.name;

  const [ref, inView] = useInView({
    threshold: 0,
  });
  const FormRef = useRef(null);

  useEffect(() => {
    dispatch({ type: formActions.SET_FORM, data: formContent }); // set form content from form.json
  }, [dispatch]);

  useEffect(
    async () => {
      if (router?.isReady) {
        const envProjectMarket = process.env.projectMarket;
        const { preview } = router?.query;
        const endpoint = 'https://strapi.small-service.gpeastasia.org/api'
        const res = await fetch(
          `${endpoint}/pages?filters[market][slug]=${envProjectMarket}&filters[campaign]=${preview}&populate=*`,
        ).then((response) => response);
        const themes = await res.json();
        const theme = themes?.data[0] ?? {};

        dispatch({
          type: themeActions.SET_STRAPI_DATA,
          data: theme?.attributes,
        });
      }
    },
    [router],
  );
  
  return (
    <>
      <SEO />
      <Box>
        {(() => {
          if (pageType?.toLowerCase() === 'donation') {
            return (
              <HeroBanner
                defaultImage={
                  strapi?.contentHero?.desktopImageURL
                }
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
                  strapi?.thankyouHero?.desktopImageURL
                }
                content={{
                  title: strapi?.thankyouHero?.richContent,
                  description: [''],
                }}
              />
            ) : (
              <HeroBanner
                defaultImage={
                  strapi?.contentHero?.desktopImageURL
                }
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
                  if (pageType?.toLowerCase() === 'donation') {
                    return <Donation />;
                  } else {
                    return submitted ? <Thankyou /> : <Content />;
                  }
                })()}
              </ContentContainer>
            </Box>
            <Box flex={1} ref={FormRef}>
              <FormContainer>
                <Box ref={ref}>
                  {(() => {
                    if (pageType?.toLowerCase() === 'donation' || submitted) {
                      return (
                        <DonationModule
                          market={
                            strapi?.market?.data?.attributes?.market ===
                            'Hong Kong'
                              ? 'HK'
                              : 'TW'
                          }
                          language={strapi?.donationModuleLanguage}
                          campaign={strapi?.donationModuleCampaign}
                          env={strapi?.donationModuleEnv}
                        />
                      );
                    } else {
                      return <SignupForm />;
                    }
                  })()}
                </Box>
              </FormContainer>
            </Box>
          </Flex>
        </OverflowWrapper>
      </PageContainer>
      <PetitionFooter locale={'HKChinese'} />
      <ScrollToTargetButton target={FormRef} targetInView={inView} />
    </>
  );
}

export default Index;
