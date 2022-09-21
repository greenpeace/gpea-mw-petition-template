import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Avatar, AvatarGroup, Box, Flex, Text } from '@chakra-ui/react';
import formContent from './form';
import SEO from './SEO';
import * as formActions from 'store/actions/action-types/form-actions';

import speaker1 from './images/Asset-4-wilson.png';
import heroBannerImage from './images/pbd-webinar-banner.jpg';

const Content = dynamic(() => import('./Content'));
const Thankyou = dynamic(() => import('./Thankyou'));

const HeroBanner = dynamic(() => import('@components/Banner/hero'));
const ThanksBanner = dynamic(() => import('@components/Banner/thanks'));
const PageContainer = dynamic(() => import('@containers/pageContainer'));

const DonateForm = dynamic(() => import('@components/GP/DonateForm'));
const SignupForm = dynamic(() => import('@components/GP/WebinarForm'));
const FixedCTA = dynamic(() => import('@components/GP/FixedCTA'));

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
  const executeScroll = () => scrollToRef(myRef);

  useEffect(() => {
    setFormContent(formContent);
  }, []);

  return (
    <>
      <SEO />
      <Box>
        {submitted ? (
          <ThanksBanner
            bgImage={heroBannerImage}
            content={{
              title: `${
                FirstName ? FirstName : '綠色和平支持者'
              }，感謝您報名「與極地科學家遠洋對話」！`,
              description: [],
            }}
            removeMask="true"
          />
        ) : (
          <HeroBanner
            bgImage={heroBannerImage}
            content={{
              title:
                '請即報名<br/>與極地科學家遠洋對話：<br/><span>北極熊與海冰講座</span>',

            }}
            removeMask="true"
          >
            <Flex
              align="start"
              flexDirection="column"
              pos="relative"
              zIndex="2"
            >
              <Box>
                <Text
                  fontSize={{ base: 'md', xl: 'xl' }}
                  mb="4"
                  fontWeight="bold"
                  color="white"
                  textShadow="0 0 1px rgba(0,0,0, .2)"
                >
                  嘉賓講者：
                  <br />
                  首位港產極地科研專家 張偉賢
                </Text>
                <AvatarGroup size="xl" max={4}>
                  <Avatar
                    name="Wilson Cheung"
                    src={speaker1}
                    onClick={() => scrollToRef(speaker1Ref)}
                    bgColor={'white'}
                  />
                </AvatarGroup>
              </Box>
            </Flex>
          </HeroBanner>
        )}
      </Box>
      <PageContainer>
        <OverflowWrapper>
          <Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
            <Box flex={1} mt={{ base: 10, sm: 60 }}>
              <ContentContainer theme={theme}>
                {submitted ? (
                  <Thankyou />
                ) : (
                  <Content speaker1Ref={speaker1Ref} />
                )}
              </ContentContainer>
            </Box>
            <Box flex={1} ref={myRef}>
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
