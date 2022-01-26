import { Box, Image, Center, Container } from '@chakra-ui/react';
import { connect } from 'react-redux';
import * as surveyActions from 'store/actions/action-types/survey-actions';

import bgPlasticsImage from './images/openingending/Starting.png';

const Description = ({ setSurveyPage }) => {
  return (
    <Box h={'100vh'} mt={{ base: '-55px' }}>
      <Box
        w="100%"
        h="100%"
        objectFit={'cover'}
        onClick={() => setSurveyPage('quiz')}
        cursor={'pointer'}
        bgImage={bgPlasticsImage}
      >
        <Center h={'100%'}>
          <Container>
            <Box py={40}>
              您正在畫室中繪製世界地圖，正想為海洋填色之際，卻不慎將水倒翻在地圖上，極地看起來就像被海水淹沒一樣！本來打算抹乾水漬，但極地位置卻突然出現一道閃光，再張開眼睛的時候才發現自己竟然穿越到極地之中！遇上各種事件之後，發現原來自己潛意識中隱藏著某種極地動物的特質？！
            </Box>
          </Container>
        </Center>
      </Box>
    </Box>
  );
};

const mapStateToProps = ({ status, survey }) => {
  return { status, survey };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSurveyPage: (data) => {
      dispatch({ type: surveyActions.SET_SURVEY_PAGE, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Description);
