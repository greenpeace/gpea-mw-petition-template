import { Box, Image, Center, Container, Button } from '@chakra-ui/react';
import { connect } from 'react-redux';
import * as surveyActions from 'store/actions/action-types/survey-actions';

import bgPlasticsImage from './images/openingending/Ending-100.jpg';

const Description = ({ setSurveyPage }) => {
  return (
    <Box h={'100vh'} mt={{ base: '-55px' }}>
      <Box
        w="100%"
        h="100%"
        objectFit={'cover'}
        cursor={'pointer'}
        bgImage={bgPlasticsImage}
      >
        <Center h={'100%'}>
          <Container>
            <Box py={40}>
              原來那道神秘的光芒真的可以讓您回到本來生活的世界！被光芒吸進去後您再次返回畫室，想照鏡子確認自己的狀態時，鏡子上出現的居然是自己潛意識中隱藏著的極地動物？！
            </Box>
            <Button onClick={() => setSurveyPage('result')}>觀看結果</Button>
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
