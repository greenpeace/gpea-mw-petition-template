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
import formContent from './form';
import * as formActions from 'store/actions/action-types/form-actions';

import heroBannerImage from './images/banner.png';

function Index({
  status,
  theme,
  setFormContent,
  form,
  signup,
  setSignupNumbers,
}) {
  // get global response number
  
  const [globalNum, setGlobalNum] = useState(0);
  useEffect(() => {
    //console.log('>============start================');
    //setGlobalNum(541);
    fetch('https://global-petition-counter-v2.appspot.com/api/campaign/protect-oceans-2019')
    .then((response) => {
      return response.json()
    }).then((res) => {
      console.log(res)
      setGlobalNum(res.unique_count);
      
    }).catch((error) => {
      console.log(`Error: ${error}`);
    });
  }, [])
  
  useEffect(() => {
    //console.log('>============================');
    let newData = form.signupNumbers;

    if (form.signupNumbers.tw.Id && !form.signupNumbers.tw.NumberOfResponsesLocal && globalNum > 0) {
      
      //if(globalNum > 0){
        console.log('**************************');
        newData.tw.NumberOfResponsesLocal = form.signupNumbers.tw.NumberOfResponses;
        let numResponses = globalNum + Number(form.signupNumbers.tw.NumberOfResponsesLocal);
        newData.tw.NumberOfResponses = String(numResponses);
        let numSignupTarget = 0;
        switch (true) {
          case numResponses < 1000:
            numSignupTarget = 5000;
            break;
          case numResponses >= 1000 && numResponses < 5000:
            numSignupTarget = 10000;
            break;
          case numResponses >= 5000 && numResponses < 10000:
            numSignupTarget = 20000;
            break;
          case numResponses >= 10000 && numResponses < 50000:
            numSignupTarget = 100000;
            break;
          case numResponses >= 50000 && numResponses < 150000:
            numSignupTarget = 200000;
            break;
          case numResponses >= 150000 && numResponses < 200000:
            numSignupTarget = 250000;
            break;
          case numResponses >= 200000 && numResponses < 300000:
            numSignupTarget = 350000;
            break;
          case numResponses >= 300000 && numResponses < 400000:
            numSignupTarget = 450000;
            break;
          case numResponses >= 400000 && numResponses < 500000:
            numSignupTarget = 550000;
            break;
          case numResponses >= 500000 && numResponses < 1000000:
            numSignupTarget = 1000000;
            break;
          case numResponses >= 1000000 && numResponses < 2000000:
            numSignupTarget = 2000000;
            break;
          case numResponses >= 2000000 && numResponses < 3000000:
            numSignupTarget = 3000000;
            break;
          case numResponses >= 3000000 && numResponses < 4000000:
            numSignupTarget = 4000000;
            break;
          case numResponses >= 4000000 && numResponses < 5000000:
            numSignupTarget = 5000000;
            break;
          case numResponses >= 5000000 && numResponses < 6000000:
            numSignupTarget = 6000000;
            break;
          case numResponses >= 6000000 && numResponses < 7000000:
            numSignupTarget = 7000000;
            break;
          case numResponses >= 8000000 && numResponses < 9000000:
            numSignupTarget = 9000000;
            break;
          case numResponses >= 9000000 && numResponses < 10000000:
            numSignupTarget = 10000000;
            break;
          default:
            numSignupTarget = 20000000;
        }
        newData.tw.Petition_Signup_Target__c = numSignupTarget.toString();
        //console.log(form,newData,res.unique_count)
        setSignupNumbers(newData);
      //}
    }
  }, [form,globalNum]);

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
            }，請收下海洋捎來的謝意`,
            description: [
              '能不能多幫海洋一個忙？<br/>邀請您的朋友、家人、同事一起支持全球海洋保護區',
            ],
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

const mapStateToProps = ({ status, theme, signup, form }) => {
  return { status, theme: theme.data, signup: signup.data, form: form };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormContent: (data) => {
      dispatch({ type: formActions.SET_FORM, data });
    },
    setSignupNumbers: (data) => {
      dispatch({ type: formActions.SET_SIGNUP_NUMBERS, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
