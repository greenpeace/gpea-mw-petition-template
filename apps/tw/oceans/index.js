import React, { useEffect, useRef } from 'react';
import HeroBanner from '@components/Banner/hero';
import ThanksBanner from '@components/Banner/thanks';
import PageContainer from '@containers/pageContainer';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
import Content from './Content';
import Thankyou from './Thankyou';
import SignupForm from '@components/GP/TWForm';
import DonateForm from '@components/GP/TWForm/donate';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Box, Flex } from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import FixedCTA from '@components/GP/FixedCTA';
import SEO from './SEO';
import formContent from './form';
import * as formActions from 'store/actions/action-types/form-actions';

import heroBannerImage from './images/e0d0bb1a-e0d0bb1a-gp0storn2_web_size_with_credit_line.jpg';

function Index({ status, theme, setFormContent, signup }) {
  const { submitted } = status;
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
      {submitted ? (
        <ThanksBanner
          bgImage={heroBannerImage}
          content={{
            title: `${
              FirstName ? FirstName : '綠色和平支持者'
            }，謝謝你參與這次的連署`,
            description: ['能更進一步支持我們的海洋行動嗎？'],
            inviteMessage:
              '<b>(Only for TY page without donate box.)</b><br/>能不能多幫海洋一個忙？<br/>邀請你的朋友、家人、同事一起支持全球海洋保護區',
            shareLink: [
              {
                shareComponent: <FaInstagram />,
                link: '#',
              },
              {
                shareComponent: <FaFacebook />,
                link: '#',
              },
              {
                shareComponent: <FaWhatsapp />,
                link: '#',
              },
              {
                shareComponent: <FaTwitter />,
                link: '#',
              },
            ],
            inviteInfo: '點擊預覽分享內容',
          }}
        />
      ) : (
        <HeroBanner
          bgImage={heroBannerImage}
          content={{
            title: '現在連署<br/><b>您能保護 30% 全球海洋</b>',
            description: [''],
          }}
        />
      )}
      <PageContainer>
        <Box
          py={{ base: 4 }}
          mt={{ base: -20, md: -60 }}
          pos={`relative`}
          zIndex={3}
        >
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
        </Box>
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
