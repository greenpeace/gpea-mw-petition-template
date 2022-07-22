import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Box, Flex } from '@chakra-ui/react';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
import HeroBanner from '@components/ResponsiveBanner/hero';
import ThanksBanner from '@components/ResponsiveBanner/thanks';
import ScrollToTargetButton from '@components/ScrollToTargetButton/ScrollToTargetButton';

import formContent from './form';
import SEO from './SEO';

import * as formActions from 'store/actions/action-types/form-actions';

import Content from './Content';
import Thankyou from './Thankyou';
import PageContainer from '@containers/pageContainer';
import DonationModule from '@components/GP/DonationModule';

import heroBannerImage from './images/GP1SUB1C_PressMedia_ed.jpg';

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
            title: '感謝您捐款支持！',
            description: [''],
          }}
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
          // removeMask={true}
          objectPosition={'center'}
          minH={{ base: 'lg', md: 'xl', '2xl': '2xl' }}
        />
      ) : (
        <HeroBanner
          bgImage={heroBannerImage}
          content={{
            title:
              `${preFill.FirstName ? preFill.FirstName + '<br/>' : ''}` +
              '請即捐款<br/>讓全球 30% 海洋<br/>納入保護區',
            description: [''],
          }}
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
          // removeMask={true}
          objectPosition={'20% center'}
          minH={{ base: 'lg', md: 'xl', '2xl': '2xl' }}
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
              <FormContainer>
                <Box ref={ref}>
                  <DonationModule
                    market={'HK'}
                    language={'zh_HK'}
                    campaign={'oceans'}
                    // campaignId={''}
                    env={'production'}
                  />
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
  return {
    status,
    theme: theme.data,
    signup: signup?.data,
    preFill: signup?.preFill,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormContent: (data) => {
      dispatch({ type: formActions.SET_FORM, data });
    },
    setHiddenForm: (value) => {
      dispatch({ type: hiddenFormActions.SET_HIDDEN_FORM, data: value });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
