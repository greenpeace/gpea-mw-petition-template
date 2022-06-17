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
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import leafImage from './images/px.jpg';

const Cta = ({ setSurveyPage }) => {
  return (
    <>
      <Container maxW={{ base: 'xl', xl: '2xl' }} pos={'relative'} zIndex={10}>
        <Center py={4}>
          <Stack w="100%" direction="column" spacing={4}>
            <Box borderRadius={'8px'} p={4}>
              <Heading
                fontSize={{ base: 'xl', md: '2xl' }}
                color={'black'}
                textAlign={{ base: 'center' }}
              >
                請支援減塑！您願意支持全聯福利中心兌現減塑承諾，保護臺灣環境的社會責任嗎？
              </Heading>
            </Box>
            <Box
              borderRadius={'8px'}
              pb={4}
              minH={{ base: 'auto', md: '240px' }}
            >
              <LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.5}>
                <Box borderRadius={'4px'} border={'4px solid #FFF'}>
                  <Image src={leafImage} loading="lazy" />
                </Box>
              </LazyShow>
            </Box>

            <LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.25}>
              <Box bgColor={'rgba(255,255,255,0.8)'} borderRadius={'8px'} p={4}>
                <Text as="p" color={'black'} {...paragraphProps} mb={0}>
                綠色和平與研究團隊針對臺灣多個野生動物棲地進行科學研究，首度發現連臺灣保育類動物也難倖免於塑膠污染。
                <br/>目前檢測出最主要的塑膠材質為 PP 聚丙烯，該材質多用於食品容器及餐具。而每年超市、量販業至少產生 36 億件一次性塑膠包裝，其中就包含了蔬果、肉品等食品包裝。<br/>其中，全臺市占率最高的超市量販業者——全聯福利中心，曾於 2020 年的社會企業責任報告書中宣布「 2021 年達成 50% 蔬果裸賣 」，卻未實踐其諾言，成為臺灣減塑的拖油瓶。
                <br/><strong>邀請您一起要求全聯兌現減塑承諾，讓消費者擁有更友善環境的選擇！</strong>
                </Text>
              </Box>
            </LazyShow>
            <Box>
              <Flex mt={4} justifyContent={{ base: 'center' }}>
                <Button
                  variant={'quizSquare'}
                  fontSize={{ base: 'xl', lg: '2xl' }}
                  px={{ base: 10, md: 14 }}
                  py={{ base: 6, md: 8 }}
                  onClick={() => setSurveyPage('result')}
                >
                  <Text>我願意</Text>
                </Button>
              </Flex>
            </Box>
          </Stack>
        </Center>
      </Container>
      <Box bgColor={'#eee'} w="100%" h="100%" top={0} position="absolute" />
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

export default connect(mapStateToProps, mapDispatchToProps)(Cta);
