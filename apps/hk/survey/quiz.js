import React, { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { connect } from 'react-redux';
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
} from '@chakra-ui/react';
import * as surveyActions from 'store/actions/action-types/survey-actions';

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
  const [isFreeTextError, setFreeTextError] = useState(false);

  const scrollToRef = (ref) =>
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  const { ref, inView } = useInView({
    threshold: 0,
  });
  const executeScroll = () => scrollToRef(freeTextRef);

  useEffect(() => {
    setFreeTextError(false);

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
    if (current === 4 && showFreeText) {
      if (!freeTextRef.current?.value) {
        setFreeTextError(true);
        return;
      } else {
        setFreeTextError(false);
        setSurveyAnswer({
          index: current,
          value: [freeTextRef.current?.value],
        });
        setSurveyPage('result');
      }
    }

    if (current + 1 >= quiz.length) {
      setSurveyPage('result');
    } else {
      setCurrentQuiz((current += 1));
    }
  };

  return (
    <Box h={{ base: '100%', sm: '100vh' }} mt={{ base: 0, sm: '-55px' }}>
      <Container maxW={'4xl'} h={'100%'} w={'100%'} pt={'20px'} pb={'100px'}>
        <Center h={'100%'}>
          <Stack w="100%" spacing={6}>
            <Box alignSelf={'flex-start'} color={'theme.plastics'}>
              <Text fontSize={'xl'}>
                <Text as="span" fontWeight={'bold'} fontSize={'4xl'}>
                  0{current + 1}
                </Text>{' '}
                / {quiz.length}
              </Text>
            </Box>
            <Heading>{currentQuiz?.question.label}</Heading>
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              dangerouslySetInnerHTML={{ __html: currentQuiz?.content.label }}
            ></Text>
            <SimpleGrid
              alignItems="stretch"
              minChildWidth={{ base: '120px', sm: '240px' }}
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
                    borderRadius={'4px'}
                    bgColor={
                      selected ? 'theme.plastics' : 'rgba(255,255,255,0.85)'
                    }
                    color={selected ? 'white' : 'gray.900'}
                    cursor="pointer"
                    fontSize="base"
                    transition="0.2s ease"
                    onClick={async () => {
                      const index = getCurrentAnswers.indexOf(d.value);

                      // Case 0: last question
                      if (currentQuiz.maximum === 1) {
                        setSurveyAnswer({
                          index: current,
                          value: [d.value],
                        });
                        return;
                      }

                      if (selected) {
                        // Case 1: Selected => unSelected
                        getCurrentAnswers.splice(index, 1);
                        setSurveyAnswer({
                          index: current,
                          value: getCurrentAnswers,
                        });
                      } else {
                        // Case 2: Reach maximum select items
                        if (getCurrentAnswers.length >= currentQuiz.maximum) {
                          return;
                        }
                        if (lastOption) {
                          setSurveyAnswer({
                            index: current,
                            value: [d.value],
                          });
                          return;
                        }
                        // Case 3: unSelected => Selected
                        let newArr = [...getCurrentAnswers, d.value];
                        newArr = await newArr.filter((d) => d != 'clear');
                        setSurveyAnswer({ index: current, value: newArr });
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
            {showFreeText && (
              <Textarea
                isInvalid={isFreeTextError}
                ref={freeTextRef}
                bgColor={'white'}
                placeholder={'留下您的想法...'}
              />
            )}
          </Stack>
        </Center>
      </Container>

      <Box
        position={'fixed'}
        bottom={0}
        left={0}
        w={'100%'}
        px={4}
        py={4}
        bgColor={'rgba(255,255,255,0.95)'}
        style={{ boxShadow: '0px 0px 16px rgb(30 1 40 / 16%)' }}
      >
        <Container maxW={'4xl'}>
          <Flex direction="row" justifyContent="space-between">
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
          </Flex>
        </Container>
      </Box>
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
