/** 
 * Dploy Setting:
 *
PROJECT=tw/plastic-animal-gpt
MARKET=tw
PROJECT_NAME=plastic-animal
BASEPATH=/htdocs/2024/petition/zh-TW.2024.plastics.gpt-plastics_plastic-animal.signup
ASSETPREFIX=https://change.greenpeace.org.tw/2024/petition/zh-TW.2024.gpt-plastics_plastics.plastic-animal.signup/
FTP_CONFIG_NAME=ftp_tw
# ******** MC Cloud Page Name ********
CLOUD_PAGE_NAME=zh-tw.2022.plastics.plastics-animal.signup
*/

import React, {useEffect, useState} from 'react';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { connect, useSelector } from 'react-redux';
import * as surveyActions from 'store/actions/action-types/survey-actions';
import * as formActions from 'store/actions/action-types/form-actions';
import * as hiddenFormActions from 'store/actions/action-types/hidden-form-actions';
import SEO from './SEO';
import QUIZ from './data/quiz.json';

const Index = ({ survey, hiddenForm, setSurveyPage, setHiddenForm, setSignupNumbers }) => {
  
  // const adPage = useSelector( (state) => {
  //   return state.hiddenForm.data?.ad_landing_page;
  // });
  
  const currentPage = survey?.page;
  const Page = dynamic(() => import(`./${currentPage}`));

  const signupNumbersTWURL = process.env.signupNumbersTW;
	useEffect(() => {
    console.log(survey?.page);
    if(survey?.page === 'quiz') {
      axios
      .get(signupNumbersTWURL)
      .then((response) => {
        
        setSignupNumbers({ "tw": response.data.find((d) => d.Id === "7012u000000hMiJAAU") });
      })
      .catch((error) => console.log(error));
    }
		

	}, [survey])
  
  return (
    <>
      {/* <SEO /> */}
      <Page quiz={QUIZ} />
    </>
  );
};

const mapStateToProps = ({ status, survey, hiddenForm }) => {
  return { status, survey, hiddenForm: hiddenForm.data };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSurveyPage: (data) => {
      dispatch({ type: surveyActions.SET_SURVEY_PAGE, data });
    },
    setHiddenForm: (data) => {
      dispatch({ type: hiddenFormActions.SET_HIDDEN_FORM, data });
    },
    setSignupNumbers: (data) => {
			dispatch({ type: formActions.SET_SIGNUP_NUMBERS, data });
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
