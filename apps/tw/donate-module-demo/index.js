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
import DonationModule from '@components/GP/DonationModule';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter } from 'react-icons/fa';
import FixedCTA from '@components/GP/FixedCTA';
import SEO from './SEO';
import formContent from './form';
import * as formActions from 'store/actions/action-types/form-actions';

import heroBannerImage from './images/banner.jpg';
import heroBannerImageMobile from './images/banner.jpg';

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
      <div>
        {submitted ? (
          <ThanksBanner
            defaultImage={heroBannerImage}
            content={{
              title: `${
                FirstName ? FirstName : '綠色和平支持者'
              }，請收下海洋捎來的謝意`,
              description: [
                '能不能多幫海洋一個忙？<br/>邀請您的朋友、家人、同事一起支持全球海洋保護區',
              ],
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
              title: '現在連署<br/><b>您能保護 30% 全球海洋</b>',
              description: [''],
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
              <ContentContainer theme={theme}>
                {submitted ? <Thankyou /> : <Content />}
              </ContentContainer>
            </Box>
            <Box flex={1} ref={myRef}>
              <FormContainer>
                <Box ref={ref}>
                  {submitted ? (
                    <DonationModule
                      market={theme.Market}
                      language={'zh_TW'}
                      campaign={'oceans'}
                      // campaignId={''}
                      env={'test'}
                      moduleUrl={
                        'https://api.greenpeace.org.hk/2022/donate-module/main.js'
                      }
                    />
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
