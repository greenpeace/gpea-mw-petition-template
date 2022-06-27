import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Box, Container, Image, useMediaQuery } from '@chakra-ui/react';
import Wrapper from '@containers/gpsWrapper';
import HeroSection from '@components/GPS/HeroSection';
import MainSection from '@components/GPS/MainSection';
import Form from '@components/GPS/GPSForm';
import formContent from '@components/GPS/formContent';
import Head from 'next/head';

import * as formActions from 'store/actions/action-types/form-actions';
import * as themeActions from 'store/actions/action-types/theme-actions';

import banner from '../public/images/20220318_GPS-03.jpg';
import mobileBanner from '../public/images/20220318_GPS_visual_embed-02b.jpg';

const FixedCTA = dynamic(() => import('@components/GP/FixedCTA'));

const maxWSize = 1200;

function Index({ setFormContent, setTheme, themeData }) {
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
    <Box pt={{ base: '50px', md: '60px' }}>
      <Head>
        <title>
          只需簡單登記，就能使用完整版「走塑GPS」！ - Greenpeace 綠色和平 | 香港
        </title>
      </Head>
      <Box pos={'relative'} minH={{ base: '100vw', md: '480px' }}>
        <Container maxW={`${maxWSize}px`} pos={'relative'} zIndex={1}>
          <HeroSection />
        </Container>
        <Box
          pos={'absolute'}
          top={0}
          right={0}
          left={0}
          bottom={0}
          d={{ base: 'none', md: 'block' }}
        >
          <Image src={banner} height="100%" width="100%" objectFit="cover" />
        </Box>
        <Box
          pos={'absolute'}
          top={0}
          right={0}
          left={0}
          bottom={0}
          d={{ base: 'block', md: 'none' }}
        >
          <Image
            src={mobileBanner}
            height="100%"
            width="100%"
            objectFit="fill"
            objectPosition={'center'}
          />
        </Box>
      </Box>

      {/** Mobile form */}
      <Box ref={mobileForm}>
        <Box
          d={{ base: 'block', lg: 'none' }}
          mt={-4}
          ref={ref}
          pos={'relative'}
          zIndex={2}
        >
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
    </Box>
  );
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;

export async function getStaticProps() {
  return {
    props: {},
  };
}

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, themeData: theme.data, signup: signup.data };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormContent: (data) => {
      dispatch({ type: formActions.SET_FORM, data });
    },
    setTheme: (data) => {
      dispatch({ type: themeActions.SET_THEME, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
