import React from 'react';
import { connect } from 'react-redux';
import { Box, Flex, Text } from '@chakra-ui/react';
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
    <Flex direction="row" align={'center'} justifyContent={'space-between'}>
      <Box cursor={'pointer'} onClick={() => handleBackButton()}>
        上一頁
      </Box>
      <Box flex={1} mx={{ base: 6, sm: 12 }}>
        <Flex direction="row" w={'100%'} justifyContent={'space-between'}>
          {quiz.map((d, i) => (
            <Box
              key={i}
              bgColor={
                currentQuiz.id === (i + 1).toString() ? '#025177' : '#FFF'
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
