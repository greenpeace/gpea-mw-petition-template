import { Box, Image } from '@chakra-ui/react';
import { connect } from 'react-redux';
import * as surveyActions from 'store/actions/action-types/survey-actions';

import bgPlasticsImage from './images/KeyV-1920x1080-100.jpeg';

const Landing = ({ setSurveyPage }) => {
  return (
    <Box h={'100vh'} mt={{ base: '-55px' }}>
      <Image
        w="100%"
        h="100%"
        objectFit={'cover'}
        src={bgPlasticsImage}
        onClick={() => setSurveyPage('description')}
        cursor={'pointer'}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
