import React, { useEffect, useState, useRef } from 'react';
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
// Import Strapi content components
import StrapiSEO from '@components/Strapi/StrapiSEO';
import StrapiDynamicBlocks from '@components/Strapi/StrapiDynamicContent';
import StrapiFixedButton from '@components/Strapi/StrapiFixedButton';
// Import Contents
import formContent from './form';
// Import static

function Index({ submitted = false, strapi }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const theme = useSelector((state) => state?.theme);
  const submitted = useSelector((state) => state?.status?.submitted);
  const pageType = strapi?.page_type?.data?.attributes?.name;
  const [isLoaded, setIsLoaded] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0,
  });
  const FormRef = useRef(null);

  useEffect(() => {
    dispatch({ type: formActions.SET_FORM, data: formContent }); // set form content from form.json
    if (pageType !== undefined) {
      setIsLoaded(true);
    }
  }, [dispatch, pageType]);

  useEffect(async () => {
    if (router?.isReady) {
      const { preview } = router?.query;
      const endpoint = 'https://strapi.small-service.gpeastasia.org/api';
      const res = await fetch(
        `${endpoint}/pages?filters[market][slug]=hk&filters[campaign]=${preview}&populate=*`,
      ).then((response) => response);
      const themes = await res.json();
      const theme = themes?.data[0] ?? {};

      dispatch({
        type: themeActions.SET_STRAPI_DATA,
        data: theme?.attributes,
      });
    }
  }, [router]);

  return (
    <>
      <StrapiSEO />
      <Box>
        {(() => {
          if (pageType?.toLowerCase() === 'donation') {
            return (
              <HeroBanner
                defaultImage={
                  theme?.params?.hero_image_desktop ||
                  strapi?.contentHero?.desktopImageURL
                }
                content={{
                  title: theme?.params?.headline_prefix
                    ? theme?.params?.headline_prefix +
                      '<br/>' +
                      strapi?.contentHero?.richContent
                    : strapi?.contentHero?.richContent,
                }}
              />
            );
          } else {
            return submitted ? (
              <ThanksBanner
                defaultImage={
                  theme?.params?.hero_image_desktop ||
                  strapi?.thankyouHero?.desktopImageURL
                }
                content={{
                  title: strapi?.thankyouHero?.richContent,
                }}
              />
            ) : (
              <HeroBanner
                defaultImage={
                  theme?.params?.hero_image_desktop ||
                  strapi?.thankyouHero?.desktopImageURL
                }
                content={{
                  title: theme?.params?.headline_prefix
                    ? theme?.params?.headline_prefix +
                      '<br/>' +
                      strapi?.contentHero?.richContent
                    : strapi?.contentHero?.richContent,
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
              <ContentContainer issue={strapi?.issue?.data?.attributes?.slug}>
                {(() => {
                  if (pageType?.toLowerCase() === 'donation') {
                    return <StrapiDynamicBlocks blocks={'contentBlocks'} />;
                  } else {
                    return submitted ? (
                      <StrapiDynamicBlocks blocks={'thankyouBlocks'} />
                    ) : (
                      <StrapiDynamicBlocks blocks={'contentBlocks'} />
                    );
                  }
                })()}
              </ContentContainer>
            </Box>
            <Box flex={1} ref={FormRef} {...{ d: isLoaded ? 'block' : 'none' }}>
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
      <StrapiFixedButton target={FormRef} targetInView={inView} />
    </>
  );
}

export default Index;
