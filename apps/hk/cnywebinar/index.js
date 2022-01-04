import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  Container,
  Text,
} from '@chakra-ui/react';
import formContent from './form';
import SEO from './SEO';
import * as formActions from 'store/actions/action-types/form-actions';

import speaker1 from './images/speaker1_v2.jpg';
import speaker2 from './images/speaker2.png';
import speaker3 from './images/speaker3.jpg';

import heroBannerImage from './images/banner.jpeg';

const Content = dynamic(() => import('./Content'));
const Thankyou = dynamic(() => import('./Thankyou'));

const HeroBanner = dynamic(() => import('@components/Banner/hero'));
const ThanksBanner = dynamic(() => import('@components/Banner/thanks'));
const PageContainer = dynamic(() => import('@containers/pageContainer'));

const DonateForm = dynamic(() => import('@components/GP/DonateForm'));
const SignupForm = dynamic(() => import('@components/GP/WebinarForm'));
const FixedCTA = dynamic(() => import('@components/GP/FixedCTA'));

const speakerAvatarProps = {
  bgSize: 'cover',
  borderRadius: '50%',
  w: '100px',
  h: '100px',
  border: '2px solid white',
};

function Index({ status, theme, setFormContent, signup }) {
  const { submitted } = status;
  const { FirstName } = signup;
  const scrollToRef = (ref) =>
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const myRef = useRef(null);
  const speaker1Ref = useRef(null);
  const speaker2Ref = useRef(null);
  const speaker3Ref = useRef(null);
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
            }，感謝您報名綠色新春教室`,
            description: ['為無塑環境多走一步，捐助支持走塑項目。'],
          }}
        />
      ) : (
        <HeroBanner
          bgImage={heroBannerImage}
          content={{
            title:
              '請即報名綠色新春教室<br/>裸買店店主同你<br/>環保辦年貨大掃除',
            description: [''],
          }}
        />
      )}
      <PageContainer>
        <OverflowWrapper>
          <Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
            <Box flex={1} mt={{ base: 10, sm: 60 }}>
              <ContentContainer theme={theme}>
                {submitted ? (
                  <Thankyou />
                ) : (
                  <Content
                    speaker1Ref={speaker1Ref}
                    speaker2Ref={speaker2Ref}
                    speaker3Ref={speaker3Ref}
                  />
                )}
              </ContentContainer>
            </Box>
            <Box flex={1} ref={myRef}>
              {/**TODO: margin top issue */}
              <Container>
                <Flex pos="relative" zIndex="2" py={4} flexDirection="column">
                  <Text
                    fontSize="xl"
                    px="2"
                    mb="4"
                    fontWeight="bold"
                    color="white"
                  >
                    嘉賓主持：
                  </Text>
                  <AvatarGroup size="xl" max={4}>
                    <Avatar
                      name="「四圍斟」Susan"
                      src={speaker3}
                      onClick={() => scrollToRef(speaker3Ref)}
                    />
                    <Avatar
                      name="譚穎琳 Leanne"
                      src={speaker1}
                      onClick={() => scrollToRef(speaker1Ref)}
                    />
                    <Avatar
                      name="柯家文 Kaman"
                      src={speaker2}
                      onClick={() => scrollToRef(speaker2Ref)}
                    />
                  </AvatarGroup>
                </Flex>
                {/* <Flex direction="row" pos="relative" mb={4} py={2} zIndex={2}>
                  <Box
                    bgImage={speaker3}
                    onClick={() => scrollToRef(speaker3Ref)}
                    {...speakerAvatarProps}
                    mr={-4}
                  ></Box>
                  <Box
                    bgImage={speaker1}
                    onClick={() => scrollToRef(speaker1Ref)}
                    {...speakerAvatarProps}
                    mr={-4}
                  ></Box>
                  <Box
                    bgImage={speaker2}
                    onClick={() => scrollToRef(speaker2Ref)}
                    {...speakerAvatarProps}
                  ></Box>
                </Flex> */}
              </Container>
              <FormContainer>
                <Box ref={ref}>
                  {submitted ? <DonateForm /> : <SignupForm />}
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
