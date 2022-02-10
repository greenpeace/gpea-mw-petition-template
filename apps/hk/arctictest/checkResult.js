import React from 'react';
import { connect } from 'react-redux';
import {
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
import bgPlasticsImage from './images/openingending/Ending-100.jpg';

import BackgroundVisual from './images/Question Interface Background.png';

const CheckResult = ({ setSurveyPage }) => {
  return (
    <>
      <Container maxW={{ base: 'xl', xl: '2xl' }} pos={'relative'} zIndex={10}>
        <Center py={4}>
          <Stack w="100%" direction="column" spacing={2}>
              <Box borderRadius={'8px'} pb={4} minH={'240px'}>
                <LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.5}>
                  <Box borderRadius={'4px'} border={'4px solid #FFF'}>
                    <Image src={bgPlasticsImage} loading="lazy" />
                  </Box>
                </LazyShow>
              </Box>

            <LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.25}>
              <Box
                py={40}
                bgColor={'rgba(255,255,255,0.8)'}
                borderRadius={'8px'}
                p={8}
              >
                <Text
                  color="gray.700"
                  fontWeight={700}
                  fontSize={{ base: 'sm', sm: 'md', md: 'xl' }}
                  lineHeight="2"
                >
                  光芒果然把您吸進去！您成功返回畫室，想照鏡子確認自己的狀態時，鏡子上出現的居然是自己潛意識中隱藏著的極地動物？！
                </Text>
              </Box>
            </LazyShow>
            <Box>
              <Flex mt={4} justifyContent={{ base: 'center' }}>
                <Button
                  onClick={() => setSurveyPage('result')}
                  variant={'subCTA'}
                >
                  <Text fontSize={{ base: 'sm', sm: 'md' }}>
                    查看我的極地動物
                  </Text>
                </Button>
              </Flex>
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

export default connect(mapStateToProps, mapDispatchToProps)(CheckResult);
