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

import heroBannerImage from './images/202207-plastic-dpt-policy-banner.jpg';

const HeroBanner = dynamic(() => import('@components/ResponsiveBanner/hero'));
const ThanksBanner = dynamic(() =>
  import('@components/ResponsiveBanner/thanks'),
);

import Content from './Content';
import Thankyou from './Thankyou';
import PageContainer from '@containers/pageContainer';
import DonationModule from '@components/GP/DonationModule';
import SignupForm from '@components/GP/WebinarForm';

function Index({ status, theme, setFormContent, signup }) {
  const { submitted } = status;
  const { FirstName } = signup;

  let utmSource = new URLSearchParams(document.location.search).get(
    'utm_source',
  );

  const [ref, inView] = useInView({
    threshold: 0,
  });
  const mobileForm = useRef(null);

  useEffect(() => {
    setFormContent(formContent);
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
            }，感謝您加入推動政府全面管制即棄餐具，訂立全面走塑時間表！`,
            description: [''],
          }}
          // removeMask={true}
          imageSrcset={[
            {
              media: '(min-width: 48em)',
              srcset: heroBannerImage,
            },
            {
              media: '',
              srcset: heroBannerImage,
            },
          ]}
        />
      ) : (
        <HeroBanner
          bgImage={heroBannerImage}
          content={{
            title: '請即聯署<br/>要求政府於 22/23 年度立法落實管制即棄膠餐具',
            description: [''],
          }}
          // removeMask={true}
          imageSrcset={[
            {
              media: '(min-width: 48em)',
              srcset: heroBannerImage,
            },
            {
              media: '',
              srcset: heroBannerImage,
            },
          ]}
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
              {submitted ? (
                <FormContainer>
                  <Box ref={ref}>
                    {utmSource == 'dd' ? (
                      <Box mb="40px" />
                    ) : (
                      <DonationModule
                        market={'HK'}
                        language={'zh_HK'}
                        campaign={'plastics'}
                        // campaignId={''}
                        env={'production'}
                      />
                    )}
                  </Box>
                </FormContainer>
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
