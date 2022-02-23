import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import PetitionFooter from '@containers/petitionFooter';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Box, Container, useMediaQuery } from '@chakra-ui/react';
import HeroSection from './components/HeroSection';
import MainSection from './components/MainSection';
import Form from './components/Form';
import formContent from './form';
import SEO from './SEO';
import * as formActions from 'store/actions/action-types/form-actions';

import heroBannerImage from './images/q1-cny-webinar-kv-banner.jpg';

const FixedCTA = dynamic(() => import('@components/GP/FixedCTA'));

const maxWSize = 1200;

function Index({ setFormContent }) {
  const [isLargerThanMD] = useMediaQuery('(min-width: 48em)'); // default md: '48em'
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
    if (isLargerThanMD) {
      setShowCTAButton(false);
      return;
    }
    if (!inView && !isLargerThanMD) {
      setShowCTAButton(true);
    } else {
      setShowCTAButton(false);
    }
  }, [inView, isLargerThanMD]);

  return (
    <>
      <SEO />
      <Box bgImage={heroBannerImage} bgRepeat={'no-repeat'} bgSize={'cover'}>
        <Container maxW={`${maxWSize}px`}>
          <HeroSection />
        </Container>
      </Box>

      {/** Mobile form */}
      <Box ref={mobileForm}>
        <Box d={{ base: 'block', md: 'none' }} mt={-2} ref={ref}>
          <Form />
        </Box>
      </Box>
      {/** Mobile form End */}

      <Container maxW={`${maxWSize}px`}>
        <Box w={{ md: 'md', xl: 'xl' }} py={10}>
          <MainSection />
        </Box>
      </Container>

      <PetitionFooter locale={'HKChinese'} />

      {showCTAButton && (
        <FixedCTA onClick={() => executeScroll(mobileForm)}>
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