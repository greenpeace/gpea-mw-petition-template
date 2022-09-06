import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import * as formActions from 'store/actions/action-types/form-actions';
// Import library
import { useInView } from 'react-intersection-observer';
import { Container, Box, Flex } from '@chakra-ui/react';
// Import custom containers
import PageContainer from '@containers/pageContainer';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import FormWrapper from '@containers/formWrapper';
import PetitionFooter from '@containers/petitionFooter';
// Import custom components
import Hero from '@components/ResponsiveBanner/hero';
import Thanks from '@components/ResponsiveBanner/thanks';
import DonationModule from '@components/GP/DonationModule';
import SignupForm from '@components/GP/HKForm';
import ScrollToTargetButton from '@components/ScrollToTargetButton/ScrollToTargetButton';

import Content from './Content';
import Thankyou from './Thankyou';

import formContent from './form';
import SEO from './SEO';
// Import static
import heroBannerImage from './images/202207-plastic-dpt-policy-banner.jpg?webp';

function Index() {
  const dispatch = useDispatch();
  const signup = useSelector((state) => state?.signup);
  const { step } = signup;
  const submitted = useSelector((state) => state?.status?.submitted);
  const theme = useSelector((state) => state?.theme);
  const { FirstName } = signup;

  const router = useRouter();
  const [utmSource, setUtmSource] = useState('');
  useEffect(() => {
    setUtmSource(router.query?.utm_source);
  }, [router]);

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
        {submitted ? (
          <Thanks
            defaultImage={theme?.params?.hero_image_desktop ?? heroBannerImage}
            content={{
              title: `${
                FirstName ? FirstName : '綠色和平支持者'
              }，感謝您加入實現減塑政策！`,
              description: [
                '塑膠污染逼在眉睫，誠邀您捐助支持綠色和平走塑項目工作！',
              ],
            }}
          />
        ) : (
          <Hero
            defaultImage={theme?.params?.hero_image_desktop ?? heroBannerImage}
            content={{
              title:
                `${
                  theme?.params?.headline_prefix
                    ? theme?.params?.headline_prefix + '<br/>'
                    : ''
                }` + '請即聯署<br/>要求政府於 22/23 年度立法落實管制即棄膠餐具',
              description: [''],
            }}
          />
        )}
      </Box>
      <PageContainer>
        <OverflowWrapper>
          <Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
            <Box flex={1} mt={{ base: 10, sm: 60 }}>
              <ContentContainer>
                {submitted ? <Thankyou /> : <Content />}
              </ContentContainer>
            </Box>
            <Box flex={1} ref={mobileForm}>
              {submitted ? (
                <Container zIndex="2" position="sticky" top="4px">
                  <Box ref={ref}>
                    {utmSource == 'dd' ? (
                      <Box h="40px" />
                    ) : (
                      <FormWrapper>
                        <DonationModule
                          market={'HK'}
                          language={'zh_HK'}
                          campaign={
                            theme?.params?.donation_module_campaign ??
                            'plastics'
                          }
                          campaignId={theme?.params?.campaignId ?? ''}
                          env={'production'}
                        />
                      </FormWrapper>
                    )}
                  </Box>
                </Container>
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
      {!submitted && (
        <ScrollToTargetButton target={mobileForm} targetInView={inView} />
      )}
    </>
  );
}

export default Index;
