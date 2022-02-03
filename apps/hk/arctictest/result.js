import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import {
  Box,
  Stack,
  Text,
  Heading,
  Flex,
  Image,
  useDisclosure,
  useMediaQuery,
  Grid,
  GridItem,
} from '@chakra-ui/react';
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
  // const scrollToRef = (ref) =>
  //   ref.current?.scrollIntoView({ behavior: 'smooth' });
  // const { ref, inView } = useInView({
  //   threshold: 0,
  // });
  const myRef = useRef(null);
  // const executeScroll = () => scrollToRef(myRef);
  const [result, setResult] = useState([]);
  const [bgElementHeight, setBgElementHeight] = useState(null);
  const { loading, error, image } = useImage(RESULT[result[0]?.el]?.image);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    setFormContent(formContent);
    setAnswerToSubmitForm({
      ...hiddenForm,
      CampaignData1__c: result[0]?.el,
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

  useEffect(() => {
    if (myRef.current) {
      setBgElementHeight(myRef.current.clientHeight);
    }
  }, [myRef.current]);

  const handleOnClick = () => {
    if (isLargerThan768) {
      return;
    }
    if (isOpen) {
      return;
    } else {
      onOpen();
    }
  };

  return (
    <>
      <Box pos={'relative'}>
        <PageContainer>
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
            gap={0}
            position={'relative'}
            zIndex={2}
          >
            <GridItem w="100%" pos={'relative'}>
              <Box ref={myRef}>
                <Box
                  py={8}
                  px={4}
                  zIndex={4}
                  pos={'relative'}
                  maxWidth={'720px'}
                >
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
                    <Image src={image} maxWidth={'320px'} />
                    <Text
                      as="p"
                      dangerouslySetInnerHTML={{
                        __html: RESULT[result[0]?.el]?.content,
                      }}
                    />
                  </Stack>
                </Box>
              </Box>
              <Box maxWidth={'720px'}>
                <Box flex={1}>
                  {submitted ? (
                    <ContentContainer theme={theme}>
                      <Box>內容</Box>
                    </ContentContainer>
                  ) : (
                    <ContentContainer theme={theme}>
                      <ContentResult />
                    </ContentContainer>
                  )}
                </Box>
              </Box>
            </GridItem>
            <GridItem w="100%">
              <Box
                zIndex={9}
                position={{ base: 'fixed', md: 'sticky' }}
                bottom={{ base: -2, md: 'auto' }}
                top={{ base: 'auto', md: 20 }}
                right={{ base: 'auto', md: 10 }}
                // h={isOpen ? '520px' : '170px'}
                onClick={() => handleOnClick()}
              >
                <FormContainer>
                  {isOpen && (
                    <Flex
                      justify="flex-end"
                      position="absolute"
                      right={6}
                      top={2}
                    >
                      <Box onClick={() => onClose()}>X</Box>
                    </Flex>
                  )}
                  <Box>{submitted ? <DonateForm /> : <SignupForm />}</Box>
                </FormContainer>
              </Box>
            </GridItem>
          </Grid>
        </PageContainer>

        <Image
          top={0}
          w={'100%'}
          h={bgElementHeight}
          cursor={'pointer'}
          position="absolute"
          bgColor={'rgba(255,255,255,0.2)'}
          zIndex={1}
          src={bgPlasticsImage}
        />
      </Box>
      <PetitionFooter locale={'HKChinese'} />
    </>
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
