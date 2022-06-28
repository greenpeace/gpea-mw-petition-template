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
  UnorderedList,
  ListItem
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
                <br/>根據採集回的水源及排遺樣本，目前檢測出最主要的塑膠材質為 PP 聚丙烯，該材質多用於食品容器及餐具。而每年超市、量販業至少產生 36 億件一次性塑膠包裝，其中就包含了蔬果、肉品等食品包裝。<br/>其中，全臺超市市占率唯一超過 60% 的業者——全聯福利中心，在綠色和平連續三年進行的零售企業減塑評比中，今年從第一名淪至第六名，未能跟上其他通路的減塑腳步，成為臺灣減塑拖油瓶：
                </Text>
                <UnorderedList>
                  <ListItem><Text as="span" color={`var(--error-900)`}>蔬果裸賣未達標</Text>：曾承諾 2021 年 50% 蔬果裸賣，至今僅部分根莖類產品裸賣</ListItem>
                  <ListItem><Text as="span" color={`var(--error-900)`}>曾承諾會設定減塑短中程目標，至今無更新</Text></ListItem>
                  <ListItem><Text as="span" color={`var(--error-900)`}>減塑替代方案進展少</Text>：曾承諾提供容器租用、洗潔精填充站等，至今僅於兩家分店內導入循環杯機台，大幅落後其他通路業</ListItem>
                </UnorderedList>
                <br/>
                <Text as="p" color={'black'} {...paragraphProps} fontWeight='bold'>邀請您一起要求全聯兌現減塑承諾，透過與企業對話、研究調查，盼全聯提供給消費者更多元、友善環境的選擇！</Text>
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
