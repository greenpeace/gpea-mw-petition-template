import React, { useEffect, useRef } from 'react';
import HeroBanner from '@components/Banner/hero';
import ThanksBanner from '@components/Banner/thanks';
import PageContainer from '@containers/pageContainer';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
import Content from './Content';
import Thankyou from './Thankyou';
import Message from '@components/Footer/message';
import OtherInformation from '@components/Footer/otherInformation';
import SignupForm from '@components/GP/HKForm';
import DonateForm from '@components/GP/HKForm/donate';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Button } from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import { FixedCTA } from '@components/GP/FixedCTA';
import SEO from './SEO';
import formContent from './form';
import * as formActions from 'store/actions/action-types/form-actions';

import heroBannerImage from './images/e0d0bb1a-e0d0bb1a-gp0storn2_web_size_with_credit_line.jpg';

function Index({ status, theme, setFormContent }) {
  const { submitted } = status;

  const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

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
            title: 'Thank you for signing the petition, {FIRST_NAME}',
            description: [
              "Do even more to protect the world's oceans by donating.",
            ],
            inviteMessage: '邀請您的朋友一同參與:',
            shareLink: [
              {
                shareComponent: <FaInstagram fontSize={12} color={`#66cc00`} />,
                link: '#',
              },
              {
                shareComponent: <FaFacebook fontSize={12} color={`#66cc00`} />,
                link: '#',
              },
              {
                shareComponent: <FaWhatsapp fontSize={12} color={`#66cc00`} />,
                link: '#',
              },
              {
                shareComponent: <FaTwitter fontSize={12} color={`#66cc00`} />,
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
            title:
              "Sign the petition to <b>PROTECT 30% OF THE WORLD's OCEANS.</b>",
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
      <PetitionFooter locale={'HKEnglish'} />
      {/* Pending */}
      {/* {!isNotSmallerScreen && !inView && !submitted && (
        <FixedCTA onClick={executeScroll}>{formContent.submit_text}</FixedCTA>
      )} */}
    </>
  );
}

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormContent: (data) => {
      dispatch({ type: formActions.SET_FORM, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
