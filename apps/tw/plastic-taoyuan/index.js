/** 
 * Dploy Setting:
 *
PROJECT=tw/plastic-taoyuan
MARKET=tw
PROJECT_NAME=plastic-taoyuan
BASEPATH=/htdocs/2022/petition/plastic-taoyuan
ASSETPREFIX=https://change.greenpeace.org.tw/2022/petition/plastic-taoyuan/
FTP_CONFIG_NAME=ftp_tw
# ******** MC Cloud Page Name ********
CLOUD_PAGE_NAME=zh-tw.2022.plastics.plastics-taoyuan.signup
*/

import React, { useEffect, useRef, useState } from 'react';
import HeroBanner from '@components/Banner/hero';
import ThanksBanner from '@components/Banner/thanks';
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
// Import helpers
import { useSignupBtnRootMargin } from '@common/utils'; 
import formContent from './form';
import * as formActions from 'store/actions/action-types/form-actions';

import heroBannerImage from './images/gp-plastic-banner.jpg';

function Index({ status, theme, setFormContent, signup }) {
  const { submitted } = status;
  const { FirstName } = signup;
  const themeInterests = theme.interests;

  const scrollToRef = (ref) =>
    ref.current?.scrollIntoView({ behavior: 'smooth' });

  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  const [signupBtnRef, setSignupBtnRef] = useState(null);
  const signupBtnRootMargin = useSignupBtnRootMargin(myRef, signupBtnRef);

  const [ref, inView] = useInView({
    threshold: 0,
    rootMargin: signupBtnRootMargin,
  });
  // mobile sticky btn show ref
  const [FormBtnref, btnInView] = useInView({
    threshold: 0,
    rootMargin: '-24px 0px 80px 0px'
  });

	

  useEffect(() => {
    setFormContent(formContent);
  }, []);

  return (
    <>
      <SEO />
      {submitted ? (
        <ThanksBanner
          bgImage={heroBannerImage}
          content={{
            title: `${
              FirstName ? FirstName : '綠色和平支持者'
            }，感謝您加入減塑的行列！`,
            description: [
              '塑膠污染問題，攸關全球 78 億人口。<br><br>每年估計有 1,270 萬公噸的塑膠流入海洋，代表每分每秒都有塑膠破壞我們的環境，而您的支持，將成為守護環境最有力的幫助。',
            ],
          }}
        />
      ) : (
        <HeroBanner
          bgImage={heroBannerImage}
          content={{
            title:
              '<span style="font-size:1.3em;">-1 + ∞</span><br/><b>成為臺灣減塑之光！<br>支持桃園加速推動循環消費</b>',

          }}
        />
      )}
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
                  {submitted ? <DonateForm /> : <SignupForm setSignupBtnRef={ setSignupBtnRef } />}
                </Box>
                <div ref={ FormBtnref }></div>
              </FormContainer>
            </Box>
          </Flex>
        </OverflowWrapper>
      </PageContainer>
      <PetitionFooter locale={'TWChinese'} />
      {((!submitted && !inView) || (submitted && !btnInView)) && (
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
