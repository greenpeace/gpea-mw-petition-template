import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import * as formActions from 'store/actions/action-types/form-actions';
import * as hiddenFormActions from 'store/actions/action-types/hidden-form-actions';
// Import library
import { Box, Flex, Image, Stack, Grid, GridItem } from '@chakra-ui/react';
// Import custom containers
import PageContainer from '@containers/pageContainer';
import OverflowWrapper from '@containers/overflowWrapper';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
// Import custom components
import HeroBanner from './components/ResponsiveBanner/hero.js';
import ThanksBanner from './components/ResponsiveBanner/thanks';
import HeroContent from './components/ResponsiveBanner/heroContent';
import ThanksContent from './components/ResponsiveBanner/thanksContent';
import DonationModule from '@components/GP/DonationModule';
import SignupForm from '@components/GP/WebinarForm';

import formContent from './form';
import RESULT from './data/result.json';

const ShipResult = dynamic(() => import('./resultContent/shipResult'));
const RoleIntroduction = dynamic(() =>
  import('./resultContent/roleIntroduction'),
);

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
  const topSection = useRef(null);

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
        <Box pos={'relative'}>
          <PageContainer>
            <Box>
              <Grid
                templateColumns={{
                  base: 'repeat(1, 1fr)',
                  md: 'repeat(2, 1fr)',
                }}
                gap={0}
                zIndex={2}
                flexDirection={'column-reverse'}
              >
                <GridItem w="100%">
                  <Box
                    px={4}
                    zIndex={4}
                    pos={'relative'}
                    ref={topSection}
                    minH={{ base: 'auto', md: '550px' }}
                  >
                    <Stack py={4}>
                      {/* Hero Content */}
                      <Box>
                        {submitted ? (
                          <ThanksContent
                            defaultImage={
                              theme?.params?.hero_image_desktop ?? resultBG
                            }
                            content={{
                              title: '完整測驗結果將在15分鐘內送至您的電子郵箱',
                              description: [''],
                            }}
                            quizResult={RESULT[result?.answer]}
                            removeMask={true}
                          />
                        ) : (
                          <HeroContent
                            defaultImage={
                              theme?.params?.hero_image_desktop ?? resultBG
                            }
                            content={{
                              title:
                                `${
                                  theme?.params?.headline_prefix
                                    ? theme?.params?.headline_prefix + '<br/>'
                                    : ''
                                }` + '立即登記解鎖測驗結果！',
                              description: [''],
                            }}
                            quizResult={RESULT[result?.answer]}
                            removeMask={true}
                          />
                        )}
                      </Box>
                    </Stack>
                  </Box>
                </GridItem>
                <GridItem w="100%">
                  {submitted ? (
                    <FormContainer>
                      <Box ref={ref}>
                        <DonationModule
                          market={'HK'}
                          language={'zh_HK'}
                          campaign={
                            theme?.params?.donation_module_campaign ?? 'oceans'
                          }
                          // campaignId={''}
                          env={'production'}
                        />
                      </Box>
                    </FormContainer>
                  ) : (
                    <FormContainer>
                      <Box ref={ref}>
                        <SignupForm />
                      </Box>
                    </FormContainer>
                  )}
                </GridItem>
              </Grid>
            </Box>
            {/* Supporting Content */}
            <Box px={4}>
              {submitted ? (
                <ContentContainer>
                  <Box>
                    <ShipResult quizResult={RESULT[result?.answer]} />
                  </Box>
                </ContentContainer>
              ) : (
                <ContentContainer>
                  <Box>
                    <RoleIntroduction quizResult={RESULT[result?.answer]} />
                  </Box>
                </ContentContainer>
              )}
            </Box>
          </PageContainer>
          <Box
            zIndex="-1"
            pos={'absolute'}
            top={0}
            right={0}
            left={0}
            bottom={0}
          >
            <Image
              src={theme?.params?.hero_image_desktop ?? resultBG}
              height="100%"
              width="100%"
              objectFit="cover"
              objectPosition={'center'}
            />
          </Box>
        </Box>
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
                  `${
                    theme?.params?.headline_prefix
                      ? theme?.params?.headline_prefix + '<br/>'
                      : ''
                  }` + '立即登記解鎖測驗結果！',
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
                {submitted ? (
                  <ContentContainer>
                    <Box>
                      <ShipResult quizResult={RESULT[result?.answer]} />
                    </Box>
                  </ContentContainer>
                ) : (
                  <ContentContainer>
                    <Box>
                      <RoleIntroduction quizResult={RESULT[result?.answer]} />
                    </Box>
                  </ContentContainer>
                )}
              </Box>
              <Box flex={1} ref={mobileForm}>
                {submitted ? (
                  <FormContainer>
                    <Box ref={ref}>
                      <DonationModule
                        market={'HK'}
                        language={'zh_HK'}
                        campaign={
                          theme?.params?.donation_module_campaign ?? 'oceans'
                        }
                        // campaignId={''}
                        env={'production'}
                      />
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
