import React from 'react';
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import { Box } from '@chakra-ui/react';
import * as surveyActions from 'store/actions/action-types/survey-actions';
import SEO from './SEO';
import QUIZ from './quiz.json';

const Index = ({ survey }) => {
  const currentPage = survey?.page;
  const Page = dynamic(() =>
    import(`apps/${process.env.project}/${currentPage}`),
  );

  return (
    <Box>
      <SEO />
      <Page quiz={QUIZ} />
      <Box
        position={'absolute'}
        top="0"
        left="0"
        w="100%"
        h="100%"
        zIndex={'-1'}
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

//Prevent refresh child component

function propsAreEqual(prevSurvey, nextSurvey) {
  return prevSurvey.survey.page === nextSurvey.survey.page;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(Index, propsAreEqual));
