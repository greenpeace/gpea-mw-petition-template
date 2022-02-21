import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import PetitionFooter from '@containers/petitionFooter';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import {
  Avatar,
  AvatarGroup,
  Box,
  Flex,
  Text,
  Heading,
  Container,
} from '@chakra-ui/react';
import formContent from './form';
import SEO from './SEO';
import * as formActions from 'store/actions/action-types/form-actions';

import speaker1 from './images/gurugurulogo.jpg';
import speaker2 from './images/MilMilllogo.jpg';

import heroBannerImage from './images/q1-cny-webinar-kv-banner.jpg';
import Form from './formContainer';
import InViewWrap from './inViewWrap';
import { useWindowSize } from './util';

const Content = dynamic(() => import('./Content'));
const Thankyou = dynamic(() => import('./Thankyou'));

const HeroBanner = dynamic(() => import('@components/Banner/hero'));
const ThanksBanner = dynamic(() => import('@components/Banner/thanks'));

const FixedCTA = dynamic(() => import('@components/GP/FixedCTA'));

import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

const maxWSize = 1200;
const formWidth = 500;

function Index({ status, theme, setFormContent, signup }) {
  const { submitted } = status;
  const { FirstName } = signup;
  const scrollToRef = (ref) =>
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const mobileForm = useRef(null);
  const contentWidth = useRef(null);
  const speaker1Ref = useRef(null);
  const speaker2Ref = useRef(null);
  const speaker3Ref = useRef(null);
  const [mobileFormInView, setMobileFormInView] = useState(true);
  const getSize = useWindowSize();

  const executeScroll = () => scrollToRef(mobileForm);

  const formProps = inView // switch form position when TITLE inView
    ? {
        position: 'absolute',
        left: `${contentWidth.current?.offsetWidth}px`,
        top: 0,
        width: `${formWidth}px`,
      }
    : {
        position: 'fixed',
        left: `${getSize?.width / 2}px`,
        top: '0px',
        width: `${formWidth}px`,
      };

  useEffect(() => {
    setFormContent(formContent);
  }, []);

  // const MobileForm = () => (
  //   <InViewWrap setMobileFormInView={setMobileFormInView}>
  //     <Form />
  //   </InViewWrap>
  // );

  return (
    <>
      <SEO />
      <Box bgImage={heroBannerImage} bgRepeat={'no-repeat'} bgSize={'cover'}>
        <Container maxW={`${maxWSize}px`}>
          <Box py={30} w={{ md: 'md', xl: 'xl' }}>
            <Box ref={ref}>
              <Heading
                {...headingProps}
                color={'white'}
                fontSize={{ base: '2xl', md: '4xl' }}
                dangerouslySetInnerHTML={{
                  __html: '請即報名<br/>惜物慳家101<br/>家居減廢與回收講座',
                }}
              />
            </Box>
            <Box pos={'relative'}>
              <Flex zIndex="2" py={4} flexDirection="column">
                <Text
                  fontSize="xl"
                  px="2"
                  mb="4"
                  fontWeight="bold"
                  color="white"
                >
                  嘉賓講者：
                </Text>
                <AvatarGroup size="xl" max={4}>
                  <Avatar
                    name="回收廠MilMill代表"
                    src={speaker2}
                    onClick={() => scrollToRef(speaker2Ref)}
                  />
                  <Avatar
                    name="環保網店Guruguru創辦人阿晴"
                    src={speaker1}
                    onClick={() => scrollToRef(speaker1Ref)}
                  />
                </AvatarGroup>
              </Flex>
              <Box {...formProps} d={{ base: 'none', md: 'block' }}>
                <Form />
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box d={{ base: 'block', md: 'none' }} mt={-2} ref={mobileForm}>
        <Form />
      </Box>

      <Container maxW={`${maxWSize}px`}>
        <Box w={{ md: 'md', xl: 'xl' }} py={10} ref={contentWidth}>
          {/* <Content
            speaker1Ref={speaker1Ref}
            speaker2Ref={speaker2Ref}
          /> */}
          <Thankyou />
        </Box>
      </Container>

      <PetitionFooter locale={'HKChinese'} />
      {!mobileFormInView && (
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
