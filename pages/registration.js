import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Box, Container, useMediaQuery } from '@chakra-ui/react';
import TagManager from 'react-gtm-module';
import axios from 'axios';
import Wrapper from '@containers/gpsWrapper';
import HeroSection from '@components/GPS/HeroSection';
import MainSection from '@components/GPS/MainSection';
import Form from '@components/GPS/GPSForm';
import formContent from '@components/GPS/formContent';
import Head from 'next/head';
import * as formActions from 'store/actions/action-types/form-actions';

import * as themeActions from 'store/actions/action-types/theme-actions';
const envProjectName = process.env.projectName;
const envProjectMarket = process.env.projectMarket;
const themeEndpointURL = process.env.themeEndpoint;

import heroBannerImage from '@components/GPS/images/banner.jpeg';

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
  }, [themeData]);

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
        <title>只需簡單登記，便可免費使用「走塑GPS」！</title>
        <meta
          property="og:title"
          content="只需簡單登記，便可免費使用「走塑GPS」！"
        />
        <meta name="description" content="走塑GPS小助手 幫你日常走塑零失手" />
        <meta
          property="og:description"
          content="走塑GPS小助手 幫你日常走塑零失手"
        />
        <meta
          property="og:image"
          content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/08/a5120475-gp02i8e_high_res.jpg"
        />
      </Head>
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
    </Box>
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
    setTheme: (data) => {
      dispatch({ type: themeActions.SET_THEME, data });
    },
  };
};

export async function getStaticProps() {
  const singleResult = await axios
    .get(themeEndpointURL)
    .then((response) => {
      return response.data.records.find(
        (d) =>
          d.ProjectName === envProjectName && d.Market === envProjectMarket,
      );
    })
    .catch((error) => console.log(error));

  console.log('Building from ' + envProjectMarket + ':' + envProjectName);

  !singleResult && console.warn('PROJECT NAME NOT FOUND');

  return {
    props: {
      themeData: singleResult || {},
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
