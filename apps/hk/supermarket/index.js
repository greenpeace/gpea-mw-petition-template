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
import SignupForm from '@components/GP/HKForm';
import DonateForm from '@components/GP/DonateForm';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import SEO from './SEO';
import FixedCTA from '@components/GP/FixedCTA';
import formContent from './form';
import * as formActions from 'store/actions/action-types/form-actions';

import heroBannerImage from './images/R0032770_16_9.jpg';

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
          bgImage={heroBannerImage}
          content={{
            title: `${
              FirstName ? FirstName : '綠色和平支持者'
            }，感謝您加入守護海洋行列！`,
            description: [
              '感謝您聯署支持成立全球海洋保護區與訂立《全球海洋公約》。',
            ],
            inviteMessage:
              '<b>(Only for TY page without donate box.)</b><br/>您的聯署已經壯大了全球守護海洋力量，我們將一起實現保護、維持、復育海洋健康的理想。邀請您的朋友一同參與：',
            shareLink: [
              {
                shareComponent: (
                  <Icon as={FaInstagram} color={`theme.${themeInterests}`} />
                ),
                link: '#',
              },
              {
                shareComponent: (
                  <Icon as={FaFacebook} color={`theme.${themeInterests}`} />
                ),
                link: '#',
              },
              {
                shareComponent: (
                  <Icon as={FaWhatsapp} color={`theme.${themeInterests}`} />
                ),
                link: '#',
              },
              {
                shareComponent: (
                  <Icon as={FaTwitter} color={`theme.${themeInterests}`} />
                ),
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
            title: '推動超市走塑<br/>急需您我行動',
            description: [''],
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
                  {submitted ? <DonateForm /> : <SignupForm />}
                </Box>
              </FormContainer>
            </Box>
          </Flex>
        </OverflowWrapper>
      </PageContainer>
      <PetitionFooter locale={'HKChinese'} />
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
