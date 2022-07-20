import React, { useEffect, useRef } from 'react';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
import { useSelector } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import { Box, Flex } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import ScrollToTargetButton from '@components/ScrollToTargetButton/ScrollToTargetButton';
import formContent from './form';
import SEO from './SEO';
import * as formActions from 'store/actions/action-types/form-actions';

import heroBannerImage from './images/GP1SUB1C_PressMedia_ed.jpg';

import Donation from './Donation';
import Content from './Content';
import Thankyou from './Thankyou';

import HeroBanner from '@components/Banner/hero';
import ThanksBanner from '@components/Banner/thanks';
import PageContainer from '@containers/pageContainer';
import DonationModule from '@components/GP/DonationModule';
import SignupForm from '@components/GP/HKForm';

function Index() {
  const dispatch = useDispatch();
  const step = useSelector((state) => state?.signup?.step);
  const submitted = useSelector((state) => state?.status?.submitted);
  const theme = useSelector((state) => state?.theme);

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
      <HeroBannerCom step={step} submitted={submitted} theme={theme} />
      <PageContainer>
        <OverflowWrapper>
          <Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
            <Box flex={1} mt={{ base: 10, sm: 60 }}>
              <ContentContainer theme={theme}>
                <ContentCom step={step} submitted={submitted} />
              </ContentContainer>
            </Box>
            <Box flex={1} ref={mobileForm}>
              <FormContainer>
                <Box ref={ref}>
                  <FormCom step={step} submitted={submitted} theme={theme} />
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

const FormCom = ({ step, submitted, theme }) => {
  if (step === 'donation') {
    return (
      <DonationModule
        market={theme.Market}
        language={'zh_HK'}
        campaign={'oceans'}
        // campaignId={''}
        env={'production'}
      />
    );
  }

  return submitted ? (
    <DonationModule
      market={theme.Market}
      language={'zh_HK'}
      campaign={'oceans'}
      // campaignId={''}
      env={'production'}
    />
  ) : (
    <SignupForm />
  );
};

const ContentCom = ({ step, submitted }) => {
  if (step === 'donation') {
    return <Donation />;
  }

  return submitted ? <Thankyou /> : <Content />;
};

const HeroBannerCom = ({ step, submitted, theme }) => {
  if (step === 'donation') {
    return (
      <HeroBanner
        bgImage={theme?.params?.hero_image_desktop ?? heroBannerImage}
        content={{
          title: `${
            theme?.params?.headline_prefix ?? ''
          }請即聯署<br/>將全球 30% 海洋<br/>納入保護區`,
          description: [''],
        }}
      />
    );
  }

  return submitted ? (
    <ThanksBanner
      bgImage={heroBannerImage}
      content={{
        title: `${
          signup?.data?.FirstName ? signup?.data?.FirstName : '綠色和平支持者'
        }，感謝您加入守護海洋行列！`,
        description: ['為海洋多走一步，捐助支持保護海洋項目。'],
      }}
    />
  ) : (
    <HeroBanner
      bgImage={heroBannerImage}
      content={{
        title: '請即捐款<br/>讓全球30%海洋<br/>納入保護區',
        description: [''],
      }}
    />
  );
};

export default Index;
