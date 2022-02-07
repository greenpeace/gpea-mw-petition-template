import React from 'react';
import { connect } from 'react-redux';
import {
  Stack,
  Container,
  Box,
  Heading,
  Center,
  Image,
} from '@chakra-ui/react';
import useImage from './useImage';
import Answer from './components/Answer';
import Question from './components/Question';
import LazyShow from './components/LazyShow';
import DynamicBackground from './components/DynamicBackground';
import * as surveyActions from 'store/actions/action-types/survey-actions';

import BackgroundVisual from './images/Question Interface Background.png';

const Quiz = ({ quiz, current }) => {
  const currentQuiz = quiz[current];
  const { loading, error, image } = useImage(currentQuiz?.image);

  return (
    <>
      <Box>
        <Container maxW={'2xl'} pb="6" pos={'relative'} zIndex={10}>
          <Center py={4}>
            <Stack w="100%" direction="column" spacing={0}>
              <Question quiz={quiz} />
              <Box>
                <Box
                  bgColor={'rgba(255,255,255,0.6)'}
                  borderRadius={'8px'}
                  pb={4}
                  px={2}
                >
                  <Heading
                    fontSize={{ base: 'md', md: 'xl' }}
                    color={'#025177'}
                    py="4"
                    px="4"
                    lineHeight="1.7"
                  >
                    {currentQuiz?.question.label}
                  </Heading>
                  <LazyShow
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    duration={0.5}
                    reTrigger={currentQuiz.id}
                  >
                    <Box borderRadius={'4px'} border={'4px solid #FFF'}>
                      <Image src={image} loading="lazy" />
                    </Box>
                  </LazyShow>
                </Box>
              </Box>
              <Box pt={4}>
                <Answer quiz={quiz} />
              </Box>
            </Stack>
          </Center>
        </Container>
        <Image
          src={BackgroundVisual}
          w="100%"
          h="100%"
          top={0}
          objectFit={'cover'}
          objectPosition={'center top'}
          position="absolute"
        />
        {/* <DynamicBackground currentQuiz={currentQuiz} /> */}
      </Box>
    </>
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

function propsAreEqual(prevCurrent, nextCurrent) {
  return prevCurrent === nextCurrent;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(Quiz, propsAreEqual));
