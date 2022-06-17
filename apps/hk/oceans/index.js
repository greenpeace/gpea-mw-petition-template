import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Box, Flex } from '@chakra-ui/react';
import formContent from './form';
import SEO from './SEO';
import * as formActions from 'store/actions/action-types/form-actions';

import heroBannerImage from './images/GP1SUB1C_PressMedia_ed.jpg';

const Content = dynamic(() => import('./Content'));
const Thankyou = dynamic(() => import('./Thankyou'));

const HeroBanner = dynamic(() => import('@components/Banner/hero'));
const ThanksBanner = dynamic(() => import('@components/Banner/thanks'));
const PageContainer = dynamic(() => import('@containers/pageContainer'));

const DonationModule = dynamic(() => import('@components/GP/DonationModule'));
const DonateForm = dynamic(() => import('@components/GP/DonateForm'));
const SignupForm = dynamic(() => import('@components/GP/HKForm'));
const FixedCTA = dynamic(() => import('@components/GP/FixedCTA'));

function Index({ status, theme, setFormContent, signup }) {
  const { submitted } = status;
  const { FirstName } = signup;

  const scrollToRef = (ref) =>
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

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
            }，感謝您加入守護海洋行列！`,
            description: ['為海洋多走一步，捐助支持保護海洋項目。'],
          }}
        />
      ) : (
        <HeroBanner
          bgImage={heroBannerImage}
          content={{
            title: '請即聯署<br/>將全球 30% 海洋<br/>納入保護區',
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
            <Box flex={1} ref={myRef}>
              <FormContainer>
                <Box ref={ref}>
                  {submitted ? (
                    <DonationModule
                      market={theme.Market}
                      language={'zh_HK'}
                      campaign={'oceans'}
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
      {!inView && (
        <FixedCTA onClick={executeScroll}>
          {formContent.mobile_cta ? formContent.mobile_cta : '立即捐款'}
        </FixedCTA>
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
