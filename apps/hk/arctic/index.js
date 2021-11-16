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
import { Box, Flex, Button } from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import FixedCTA from '@components/GP/FixedCTA';
import SEO from './SEO';
import formContent from './form';
import * as formActions from 'store/actions/action-types/form-actions';

import heroBannerImage from './images/GP02HUY_High_res.jpg';

function Index({ status, theme, setFormContent }) {
  const { submitted } = status;

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
            title: '感謝您的加入！',
            description: [
              '綠色和平堅持以行動守護北極，揭露並制止企業與政府，在北極鑽油與過度捕撈惡行、推動全球攜手淘汰化石能源，將升溫控制至1.5°C，守護北極，減輕北極熊生存壓力。',
              '綠色和平堅持不接受政商界捐助，因為您，綠色和平得以維持環境工作的公正獨立性，懇請您今天就以每月$100（約每日$3）小額捐助，支持守護北極全球行動！',
            ],
            inviteMessage: '邀請您的朋友一同參與:',
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
            title: '守護北極，全球行動！',
            description: [
              '過去數十年，北極在全球暖化下，已損失三分之二的海冰體積，北極熊的數量亦減少近一半。失去海冰屏障，加上北極海洋不到1.5%範圍得到正式保護，石油公司、工業捕漁船可以不分季節，直入北極奪取資源。',
              '綠色和平正爭取訂立「全球海洋公約」，將北極地區設為優先保護區，以嚴格管制、禁止各國進行鑽油、捕魚等活動，同時推動全球氣候改革以控制升溫於 1.5℃ 內。守護北極生態、北極熊的唯一棲所，請即加入聯署，為北極發聲！',
            ],
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
