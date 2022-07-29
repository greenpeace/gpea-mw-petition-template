import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import useImage from './useImage';
import * as formActions from 'store/actions/action-types/form-actions';
import * as hiddenFormActions from 'store/actions/action-types/hidden-form-actions';
// Import library
import {
  Box,
  Flex,
} from '@chakra-ui/react';
// Import custom containers
import PageContainer from '@containers/pageContainer';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
// Import custom components
import HeroBanner from './components/ResponsiveBanner/hero.js';
import ThanksBanner from './components/ResponsiveBanner/thanks';
import DonationModule from '@components/GP/DonationModule';
import SignupForm from '@components/GP/WebinarForm';

import formContent from './form';
import RESULT from './data/result.json';

const ShipResult = dynamic(() => import('./resultContent/shipResult'));

import resultBG from './images/result_page_background.jpg';

function Index({
  status,
  setFormContent,
  answer,
  hiddenForm,
  setAnswerToSubmitForm,
}) {
  const signup = useSelector((state) => state?.signup);
  const { step } = signup;
  const submitted = useSelector((state) => state?.signup?.submitted);
  const theme = useSelector((state) => state?.theme);

  let utmSource = new URLSearchParams(document.location.search).get(
    'utm_source',
  );

  const [result, setResult] = useState([]);
  // const { loading, error, image } = useImage(RESULT[result?.answer]?.image); // roles

  const [ref, inView] = useInView({
    threshold: 0,
  });
  const mobileForm = useRef(null);

  useEffect(() => {
    setFormContent(formContent);
  }, []); // init Form

  useEffect(async () => {
    if (!answer) {
      return;
    }

    const sumTotalPointArray = await Object.values(answer)
      .map((answer_item) => answer_item[1]) // get the point part
      .reduce((sum, current_point) => sum + current_point)
      .toString()
      .split('');

    const maxAnswerCount = Math.max(...sumTotalPointArray);
    const maxAnswerCountIndex = sumTotalPointArray.indexOf(
      maxAnswerCount.toString(),
    );
    const answerType = ['A', 'B', 'C', 'D', 'E'];

    setResult({
      answer: answerType[maxAnswerCountIndex],
    });
  }, [answer]);


  useEffect(() => {
    setAnswerToSubmitForm({
      ...hiddenForm,
      CampaignData1__c: result?.answer,
      CampaignData2__c: RESULT[result?.answer]?.value,
      CampaignData3__c: 'Oceans',
    });
  }, [result?.answer]);

  return (
    <>
      <Box pos={'relative'}>
        <Box>
          {submitted ? (
            <ThanksBanner
              defaultImage={theme?.params?.hero_image_desktop ?? resultBG}
              content={{
                title: '完整測驗結果將在15分鐘內送至您的電子郵箱',
                description: [''],
              }}
              quizResult={RESULT[result?.answer]}
              removeMask={true}
            />
          ) : (
            <HeroBanner
              defaultImage={theme?.params?.hero_image_desktop ?? resultBG}
              content={{
                title:
                  `${theme?.params?.headline_prefix
                    ? theme?.params?.headline_prefix + '<br/>'
                    : ''
                  }` + '認識現實中與您匹配的船隊成員',
                description: [''],
              }}
              quizResult={RESULT[result?.answer]}
              removeMask={true}
            />
          )}
        </Box>

        <PageContainer>
          <OverflowWrapper>
            <Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
              <Box flex={1} mt={{ base: 10, sm: 60 }}>
                {submitted && (
                  <ContentContainer>
                    <Box>
                      <ShipResult
                        quizResult={RESULT[result?.answer]}
                      />
                    </Box>
                  </ContentContainer>
                )}
              </Box>
              <Box flex={1} ref={mobileForm}>
                {submitted ? (
                  <FormContainer>
                    <Box ref={ref}>
                      {utmSource == 'dd' ? (
                        <Box h="40px" />
                      ) : (
                        <DonationModule
                          market={'HK'}
                          language={'zh_HK'}
                          campaign={
                            theme?.params?.donation_module_campaign ?? 'oceans'
                          }
                          // campaignId={''}
                          env={'production'}
                        />
                      )}
                    </Box>
                  </FormContainer>
                ) : (
                  <FormContainer>
                    <Box ref={ref}>
                      <SignupForm />
                    </Box>
                  </FormContainer>
                )}
              </Box>
            </Flex>
          </OverflowWrapper>
        </PageContainer>
      </Box>
      <PetitionFooter locale={'HKChinese'} />
    </>
  );
}

const mapStateToProps = ({ status, theme, signup, survey, hiddenForm }) => {
  return {
    status,
    answer: survey.data,
    theme: theme.data,
    signup: signup.data,
    hiddenForm: hiddenForm.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setFormContent: (data) => {
      dispatch({ type: formActions.SET_FORM, data });
    },
    setAnswerToSubmitForm: (data) => {
      dispatch({ type: hiddenFormActions.SET_HIDDEN_FORM, data });
    },
  };
};

function propsAreEqual(prevState, nextState) {
  return prevState.status.submitted === nextState.status.submitted;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(Index, propsAreEqual));
