
/**
 * Deploy setting
# Project Apps Directory: /apps/{PROJECT}
PROJECT=tw/drtv
MARKET=tw
PROJECT_NAME=drtv
BASEPATH=/htdocs/2022/donation/drtv-bankin-followup
ASSETPREFIX=https://change.greenpeace.org.tw/2022/donation/drtv-bankin-followup/
FTP_CONFIG_NAME=ftp_tw 
# ******** MC Cloud Page Name ********
CLOUD_PAGE_NAME=drtv-bankin-followup
*/
import React, { useEffect, useRef } from 'react';
import HeroBanner from '@components/Banner/hero';
import ThanksBanner from '@components/Banner/thanks';
import PageContainer from '@containers/pageContainer';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
import Content from './Content';
import Thankyou from './Thankyou';
import DRTVForm from '@components/GP/DRTVForm';
import DonateForm from '@components/GP/DonateForm';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import FixedCTA from '@components/GP/FixedCTA';
import SEO from './SEO';
import formContent from './form';
import hiddenForm from './hiddenForm';
import * as formActions from 'store/actions/action-types/form-actions';
import * as hiddenFormActions from 'store/actions/action-types/hidden-form-actions';

import heroBannerImage from './images/GP1SUB1C_PressMedia.jpg';

function Index({ status, theme, setFormContent, setHiddenForm, signup }) {
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

  useEffect(() => {
    setHiddenForm(hiddenForm);
  }, []);

  return (
    <>
      <SEO />
      {/* {submitted ? (
        <ThanksBanner
          bgImage={heroBannerImage}
          content={{
            title: `${
              FirstName ? FirstName : '綠色和平支持者'
            }，謝謝您參與這次的連署`,
            description: ['能更進一步支持我們的海洋行動嗎？'],
          }}
        />
      ) : (
        <HeroBanner
          bgImage={heroBannerImage}
          content={{
            title: '現在連署<br/><b>您能保護 30% 全球海洋</b>',

          }}
        />
      )} */}
      <PageContainer>
        {/* <OverflowWrapper> */}
        <Box ref={ref} maxW={'640px'} mx={'auto'}>
          <DRTVForm />
        </Box>
        {/* <Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
            <Box flex={1} mt={{ base: 10, sm: 60 }}>
              <ContentContainer theme={theme}>
                {submitted ? <Thankyou /> : <Content />}
              </ContentContainer>
            </Box>
            <Box flex={1} ref={myRef}>
              <FormContainer>
                <Box ref={ref}>
                  <DRTVForm />
                </Box>
              </FormContainer>
            </Box>
          </Flex> */}
        {/* </OverflowWrapper> */}
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
    setHiddenForm: (value) => {
      dispatch({ type: hiddenFormActions.SET_HIDDEN_FORM, data: value });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
