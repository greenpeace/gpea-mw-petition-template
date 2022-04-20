import React, { useEffect, useRef } from 'react';
import HeroBanner from '@components/ResponsiveBanner/hero';
import ThanksBanner from '@components/ResponsiveBanner/thanks';
import PageContainer from '@containers/pageContainer';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
import Content from './Content';
import Thankyou from './Thankyou';
import SignupForm from '@components/GP/TWForm';
import DonateForm from '@components/GP/DonateForm';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import FixedCTA from '@components/GP/FixedCTA';
import SEO from './SEO';
import formContent from './form';
import * as formActions from 'store/actions/action-types/form-actions';

// import heroBannerImage from './images/gp-climate-banner.jpg';
import heroBannerImageA from './images/climatebanner_web.jpg';
import heroBannerImageAMobile from './images/climatebanner_mobile.jpg';
import heroBannerImageB from './images/climatebanner2_web.jpg';
import heroBannerImageBMobile from './images/climatebanner2_mobile.jpg';

function Index({ status, theme, setFormContent, signup }) {
  const { submitted } = status;
  const { FirstName } = signup;
  const themeInterests = theme.interests;

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
      <div className="banner-a">
        {submitted ? (
          <ThanksBanner
            defaultImage={heroBannerImageA}
            content={{
              title: `${
                FirstName ? FirstName : '綠色和平支持者'
              }，謝謝您參與這次的連署`,
              description: ['能更進一步支持我們的氣候行動嗎？'],
            }}
            imageSrcset={[
              {
                media: '(min-width: 48em)',
                srcset: heroBannerImageA,
              },
              {
                media: '',
                srcset: heroBannerImageAMobile,
              },
            ]}
          />
        ) : (
          <HeroBanner
            defaultImage={heroBannerImageA}
            content={{
              title: '<b>立即連署<br/>您能扭轉氣候危機</b>',
              description: [''],
            }}
            imageSrcset={[
              {
                media: '(min-width: 48em)',
                srcset: heroBannerImageA,
              },
              {
                media: '',
                srcset: heroBannerImageAMobile,
              },
            ]}
          />
        )}
      </div>
      <div className="banner-b" style={{ display: 'none' }}>
        {submitted ? (
          <ThanksBanner
            defaultImage={heroBannerImageB}
            content={{
              title: `${
                FirstName ? FirstName : '綠色和平支持者'
              }，謝謝您參與這次的連署`,
              description: ['能更進一步支持我們的氣候行動嗎？'],
            }}
            imageSrcset={[
              {
                media: '(min-width: 48em)',
                srcset: heroBannerImageB,
              },
              {
                media: '',
                srcset: heroBannerImageBMobile,
              },
            ]}
          />
        ) : (
          <HeroBanner
            defaultImage={heroBannerImageB}
            content={{
              title: '<b>立即連署<br/>您能扭轉氣候危機</b>',
              description: [''],
            }}
            imageSrcset={[
              {
                media: '(min-width: 48em)',
                srcset: heroBannerImageB,
              },
              {
                media: '',
                srcset: heroBannerImageBMobile,
              },
            ]}
          />
        )}
      </div>

      <PageContainer>
        <OverflowWrapper>
          <Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
            <Box flex={1} mt={{ base: 10, sm: 60 }}>
              <ContentContainer theme={theme}>
                {submitted ? <Thankyou /> : <Content />}
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