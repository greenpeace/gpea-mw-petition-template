import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
import dynamic from 'next/dynamic';
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Center,
  SimpleGrid,
  Textarea,
  Image,
} from '@chakra-ui/react';
import useImage from './useImage';
import * as surveyActions from 'store/actions/action-types/survey-actions';

import bgImage from './images/questionLayers/Q1/背景圖Q1.jpg';
import bgImage02 from './images/questionLayers/Q1/極光Q1.png';
import bgImage03 from './images/questionLayers/Q1/冰山Q1.png';

const Quiz = ({
  setSurveyPage,
  quiz,
  answer,
  setSurveyAnswer,
  current,
  setCurrentQuiz,
}) => {
  const currentQuiz = quiz[current];
  const freeTextRef = useRef(null);
  const showFreeText = current === 4 && answer[current]?.toString() === '5';
  const { loading, error, image } = useImage(currentQuiz?.image);

  const DynamicBg = dynamic(() =>
    import(`apps/${process.env.project}/Background/Bg${currentQuiz.id}`),
  );

  const scrollToRef = (ref) =>
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  const executeScroll = () => scrollToRef(freeTextRef);

  useEffect(() => {
    if (showFreeText) {
      executeScroll();
    }
  }, [showFreeText]);

  const handleBackButton = () => {
    if (current === 0) {
      setSurveyPage('landing');
    } else {
      setCurrentQuiz((current -= 1));
    }
  };

  const handleNextButton = () => {
    if (current + 1 >= quiz.length) {
      setSurveyPage('checkResult');
    } else {
      setCurrentQuiz((current += 1));
    }
  };

  console.log('DynamicBg-', DynamicBg);

  return (
    <Box>
      <Container
        maxW={'2xl'}
        h={'100%'}
        w={'100%'}
        pt={'20px'}
        pos={`relative`}
        zIndex={10}
      >
        <Center h={'100%'}>
          <Stack w="100%" spacing={6} direction="column">
            <Box bgColor={'#025177'} borderRadius={'8px'} p={4}>
              <Center>
                <Heading fontSize={{ base: 'xl', md: 'xl' }} color={'#FFF'}>
                  找出隱藏在您潛意識中的極地動物！10題測出您的性格與習慣
                </Heading>
              </Center>
            </Box>

            <Flex
              direction="row"
              align={'center'}
              justifyContent={'space-between'}
            >
              <Box cursor={'pointer'} onClick={() => handleBackButton()}>
                上一頁
              </Box>
              <Box flex={1} mx={12}>
                <Flex
                  direction="row"
                  spacing={1}
                  w={'100%'}
                  justifyContent={'space-between'}
                >
                  {quiz.map((d, i) => (
                    <Box
                      key={i}
                      bgColor={
                        currentQuiz.id === (i + 1).toString()
                          ? '#025177'
                          : '#FFF'
                      }
                      borderRadius={'50%'}
                      w={'10px'}
                      h={'10px'}
                    />
                  ))}
                </Flex>
              </Box>
              <Box>
                <Text fontSize={'xl'}>
                  <Text as="span" fontWeight={'bold'} fontSize={'3xl'}>
                    {current + 1}
                  </Text>{' '}
                  / {quiz.length}
                </Text>
              </Box>
            </Flex>

            <Box bgColor={'#FFF'} borderRadius={'8px'} p={4} boxShadow>
              <Center>
                <Heading fontSize={{ base: 'xl', md: 'xl' }} color={'#025177'}>
                  {currentQuiz?.question.label}
                </Heading>
              </Center>
            </Box>

            <Box>
              <Image src={image} borderRadius={'8px'} />
            </Box>

            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              dangerouslySetInnerHTML={{ __html: currentQuiz?.content.label }}
            ></Text>
            <SimpleGrid
              alignItems="stretch"
              minChildWidth={{ base: '200px' }}
              spacing={4}
            >
              {currentQuiz?.options?.map((d, i) => {
                let getCurrentAnswers = answer[current] || [];
                const selected = getCurrentAnswers.indexOf(d.value) > -1;
                const lastOption = d.value === 'clear';
                return (
                  <Box
                    key={i}
                    px={4}
                    py={4}
                    border="1px"
                    borderColor="gray.400"
                    borderRadius={'8px'}
                    bgColor={selected ? 'theme.plastics' : '#025177'}
                    color={selected ? 'white' : 'white'}
                    cursor="pointer"
                    fontSize="base"
                    transition="0.2s ease"
                    onClick={async () => {
                      // const index = getCurrentAnswers.indexOf(d.value);

                      // Case 0: last question
                      if (currentQuiz.maximum === 1) {
                        setSurveyAnswer({
                          index: current,
                          value: [d.value],
                        });
                        setTimeout(() => handleNextButton(), 100);
                        return;
                      }
                    }}
                  >
                    <Center h="100%">
                      <Text
                        letterSpacing="1px"
                        dangerouslySetInnerHTML={{ __html: d.label }}
                      ></Text>
                    </Center>
                  </Box>
                );
              })}
            </SimpleGrid>

            {/* <Flex direction="row" justifyContent="space-between">
              <Button
                variant="reset"
                bgColor={'#FFEFBA'}
                borderRadius={'full'}
                size="lg"
                minWidth="120px"
                onClick={() => handleBackButton()}
                _hover={{ boxShadow: '#FFEFBA 0px 0px 12px' }}
              >
                返回
              </Button>
              <Button
                variant="subCTA"
                disabled={
                  answer[current]?.length === undefined ||
                  answer[current]?.length === 0
                }
                onClick={() => handleNextButton()}
              >
                下一條
              </Button>
            </Flex> */}
          </Stack>
        </Center>
      </Container>
      {/* <Box>
      <Image
        w="100%"
        h="100%"
        top={0}
        objectFit={'cover'}
        bgImage={bgImage02}
        position="absolute"
        zIndex={2}
      />

      <Image
        w="100%"
        h="100%"
        top={0}
        objectFit={'cover'}
        bgImage={bgImage03}
        position="absolute"
        zIndex={1}
      />

      <Image
        w="100%"
        h="100%"
        top={0}
        objectFit={'cover'}
        bgImage={bgImage}
        position="absolute"
        zIndex={-1}
      />
      </Box> */}
      <DynamicBg />
    </Box>
  );
};

const mapStateToProps = ({ status, survey }) => {
  return { status, answer: survey.data, current: survey.current };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSurveyAnswer: (data) => {
      dispatch({ type: surveyActions.SET_SURVEY_ANSWER, data });
    },
    setCurrentQuiz: (data) => {
      dispatch({ type: surveyActions.SET_SURVEY_QUIZ, data });
    },
    setSurveyPage: (data) => {
      dispatch({ type: surveyActions.SET_SURVEY_PAGE, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
