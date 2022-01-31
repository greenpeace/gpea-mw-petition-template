import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import { Box, Stack, Text, Heading, Flex, Image } from '@chakra-ui/react';
import PetitionFooter from '@containers/petitionFooter';
import FormContainer from '@containers/formContainer';
import PageContainer from '@containers/pageContainer';
import ContentContainer from '@containers/contentContainer';
import formContent from './form';
import RESULT from './result.json';
import useImage from './useImage';
import LazyShow from './Components/LazyShow';
import * as formActions from 'store/actions/action-types/form-actions';
import * as hiddenFormActions from 'store/actions/action-types/hidden-form-actions';

import bgPlasticsImage from './images/questionLayers/Q1/背景圖Q1.jpg';

const ContentResult = dynamic(() => import('./resultContent/contentResult'));
const DonateForm = dynamic(() => import('@components/GP/DonateForm'));
const SignupForm = dynamic(() => import('@components/GP/WebinarForm'));

function Index({
  status,
  theme,
  setFormContent,
  answer,
  hiddenForm,
  setAnswerToSubmitForm,
}) {
  const { submitted } = status;
  const scrollToRef = (ref) =>
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const myRef = useRef(null);
  const executeScroll = () => scrollToRef(myRef);
  const [result, setResult] = useState([]);
  const { loading, error, image } = useImage(RESULT[result[0]?.el]?.image);

  useEffect(() => {
    setFormContent(formContent);
    setAnswerToSubmitForm({
      ...hiddenForm,
      CampaignData1__c: answer[0]?.toString().replace('clear', '5'),
      // CampaignData2__c: answer[1]?.toString().replace('clear', '5'),
      // CampaignData3__c: answer[2]?.toString().replace('clear', '5'),
      // CampaignData4__c: answer[3]?.toString().replace('clear', '5'),
      // CampaignData5__c: answer[4]?.toString().replace('clear', '5'),
    });
  }, []);

  useEffect(() => {
    if (!answer) {
      return;
    }
    const calAnswer = Object.values(answer)
      .map((item) => item.toString())
      .reduce(
        (b, c) => (
          (
            b[b.findIndex((d) => d.el === c)] ||
            b[b.push({ el: c, count: 0 }) - 1]
          ).count++,
          b
        ),
        [],
      )
      .sort((a, b) => (a.count > b.count ? -1 : 1));

    setResult(calAnswer);
  }, [answer]);

  return (
    <Box position={'relative'}>
      {/* <Box zIndex={9} position={{base: 'fixed', md: 'sticky'}} bottom={{base: -2, md: 'initial'}}>
        <FormContainer>
          <Box ref={ref}>{submitted ? <DonateForm /> : <SignupForm />}</Box>
        </FormContainer>
      </Box> */}

      <Box pos={'relative'} zIndex={2}>
        <PageContainer>
          <Box py={8} px={4} zIndex={4} pos={'relative'} maxWidth={'720px'}>
            <Stack spacing="4" direction={{ base: 'column' }}>
              <Heading
                as="h1"
                fontSize={{
                  base: 'var(--text-xl)',
                  md: 'var(--text-2xl)',
                }}
                color="white"
                mb={4}
                dangerouslySetInnerHTML={{
                  __html: '感謝您參與問卷調查！',
                }}
              />
              <Text as="p" color="white">
                您的參與意義重大，協助綠色和平塑膠污染問題尋找出路！
              </Text>
              <Image src={image} />
              <Text
                as="p"
                dangerouslySetInnerHTML={{
                  __html: RESULT[result[0]?.el]?.content,
                }}
              />
            </Stack>
          </Box>
        </PageContainer>

        <Image
          w="100%"
          h="100%"
          objectFit={'cover'}
          src={bgPlasticsImage}
          cursor={'pointer'}
          position="absolute"
          top={0}
          bottom={0}
        />
      </Box>
      <PageContainer>
        <Box maxWidth={'720px'}>
          <Box flex={1}>
            {submitted ? (
              <ContentContainer theme={theme}>
                <Box>內容</Box>
                {/* {(() => {
                  switch (getFinalAnswer) {
                    case '1':
                      return <ContentA />;
                    case '2':
                      return <ContentB />;
                    case '3':
                      return <ContentC />;
                    case '4':
                      return <ContentD />;
                    case '5':
                      return <ContentE />;
                    default:
                      return <ContentE />;
                  }
                })()} */}
              </ContentContainer>
            ) : (
              <ContentContainer theme={theme}>
                <ContentResult />
              </ContentContainer>
            )}
          </Box>
        </Box>
      </PageContainer>

      <Box
        zIndex={9}
        position={{ base: 'fixed' }}
        bottom={{ base: -2, md: 'auto' }}
        top={{ base: 'auto', md: 20 }}
        right={{ base: 'auto', md: 10 }}
      >
        <FormContainer>
          <Box ref={ref}>{submitted ? <DonateForm /> : <SignupForm />}</Box>
        </FormContainer>
      </Box>

      <PetitionFooter locale={'HKChinese'} />
    </Box>
  );
}

const mapStateToProps = ({ status, theme, signup, survey, hiddenForm }) => {
  return {
    status,
    answer: survey.data,
    theme: theme.data,
    signup: signup.data,
    hiddenForm: hiddenForm.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormContent: (data) => {
      dispatch({ type: formActions.SET_FORM, data });
    },
    setAnswerToSubmitForm: (data) => {
      dispatch({ type: hiddenFormActions.SET_HIDDEN_FORM, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
