import React, { useEffect, useRef } from 'react';
import HeroBanner from '@components/ResponsiveBanner/hero';
import ThanksBanner from '@components/ResponsiveBanner/thanks';
import PageContainer from '@containers/pageContainer';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
import DonationModule from '@components/GP/DonationModule';

import Content from './Content';
import Thankyou from './Thankyou';

import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Box, Flex } from '@chakra-ui/react';
import ScrollToTargetButton from '@components/ScrollToTargetButton/ScrollToTargetButton';
import SEO from './SEO';
import formContent from './form';
import * as formActions from 'store/actions/action-types/form-actions';

// Default General Banner
import heroBannerImage from './images/2022-donate_general.jpg';
// DRTV Genral Banner
import drtvBannerDesktop from './images/8253b889-general_desktop_new.jpg';
import drtvBannerMobile from './images/cdc393f4-l_general_mobile_final.jpg';

function Index({
  status,
  theme,
  setFormContent,
  signup,
  preFill,
  setHiddenForm,
}) {
  const { submitted } = status;
  const { FirstName } = signup;
  const themeInterests = theme.interests;

  const scrollToRef = (ref) =>
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const mobileForm = useRef(null);
  const myRef = useRef(null);

  useEffect(() => {
    setFormContent(formContent);
  }, []);

  return (
    <>
      <SEO />
      <div>
        {submitted ? (
          <ThanksBanner
            defaultImage={drtvBannerDesktop}
            content={{
              // title: '感謝您的捐助支持！',
              title: '',
            }}
            imageSrcset={[
              {
                media: '(min-width: 48em)',
                srcset: drtvBannerDesktop,
              },
              {
                media: '',
                srcset: drtvBannerMobile,
              },
            ]}
            removeMask={true}
            minH={{ base: 'lg', md: 'xl', '2xl': '2xl' }}
          />
        ) : (
          <HeroBanner
            defaultImage={drtvBannerDesktop}
            content={{
              // title:
              //   `${preFill.FirstName ? preFill.FirstName + '<br/>' : ''}` +
              //   '今天您的捐款支持，<br/>能促成大自然與社會共存的未來',
              titel: '',
            }}
            imageSrcset={[
              {
                media: '(min-width: 48em)',
                srcset: drtvBannerDesktop,
              },
              {
                media: '',
                srcset: drtvBannerMobile,
              },
            ]}
            removeMask={true}
            minH={{ base: 'lg', md: 'xl', '2xl': '2xl' }}
          />
        )}
      </div>

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
                  <DonationModule
                    market={'TW'}
                    language={'zh_TW'}
                    campaign={'general'}
                    // campaignId={''}
                    env={'production'}
                  />
                </Box>
              </FormContainer>
            </Box>
          </Flex>
        </OverflowWrapper>
      </PageContainer>
      <PetitionFooter locale={'TWChinese'} />
      <ScrollToTargetButton target={mobileForm} targetInView={inView} />
    </>
  );
}

const mapStateToProps = ({ status, theme, signup }) => {
  return {
    status,
    theme: theme.data,
    signup: signup.data,
    preFill: signup?.preFill,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormContent: (data) => {
      dispatch({ type: formActions.SET_FORM, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
