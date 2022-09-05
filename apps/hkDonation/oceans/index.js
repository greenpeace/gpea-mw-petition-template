import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
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
import ScrollToTargetButton from '@components/ScrollToTargetButton/ScrollToTargetButton';

import formContent from './form';
import SEO from './SEO';

import Content from './Content';
import Thankyou from './Thankyou';

// Import static
import heroBannerImage from './images/GP1SUB1C_PressMedia_ed.jpg?webp';

function Index({ status, setFormContent }) {
  const dispatch = useDispatch();
  const signup = useSelector((state) => state?.signup);
  const theme = useSelector((state) => state?.theme);
  const preFill = signup?.preFill;
  const { submitted } = status;

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
                {/* {submitted ? <Thankyou /> : <Content />} */}
                <Content />
              </ContentContainer>
            </Box>
            <Box flex={1} ref={mobileForm}>
              <FormContainer>
                <Box ref={ref}>
                  <DonationModule
                    market={'HK'}
                    language={'zh_HK'}
                    campaign={
                      theme?.params?.donation_module_campaign ?? 'oceans'
                    }
                    campaignId={theme?.params?.campaignId ?? ''}
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

const mapStateToProps = ({ status }) => {
  return {
    status,
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
