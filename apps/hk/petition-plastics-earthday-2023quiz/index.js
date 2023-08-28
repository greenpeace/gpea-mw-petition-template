/**
 * Deploy setting
# Project Apps Directory: /apps/{PROJECT}
PROJECT=hk/petition-plastics-earthday-2023quiz
MARKET=hk
PROJECT_NAME=petition-plastics-earthday-2023quiz
BASEPATH=/web/api.greenpeace.org.hk/htdocs/page/petition-plastics-earthday-2023quiz
ASSETPREFIX=https://api.greenpeace.org.hk/page/petition-plastics-earthday-2023quiz/
FTP_CONFIG_NAME=api_hk_cloud 
# ******** MC Cloud Page Name ********
CLOUD_PAGE_NAME=zh-hk.2023.plastics.earthday_quiz.general.signup.na
*/

import React from 'react';
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import * as surveyActions from 'store/actions/action-types/survey-actions';
import SEO from './SEO';
import QUIZ from './data/quiz.json';

const Index = ({ survey }) => {
  const currentPage = survey?.page;
  const Page = dynamic(() => import(`./${currentPage}`));

  return (
    <>
      <SEO />
      <Page quiz={QUIZ} />
    </>
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
