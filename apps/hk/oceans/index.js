import React, { useEffect, useRef } from 'react';
import HeroBanner from '@components/Banner/hero';
import ThanksBanner from '@components/Banner/thanks';
import PageContainer from '@containers/pageContainer';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
import Content from './Content';
import Thankyou from './Thankyou';
import SignupForm from '@components/GP/HKForm';
import DonateForm from '@components/GP/HKForm/donate';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Box, Flex } from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import SEO from './SEO';
import FixedCTA from '@components/GP/FixedCTA';
import formContent from './form';
import * as formActions from 'store/actions/action-types/form-actions';

import heroBannerImage from './images/GP1SUB1C_PressMedia.jpg';

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
            } 感謝您加入守護海洋行列！`,
            description: [
              "感謝您聯署支持成立全球海洋保護區與訂立《全球海洋公約》。<br/>您的聯署已經壯大了全球守護海洋力量，我們將一起實現保護、維持、復育海洋健康的理想。<br/><br/>此刻是拯救海洋的關鍵時機——我們將推動各地領袖訂立《全球海洋公約》，並在2030年前成立全球海洋保護區，保護至少30%海洋。《全球海洋公約》與全球海洋保護區是保護海洋的完善機制，在保護區內，所有對海洋有害的活動都將被禁止，已受破壞的海洋生態系統與環境能夠休養並得以復育。人類社會與地球生態均依賴海洋運作，因此守護海洋，刻不容緩。<br/><br/>您的聯署為守護海洋工作提供了強大力量。我們邀請您繼續關注保護海洋議題，<a href='https://www.greenpeace.org/hongkong/issues/oceans/update/1706/' target='_blank'><u>了解更多《全球海洋公約》資訊</u></a>，以及透過專欄認識<a href='https://www.greenpeace.org/hongkong/issues/health/update/1287/%e9%bb%83%e5%bf%97%e4%bf%8a%ef%bc%9a%e5%bc%b1%e5%8b%a2%e6%b5%b7%e6%b4%8b%e8%a6%81%e5%a4%a7%e5%ae%b6%e7%99%bc%e8%81%b2%e5%ae%88%e8%ad%b7/' target='_blank'><u>更多守護海洋的同路人故事</u></a>。",
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
            title: '請即聯署<br/>支持2030年前<br/>成立至少30%海洋保護區',
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
