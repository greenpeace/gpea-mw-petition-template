import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  Stack,
  Container,
  Box,
  Heading,
  Text,
  Center,
  Image,
  Fade,
} from '@chakra-ui/react';
import useImage from './useImage';
import Answer from './components/Answer';
import Question from './components/Question';
import * as surveyActions from 'store/actions/action-types/survey-actions';

import PureBG from './images/optimized/ocean-quiz-pure-background.jpg?webp';

const Quiz = ({ quiz, current }) => {
  const [isOpen, setIsOpen] = useState(false);
  const currentQuiz = quiz[current];
  const { loading, error, image } = useImage(currentQuiz?.image);
  useEffect(() => {
    // console.log('rendered');
    setIsOpen(false);
    setTimeout(() => {
      setIsOpen(true);
    }, 200);
  }, [currentQuiz]);
  return (
    <>
      <Container maxW={{ base: 'xl', xl: '2xl' }} pos={'relative'} zIndex={10}>
        <Fade in={isOpen}>
          <Center py={4}>
            <Stack w="100%" direction="column" spacing={4}>
              <Heading
                py={2}
                fontSize={{ base: 'lg', md: '2xl' }}
                color={'blue.500'}
                lineHeight="1.7"
              >
                <Text as="span" mr="2">
                  Q{current + 1}.
                </Text>
                {currentQuiz?.question.label}
              </Heading>
              <Box
                pos="relative"
                h={{ base: '220px', md: '320px', xl: '400px' }}
              >
                <Image
                  w="100%"
                  h="100%"
                  top={0}
                  left={0}
                  objectFit={'cover'}
                  objectPosition={'center'}
                  position="absolute"
                  src={image}
                  alt={currentQuiz?.question.label}
                />
              </Box>
              <Answer py={4} quiz={quiz} />
              <Question quiz={quiz} />
            </Stack>
          </Center>
        </Fade>
      </Container>
      <Box
        zIndex="-1"
        pos={'absolute'}
        top={0}
        right={0}
        left={0}
        bottom={0}
        filter="grayscale(50%)"
      >
        <Image
          src={PureBG}
          height="100%"
          width="100%"
          objectFit="cover"
          objectPosition={'center bottom'}
          opacity={'0.25'}
        />
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
