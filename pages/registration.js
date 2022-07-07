import React, { useEffect, useState, useRef } from 'react';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Box, Flex, useMediaQuery } from '@chakra-ui/react';
import Wrapper from '@containers/gpsWrapper';
import Form from '@apps/hk/gps/components/GPSForm';
import formContent from '@apps/hk/gps/formContent';
import Content from '@apps/hk/gps/Content';
import SEO from '@apps/hk/gps/SEO';
import Thankyou from '@apps/hk/gps/Thankyou';
import HeroBanner from '@components/Banner/hero';
import ThanksBanner from '@components/Banner/thanks';
import PageContainer from '@containers/pageContainer';
import DonationModule from '@components/GP/DonationModule';
import SignupForm from '@components/GP/HKForm';

import * as formActions from 'store/actions/action-types/form-actions';
import * as themeActions from 'store/actions/action-types/theme-actions';

import banner from '@apps/hk/gps/images/20220318_GPS-03.jpg';
import mobileBanner from '@apps/hk/gps/images/20220318_GPS_visual_embed-02b.jpg';

import FixedCTA from '@components/GP/FixedCTA';
import ScrollToTargetButton from '@components/ScrollToTargetButton/ScrollToTargetButton';

const maxWSize = 1200;

function Index({ status, theme, signup, setFormContent, setTheme, themeData }) {
  const { submitted } = status;
  const { FirstName } = signup;

  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)'); // default md: '62em'
  const { ref, inView } = useInView({ threshold: 0 });
  const mobileForm = useRef(null);
  const executeScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const [showCTAButton, setShowCTAButton] = useState(false);

  useEffect(() => {
    setFormContent(formContent);
  }, []);

  useEffect(() => {
    if (isLargerThanLG) {
      setShowCTAButton(false);
      return;
    }
    if (!inView && !isLargerThanLG) {
      setShowCTAButton(true);
    } else {
      setShowCTAButton(false);
    }
  }, [inView, isLargerThanLG]);

  return (
    <Box pt={{ base: '50px', md: '60px' }}>
      <SEO />
      {submitted ? (
        <ThanksBanner
          bgImage={banner}
          content={{
            title: `${FirstName}，您現在可以免費使用完整版走塑GPS！`,
            description: [' * WhatsApp對話將於1分鐘內顯示確認訊息。'],
          }}
        />
      ) : (
        <HeroBanner
          bgImage={banner}
          content={{
            title: '立即登記<br/>免費使用完整版！',
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
              <Box zIndex="2" position="sticky" top="60px">
                <FormContainer>
                  <Box ref={ref}>
                    {submitted ? (
                      <DonationModule
                        market={'HK'}
                        language={'zh_HK'}
                        campaign={'plastics'}
                        // campaignId={''}
                        env={'production'}
                      />
                    ) : (
                      <SignupForm />
                    )}
                  </Box>
                </FormContainer>
              </Box>
            </Box>
          </Flex>
        </OverflowWrapper>
      </PageContainer>
      <PetitionFooter locale={'HKChinese'} />
      <ScrollToTargetButton target={mobileForm} targetInView={inView} />
    </Box>
  );
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;

export async function getStaticProps() {
  return {
    props: {},
  };
}

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, themeData: theme.data, signup: signup.data };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormContent: (data) => {
      dispatch({ type: formActions.SET_FORM, data });
    },
    setTheme: (data) => {
      dispatch({ type: themeActions.SET_THEME, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
