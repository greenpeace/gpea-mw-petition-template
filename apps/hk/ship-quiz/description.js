import React from 'react';
import { connect } from 'react-redux';
import {
  Heading,
  Stack,
  Container,
  Box,
  Center,
  Image,
  Text,
  Flex,
  Button,
} from '@chakra-ui/react';
import LazyShow from './components/LazyShow';
import * as surveyActions from 'store/actions/action-types/survey-actions';

import bgPlasticsImage from './images/optimized/Starting.jpg?webp';
import BackgroundVisual from './images/optimized/Question Interface Background.png';

const Description = ({ setSurveyPage }) => {
  return (
    <>
      <Container maxW={{ base: 'xl', xl: '2xl' }} pos={'relative'} zIndex={10}>
        <Center py={4}>
          <Stack w="100%" direction="column" spacing={4}>
            <Box borderRadius={'8px'} p={4}>
              <Heading
                fontSize={{ base: 'xl', md: '2xl' }}
                color={'#108ee9'}
                textAlign={{ base: 'center' }}
              >
                【航海心理測驗】
                <br />
                找出您的第二人生職業！
              </Heading>
            </Box>
            <Box pos="relative" h={{ base: '220px', md: '320px', xl: '400px' }}>
              <Image
                w="100%"
                h="100%"
                top={0}
                left={0}
                objectFit={'cover'}
                objectPosition={'center'}
                position="absolute"
                src={bgPlasticsImage}
                alt="【航海心理測驗】找出您的第二人生職業！"
              />
            </Box>
            {/* <LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.5}>
              <Box>
                <Image
                  src={bgPlasticsImage}
                  alt="【航海心理測驗】找出您的第二人生職業！"
                />
              </Box>
            </LazyShow> */}
            <LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.25}>
              <Box bgColor={'rgba(255,255,255,0.8)'} borderRadius={'8px'} p={4}>
                <Heading
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color={'#108ee9'}
                  lineHeight="2"
                >
                  您即將登上綠色和平「彩虹勇士號」船艦，執行守護海洋任務！
                  <br />
                  您會適合擔任船隊中的哪個崗位？
                </Heading>
              </Box>
            </LazyShow>
            <Flex mt={4} justifyContent={{ base: 'center' }}>
              <Button
                size="lg"
                variant={'quizSquare'}
                fontSize={'xl'}
                px={6}
                py={4}
                onClick={() => setSurveyPage('quiz')}
              >
                立即登船
              </Button>
            </Flex>
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
        blur={'0.5'}
      />
    </>
  );
};

const mapStateToProps = ({ status, survey }) => {
  return { status, answer: survey.data, current: survey.current };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSurveyPage: (data) => {
      dispatch({ type: surveyActions.SET_SURVEY_PAGE, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Description);
