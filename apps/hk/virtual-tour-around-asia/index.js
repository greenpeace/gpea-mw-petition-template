/**
 * Deploy setting
# Project Apps Directory: /apps/{PROJECT}
PROJECT=hk/virtual-tour-around-asia
MARKET=hk
PROJECT_NAME=virtual-tour-around-asia
BASEPATH=/web/api.greenpeace.org.hk/htdocs/2022/virtual-tour-around-asia
ASSETPREFIX=https://api.greenpeace.org.hk/2022/virtual-tour-around-asia/
FTP_CONFIG_NAME=api_hk_cloud 
*/

import React, { useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import * as formActions from 'store/actions/action-types/form-actions';
// Import library
import { useInView } from 'react-intersection-observer';
import { Box, Flex } from '@chakra-ui/react';
// Import custom containers
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
import PageContainer from '@containers/pageContainer';
// Import custom components
import ScrollToTargetButton from '@components/ScrollToTargetButton/ScrollToTargetButton';
import HeroBanner from '@components/ResponsiveBanner/hero';
import ThanksBanner from '@components/ResponsiveBanner/thanks';
import DonationModule from '@components/GP/DonationModule';
import SignupForm from '@components/GP/WebinarForm';
// Import Contents
import formContent from './form';
import SEO from './SEO';

import Content from './Content';
import Thankyou from './Thankyou';
// Import static
import heroBannerImage from './images/2022-general-post-launch-webinar-desktop-banner.jpg';
import heroBannerImageMobile from './images/2022-general-post-launch-webinar-mobile-banner.jpg';

function Index({ status, theme, setFormContent, signup }) {
  const { submitted } = status;
  const { FirstName } = signup;

  const { ref, inView } = useInView({
    threshold: 0,
  });
  const mobileForm = useRef(null);

  useEffect(() => {
    setFormContent(formContent);
  }, []);

  useEffect(() => {
    if (submitted) {
      //
      window.dataLayer = window.dataLayer || [];

      window.dataLayer.push({
        event: 'fbqEvent',
        contentName: 'annual-report-webinar',
        contentCategory: 'Subscribe',
      });
    }
  }, [submitted]);

  return (
    <>
      <SEO />
      {submitted ? (
        <ThanksBanner
          bgImage={heroBannerImage}
          content={{
            title: `${
              FirstName ? FirstName : '綠色和平支持者'
            }，感謝您報名分享會！`,
            description: [
              '確認電郵將於 12 小時內向您發送，內含講座連結和密碼，敬請留意。',
            ],
          }}
          removeMask={false}
          imageSrcset={[
            {
              media: '(min-width: 48em)',
              srcset: heroBannerImage,
            },
            {
              media: '',
              srcset: heroBannerImageMobile,
            },
          ]}
        />
      ) : (
        <HeroBanner
          bgImage={heroBannerImage}
          content={{
            title: '請即報名：<br/>眼睛去旅行<br/>港台日韓四地連線',

          }}
          removeMask={false}
          imageSrcset={[
            {
              media: '(min-width: 48em)',
              srcset: heroBannerImage,
            },
            {
              media: '',
              srcset: heroBannerImageMobile,
            },
          ]}
        />
      )}
      <PageContainer>
        <OverflowWrapper>
          <Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
            <Box flex={1} mt={{ base: 10, sm: 60 }}>
              <ContentContainer>
                {submitted ? <Thankyou /> : <Content />}
              </ContentContainer>
            </Box>
            <Box flex={1} ref={mobileForm}>
              <FormContainer>
                <Box ref={ref}>
                  {submitted ? (
                    <DonationModule
                      market={'HK'}
                      language={'zh_HK'}
                      campaign={'general'}
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
