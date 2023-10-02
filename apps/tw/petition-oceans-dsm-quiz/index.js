/** 
 * Dploy Setting:
 *
PROJECT=tw/petition-oceans-dsm-quiz
MARKET=tw
PROJECT_NAME=petition-oceans-dsm-quiz
BASEPATH=/htdocs/2023/petition/zh-TW.2023.oceans.oceans-dsm-quiz.signup
ASSETPREFIX=https://change.greenpeace.org.tw/2023/petition/zh-TW.2023.oceans.oceans-dsm-quiz.signup/
FTP_CONFIG_NAME=ftp_tw
# ******** MC Cloud Page Name ********
CLOUD_PAGE_NAME=zh-TW.2023.oceans.oceans-dsm-quiz.signup
*/

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { connect, useSelector } from 'react-redux';
import * as surveyActions from 'store/actions/action-types/survey-actions';
import * as hiddenFormActions from 'store/actions/action-types/hidden-form-actions';
import SEO from './SEO';
import QUIZ from './data/quiz.json';

const Index = ({ survey, hiddenForm, setSurveyPage, setHiddenForm }) => {
	const adPage = useSelector((state) => {
		return state.hiddenForm.data?.ad_landing_page;
	});

	const currentPage =
		adPage === '1' && survey?.page != 'result' ? 'cta' : survey?.page;
	const Page = dynamic(() => import(`./${currentPage}`));

	return (
		<>
			<SEO />
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
		}
	};
};

//Prevent refresh child component

function propsAreEqual(prevSurvey, nextSurvey) {
	return prevSurvey.survey.page === nextSurvey.survey.page;
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(React.memo(Index, propsAreEqual));
