import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import {
  Box,
  Container,
  Stack,
  Text,
  Heading,
  Image,
  useMediaQuery,
  Grid,
  GridItem,
  Flex,
} from '@chakra-ui/react';
import PetitionFooter from '@containers/petitionFooter';
import FormContainer from '@containers/formContainer';
import PageContainer from '@containers/pageContainer';
import ContentContainer from '@containers/contentContainer';
import formContent from './form';
import RESULT from './data/result.json';
import useImage from './useImage';
import * as formActions from 'store/actions/action-types/form-actions';
import * as hiddenFormActions from 'store/actions/action-types/hidden-form-actions';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

const DonateForm = dynamic(() => import('@components/GP/DonateForm'));
const SignupForm = dynamic(() => import('@components/GP/TWForm'));

const ThankyouContent = dynamic(() => import('./resultContent/resultContent'));
//const OceanResult = dynamic(() => import('./resultContent/oceanResult'));

function Index({
  status,
  theme,
  setFormContent,
  answer,
  hiddenForm,
  setAnswerToSubmitForm,
}) {
  const { submitted } = status;
  const [isLargerThan768] = useMediaQuery('(min-width: 48em)'); // follow Chakra UI default md break point
  const [result, setResult] = useState([]);
  const [dynamicImageHeight, setDynamicImage] = useState(null);
  const [bgElementHeight, setBgElementHeight] = useState(null);
  const { loading, error, image } = useImage(RESULT[result]?.image); // animal
  const topSection = useRef(null);
  const dynamicContent = RESULT[result]?.content;

  useEffect(() => {
    setFormContent(formContent);
  }, []); // init Form

  useEffect(() => {
    setFormContent(formContent);
  }, [submitted]); // switch Form by result

  useEffect(async () => {
    if (!answer) {
      return;
    }

    const sumTotalPointArray = await Object.values(answer)
      .map((answer_item) => answer_item[1]) // get the point part
      .reduce((sum, current_point) => sum + current_point)
      .toString()
      .split('');

    // 將加總出的答案，由個位數開始取出，按照 ABCD 順序放入新陣列，並找出新陣列中，最大的數值，作為測驗結果
    const answerType = ['A', 'B', 'C', 'D'];
    let answerStringLength = sumTotalPointArray.length;
    let answerCountResults = [0, 0, 0, 0];
    for (let i = 0; i < answerStringLength && i < 4; i++) {
      let index = answerStringLength - i - 1;
      answerCountResults[i] = sumTotalPointArray[index];
    }
    console.log('answerCountResults: ' + answerCountResults);

    const maxAnswerCount = Math.max(...answerCountResults);
    const maxAnswerCountIndex = answerCountResults.indexOf(
      maxAnswerCount.toString(),
    );

    setResult(answerType[maxAnswerCountIndex]);

  }, [answer]);

  useEffect(() => {
    if (result) {
      console.log(
        'topSection.current.clientHeight: ' + topSection.current.clientHeight,
      );
      setBgElementHeight(topSection.current.clientHeight);
    }
  }, [
    topSection.current?.clientHeight,
    dynamicContent,
    dynamicImageHeight,
    submitted,
  ]);

  useEffect(() => {
    setAnswerToSubmitForm({
      ...hiddenForm,
      CampaignData1__c: result,
      CampaignData2__c: RESULT[result]?.value,
    });
  }, [result]);

  const RenderForm = () => (submitted ? <DonateForm /> : <SignupForm />);

  return (
    <>
      <Box pos={'relative'}>
        <PageContainer>
          <Grid
            templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
            gap={0}
            zIndex={2}
            flexDirection={'column-reverse'}
          >
            <GridItem w="100%">
              <Box
                px={4}
                zIndex={4}
                pos={'relative'}
                ref={topSection}
                minH={{ base: 'auto', md: '550px' }}
              >
                <Stack py={4}>
                  <Box pt={6}>
                    {submitted ? (
                      <Heading
                        {...headingProps}
                        color={'black'}
                        fontSize={{ base: '2xl', md: '3xl' }}
                        dangerouslySetInnerHTML={{
                          __html: '完整測驗結果將立即發送至你的電子信箱',
                        }}
                      />
                    ) : (
                      <Heading
                        {...headingProps}
                        color={'black'}
                        fontSize={{ base: '2xl', md: '3xl' }}
                        dangerouslySetInnerHTML={{
                          __html: '完整測驗結果圖已經發送到你電郵，Post上Story Tag埋你身邊嘅朋友/愛人一齊玩啦！',
                        }}
                      />
                    )}
                  </Box>
                  <Flex justifyContent={{ base: 'center', md: 'flex-start' }}>
                    <Box position="relative">
                      <Image
                        src={image}
                        onLoad={(e) => setDynamicImage(e.target.clientHeight)}
                        pos={'relative'}
                        w="90%"
                        p={4}
                        //maxW={{ base: '280px', md: '380px' }}
                        zIndex={2}
                      />
                    </Box>
                  </Flex>
                  <Box>
                    <Heading
                      {...headingProps}
                      color={'black'}
                      fontSize={{ base: 'xl', md: '2xl' }}
                      dangerouslySetInnerHTML={{
                        __html: RESULT[result]?.title,
                      }}
                    />
                  </Box>
                  <Box>
                    <Text
                      as="p"
                      color={'black'}
                      {...paragraphProps}
                      dangerouslySetInnerHTML={{
                        __html: RESULT[result]?.content,
                      }}
                    />
                  </Box>
                </Stack>
              </Box>
              <Box flex={1} position="relative" zIndex={3}>
                <Box py={2} d={{ base: 'block', md: 'none' }}>
                  <Container>
                    <Box
                      maxW="100%"
                      mx="auto"
                      bgColor="white"
                      borderRadius={8}
                      boxShadow="lg"
                      overflow="hidden"
                      d={{ base: 'block', md: 'none' }}
                    >
                      <RenderForm />
                    </Box>
                  </Container>
                </Box>

                {submitted && (
                  <ContentContainer theme={theme} py={4}>
                    <Box>
                      <ThankyouContent />
                    </Box>
                  </ContentContainer>
                )}
              </Box>
            </GridItem>
            <GridItem w="100%" d={{ base: 'none', md: 'block' }}>
              {submitted && (
                <Box h={`${bgElementHeight - bgElementHeight / 2}px`} />
              )}
              <Box
                zIndex={9}
                position={{ md: 'sticky' }}
                top={{ base: 'auto', md: 2 }}
                right={{ base: 0 }}
                pt={3}
              >
                <FormContainer>
                  <Box>
                    <RenderForm />
                  </Box>
                </FormContainer>
              </Box>
            </GridItem>
          </Grid>
        </PageContainer>

        {bgElementHeight && (
          <Box
            top={0}
            w={'100%'}
            h={bgElementHeight}
            position="absolute"
            bgColor={'#fffaf0'}
            zIndex={1}
          />
        )}
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

function propsAreEqual(prevState, nextState) {
  return prevState.status.submitted === nextState.status.submitted;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(Index, propsAreEqual));
