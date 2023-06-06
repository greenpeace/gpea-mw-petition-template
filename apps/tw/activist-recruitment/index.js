/**
 * Deploy setting
# Project Apps Directory: /apps/{PROJECT}
PROJECT=tw/activist-recruitment
MARKET=tw
PROJECT_NAME=activist-recruitment
BASEPATH=/htdocs/2022/zh-TW.2022.activist-recruitment.signup
ASSETPREFIX=https://change.greenpeace.org.tw/2022/zh-TW.2022.activist-recruitment.signup/
FTP_CONFIG_NAME=ftp_tw 
*/

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
// import DonateForm from '@components/GP/DonateForm';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import FixedCTA from '@components/GP/FixedCTA';
import SEO from './SEO';
import formContent from './form';
import * as formActions from 'store/actions/action-types/form-actions';

import heroBannerImage from './images/banner.jpg';
import heroBannerImageMobile from './images/banner_for_mobile.jpg';

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

      {submitted ? (
        <ThanksBanner
          content={{
            title: `${
              FirstName ? FirstName : '綠色和平支持者'
            }感謝您跨出<br/>成為環境行動者的第一步！`,
            description: [
              '我們已收到您的報名資訊，將於舉辦行動者說明會前以信件方式聯繫您。',
            ],
          }}
          defaultImage={heroBannerImage}
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
          content={{
            title: '<b>用行動愛地球！<br/>你也能成為<br/>綠色和平行動者</b>',

          }}
          defaultImage={heroBannerImage}
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

      <PageContainer>
        <OverflowWrapper>
          <Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
            <Box
              flex={1}
              mt={!submitted ? { base: 10, md: 60 } : { base: 65, md: 60 }}
            >
              <ContentContainer theme={theme}>
                {submitted ? <Thankyou /> : <Content />}
              </ContentContainer>
            </Box>
            {!submitted && (
              <Box flex={1} ref={myRef}>
                <FormContainer>
                  <Box ref={ref}>
                    <SignupForm />
                  </Box>
                </FormContainer>
              </Box>
            )}
          </Flex>
        </OverflowWrapper>
      </PageContainer>
      <PetitionFooter locale={'TWChinese'} />
      {/* {!inView && (
        <FixedCTA onClick={executeScroll}>{formContent.submit_text}</FixedCTA>
      )} */}
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
