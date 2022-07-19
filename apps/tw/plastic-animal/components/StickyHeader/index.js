import React from 'react';
import { connect } from 'react-redux';
import { Box, Flex, Text, Heading, Center } from '@chakra-ui/react';
import * as surveyActions from 'store/actions/action-types/survey-actions';

const QuizTop = ({ setSurveyPage, quiz, current, setCurrentQuiz }) => {
  const currentQuiz = quiz[current];

  const handleBackButton = () => {
    if (current === 0) {
      setSurveyPage('landing');
    } else {
      setCurrentQuiz((current -= 1));
    }
  };

  return (
    <Box py={2}>
      <Flex direction="row" align={'center'} justifyContent={'space-between'}>
        <Box flex={1}>
          <Center>
            <Heading fontSize={{ base: 'md' }} color={'#025177'}>
              {currentQuiz?.question.label}
            </Heading>
          </Center>
        </Box>
      </Flex>
      <Flex direction="row" align={'center'} justifyContent={'space-between'}>
        <Box cursor={'pointer'} onClick={() => handleBackButton()}>
          <Text fontSize={{ base: 'sm' }}>上一頁</Text>
        </Box>
        <Box>
          <Text fontSize={'md'}>
            <Text as="span" fontWeight={'bold'} fontSize={'xl'}>
              {current + 1}
            </Text>{' '}
            / {quiz.length}
          </Text>
        </Box>
      </Flex>
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

export default connect(mapStateToProps, mapDispatchToProps)(QuizTop);
