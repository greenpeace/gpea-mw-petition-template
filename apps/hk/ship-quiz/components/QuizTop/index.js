import React from 'react';
import { connect } from 'react-redux';
import { Box, Flex, Text } from '@chakra-ui/react';
import { ChevronLeftIcon } from '@chakra-ui/icons';
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
    <Flex
      my={6}
      pb={4}
      direction="row"
      align={'center'}
      justifyContent={'space-between'}
    >
      <Box cursor={'pointer'} onClick={() => handleBackButton()}>
        <Flex alignContent={'center'}>
          <ChevronLeftIcon w={6} h={6} pt="1" pr="1" color="#108ee9"/>
          <Text
            as="span"
            fontWeight="500"
            fontSize={{ base: 'md' }}
            color="#108ee9"
          >
            上一頁
          </Text>
        </Flex>
      </Box>
      <Box flex={1} mx={{ base: 6, sm: 12 }}>
        <Flex
          direction="row"
          w={'100%'}
          maxW="320px"
          mx="auto"
          justifyContent={'space-between'}
          pt="2px"
        >
          {quiz.map((d, i) => (
            <Box
              key={i}
              border="1px solid #108ee9"
              bgColor={
                currentQuiz.id === (i + 1).toString() ? '#108ee9' : '#FFF'
              }
              borderRadius={'50%'}
              w={'8px'}
              h={'8px'}
            />
          ))}
        </Flex>
      </Box>
      <Box>
        <Text
          as="span"
          fontWeight="500"
          fontSize={{ base: 'md', md: 'xl' }}
          color="#108ee9"
        >
          {current + 1} / {quiz.length}
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
