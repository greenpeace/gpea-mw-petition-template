import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Box, Container, useMediaQuery } from '@chakra-ui/react';
import Wrapper from '@containers/gpsWrapper';
import HeroSection from '@components/GPS/HeroSection';
import MainSection from '@components/GPS/MainSection';
import Form from '@components/GPS/GPSForm';
import formContent from '@components/GPS/formContent';
import * as formActions from 'store/actions/action-types/form-actions';

import heroBannerImage from '@components/GPS/images/banner.jpeg';

const FixedCTA = dynamic(() => import('@components/GP/FixedCTA'));

const maxWSize = 1200;

function Index({ setFormContent }) {
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
    <>
      <Box bgImage={heroBannerImage} bgRepeat={'no-repeat'} bgSize={'cover'}>
        <Container maxW={`${maxWSize}px`}>
          <HeroSection />
        </Container>
      </Box>

      {/** Mobile form */}
      <Box ref={mobileForm}>
        <Box d={{ base: 'block', lg: 'none' }} mt={-2} ref={ref}>
          <Form />
        </Box>
      </Box>
      {/** Mobile form End */}

      <Container maxW={`${maxWSize}px`}>
        <Box
          w={{ base: '100%', lg: 'md', xl: maxWSize / 2 }}
          py={10}
          pr={{ xl: 10 }}
        >
          <MainSection />
        </Box>
      </Container>

      {showCTAButton && (
        <FixedCTA onClick={() => executeScroll(mobileForm)}>
          {formContent.mobile_cta ? formContent.mobile_cta : '立即捐款'}
        </FixedCTA>
      )}
    </>
  );
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;

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
