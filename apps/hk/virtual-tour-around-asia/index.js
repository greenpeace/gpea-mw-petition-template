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

import heroBannerImage from './images/2022-general-post-launch-webinar-desktop-banner.jpg';
import heroBannerImageMobile from './images/2022-general-post-launch-webinar-mobile-banner.jpg';

import Content from './Content';
import Thankyou from './Thankyou';
import HeroBanner from '@components/ResponsiveBanner/hero';
import ThanksBanner from '@components/ResponsiveBanner/thanks';

const PageContainer = dynamic(() => import('@containers/pageContainer'));
const DonationModule = dynamic(() => import('@components/GP/DonationModule'));
const SignupForm = dynamic(() => import('@components/GP/WebinarForm'));

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
              '確認電郵將於 12 小時內向您發送，內含講座連結和密碼，敬請留意。活動開始前一小時，綠色和平會向您發送電郵和短訊提醒。',
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
            description: [''],
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
