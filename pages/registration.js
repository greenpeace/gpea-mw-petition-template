import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Box, Container, useMediaQuery } from '@chakra-ui/react';
import TagManager from 'react-gtm-module';
import Wrapper from '@containers/gpsWrapper';
import HeroSection from '@components/GPS/HeroSection';
import MainSection from '@components/GPS/MainSection';
import Form from '@components/GPS/GPSForm';
import formContent from '@components/GPS/formContent';
import Head from 'next/head';

import { imageLoader } from 'common/utils';
import * as formActions from 'store/actions/action-types/form-actions';
import * as themeActions from 'store/actions/action-types/theme-actions';
import Image from 'next/image';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

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
    const market = themeData?.Market;
    /* GTM is only applicable for production env */
    if (process.env.NODE_ENV === 'production') {
      let gtmId = '';
      switch (market) {
        case 'hk':
          gtmId = 'GTM-M6LZL75';
          break;
        case 'tw':
          gtmId = 'GTM-WRM6WK6';
          break;
        default:
          gtmId = '';
          break;
      }
      const tagManagerArgs = {
        gtmId: gtmId,
      };
      TagManager.initialize(tagManagerArgs);
    }
    setTheme(themeData);
  }, []);

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
      <Box w={'100%'} pos={'relative'}>
        <Container maxW={`${maxWSize}px`} pos={'relative'} zIndex={1}>
          <HeroSection />
        </Container>

        <Image
          loader={imageLoader}
          src="/images/20220318_GPS-03.png"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </Box>

      {/** Mobile form */}
      <Box ref={mobileForm}>
        <Box
          d={{ base: 'block', lg: 'none' }}
          mt={-2}
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
