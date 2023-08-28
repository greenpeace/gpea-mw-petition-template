/** 
 * Dploy Setting:
 *
PROJECT=tw/climate-2022earthday
MARKET=tw
PROJECT_NAME=climate-2022earthday
BASEPATH=/htdocs/2022/petition/zh-TW.2022.climate.climate-2022earthday.signup
ASSETPREFIX=https://change.greenpeace.org.tw/2022/petition/zh-TW.2022.climate.climate-2022earthday.signup/
FTP_CONFIG_NAME=ftp_tw
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
