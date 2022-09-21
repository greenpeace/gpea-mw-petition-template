import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import * as formActions from 'store/actions/action-types/form-actions';
// Import library
import { useInView } from 'react-intersection-observer';
import { Box, Flex } from '@chakra-ui/react';
// Import custom containers
import PageContainer from '@containers/pageContainer';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
// Import custom components
import HeroBanner from '@components/ResponsiveBanner/hero';
import ThanksBanner from '@components/ResponsiveBanner/thanks';
import SignupForm from '@components/GP/TWForm';
import DonationModule from '@components/GP/DonationModule';
import FixedCTA from '@components/GP/FixedCTA';
// Import Contents
import Content from './Content';
import Thankyou from './Thankyou';

import SEO from './SEO';
import formContent from './form';
// Import static
import heroBannerImage from './images/banner_web.jpg';
import heroBannerImageMobile from './images/banner_mobile.jpg';
// import heroBannerImage from './images/gp-climate-banner.jpg';
// import heroBannerImageB from './images/climatebanner2_web.jpg';
// import heroBannerImageBMobile from './images/climatebanner2_mobile.jpg';

function Index({ setFormContent }) {
  const router = useRouter();
  const [utmSource, setUtmSource] = useState('');
  useEffect(() => {
    setUtmSource(router.query?.utm_source);
  }, [router]);

  const signup = useSelector((state) => state?.signup);
  const { step } = signup;
  const submitted = useSelector((state) => state?.status?.submitted);
  const theme = useSelector((state) => state?.theme);
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
      <div>
        {submitted ? (
          <ThanksBanner
            defaultImage={heroBannerImage}
            content={{
              title: `${
                FirstName ? FirstName : '綠色和平支持者'
              }，謝謝您參與這次的連署`,
              description: ['能更進一步支持我們的氣候行動嗎？'],
            }}
            imageSrcset={[
              {
                media: '(min-width: 48em)',
                srcset: heroBannerImage,
              },
              {
                media: '',
                srcset: heroBannerImageMobile,
              },
            ]}
          />
        ) : (
          <HeroBanner
            defaultImage={heroBannerImage}
            content={{
              title:
                `${
                  theme?.params?.headline_prefix
                    ? theme?.params?.headline_prefix + '<br/>'
                    : ''
                }` + '立即連署<br/>改寫氣候未來',

            }}
            imageSrcset={[
              {
                media: '(min-width: 48em)',
                srcset: heroBannerImage,
              },
              {
                media: '',
                srcset: heroBannerImageMobile,
              },
            ]}
          />
        )}
      </div>

      <PageContainer>
        <OverflowWrapper>
          <Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
            <Box flex={1} mt={{ base: 10, sm: 60 }}>
              <ContentContainer>
                {submitted ? <Thankyou /> : <Content />}
              </ContentContainer>
            </Box>
            <Box flex={1} ref={myRef}>
              <FormContainer>
                <Box ref={ref}>
                  {submitted ? (
                    utmSource != 'dd' ? (
                      <DonationModule
                        market={'TW'}
                        language={'zh_TW'}
                        campaign={
                          theme?.params?.donation_module_campaign ??
                          'mitigate_climatechange'
                        }
                        // campaignId={''}
                        env={'production'}
                      />
                    ) : (
                      ''
                    )
                  ) : (
                    <SignupForm />
                  )}
                </Box>
              </FormContainer>
            </Box>
          </Flex>
        </OverflowWrapper>
      </PageContainer>
      <PetitionFooter locale={'TWChinese'} />
      {!inView && (
        <FixedCTA onClick={executeScroll}>{formContent.submit_text}</FixedCTA>
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
