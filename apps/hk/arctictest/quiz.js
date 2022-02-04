import React from 'react';
import { connect } from 'react-redux';
import dynamic from 'next/dynamic';
import {
  Stack,
  Container,
  Box,
  Heading,
  Center,
  Image,
} from '@chakra-ui/react';
import useImage from './useImage';
import QuizTop from './Components/QuizTop';
import StickyHeader from './Components/StickyHeader';
import Answer from './Components/Answer';
import LazyShow from './Components/LazyShow';
import { useInView } from 'react-intersection-observer';
import * as surveyActions from 'store/actions/action-types/survey-actions';

import bgImage from './images/questionLayers/Q4/背景圖Q4-100.jpg';

const Quiz = ({ quiz, current }) => {
  const currentQuiz = quiz[current];
  const { loading, error, image } = useImage(currentQuiz?.image);
  const { ref, inView } = useInView({ threshold: 0 });
  const DynamicBg = dynamic(() =>
    import(
      `apps/${process.env.project}/Components/Background/Bg${currentQuiz.id}`
    ),
  );

  return (
    <Box>
      {!inView && (
        <Box style={{ position: 'sticky', top: '0', zIndex: 99 }}>
          <Box bgColor={'#FFF'}>
            <Container maxW={'2xl'}>
              <StickyHeader quiz={quiz} />
            </Container>
          </Box>
        </Box>
      )}
      <Container maxW={'2xl'} pb="6" pos={'relative'} zIndex={10}>
        <Center py={4}>
          <Stack w="100%" spacing={4} direction="column">
            <Box bgColor={'#025177'} borderRadius={'8px'} p={4}>
              <Heading
                fontSize={{ base: 'md', md: 'xl' }}
                color={'#FFF'}
                textAlign={{ base: 'left', md: 'center' }}
              >
                測出您的性格與習慣，找出隱藏在您潛意識中的極地動物！
              </Heading>
            </Box>
            <Box ref={ref}>
              <QuizTop quiz={quiz} />
            </Box>
            <Box>
              <Box
                bgColor={'rgba(255,255,255,0.6)'}
                borderRadius={'8px'}
                py={4}
                px={2}
              >
                <Heading
                  fontSize={{ base: 'md', md: 'xl' }}
                  color={'#025177'}
                  textAlign={{ base: 'left' }}
                  py="4"
                >
                  {currentQuiz?.question.label}
                </Heading>
                <Box minH={'180px'}>
                  <LazyShow
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    duration={0.5}
                    reTrigger={currentQuiz.id}
                  >
                    <Image
                      src={image}
                      borderRadius={'8px'}
                      border={'4px solid #FFF'}
                    />
                  </LazyShow>
                </Box>
              </Box>
            </Box>
            <Answer quiz={quiz} />
          </Stack>
        </Center>
      </Container>
      <LazyShow
        initial={{ opacity: 0, x: 0, y: 0 }}
        duration={0.25}
        reTrigger={currentQuiz.id}
      >
        <DynamicBg />
      </LazyShow>
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
