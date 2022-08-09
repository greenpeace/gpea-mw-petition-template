import React from 'react';
import { connect } from 'react-redux';
import {
  Heading,
  Stack,
  Container,
  Box,
  Center,
  Image,
  Flex,
  Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import * as surveyActions from 'store/actions/action-types/survey-actions';

import bgPlasticsImage from './images/optimized/Starting.jpg?webp';
import PureBG from './images/optimized/ocean-quiz-pure-background.jpg?webp';

const Description = ({ setSurveyPage }) => {
  return (
    <Box as={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
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
            <Box bgColor={'rgba(255,255,255,0.8)'} borderRadius={'8px'} p={4}>
              <Heading
                fontSize={{ base: 'lg', md: 'xl' }}
                color={'#108ee9'}
                lineHeight="1.7"
              >
                您即將登上綠色和平「彩虹勇士號」船艦，執行守護海洋任務！
                <br />
                您會適合擔任船隊中的哪個崗位？
              </Heading>
            </Box>
            <Flex mt={4} mb="4" justifyContent={{ base: 'center' }}>
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
    </Box>
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
