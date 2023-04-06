import React, { useEffect, useState, useRef } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { useInView } from 'react-intersection-observer';
import * as formActions from 'store/actions/action-types/form-actions';
import * as hiddenFormActions from 'store/actions/action-types/hidden-form-actions';
// Import library
import { Box, Image, Stack, Grid, GridItem } from '@chakra-ui/react';
// Import custom containers
import PageContainer from '@containers/pageContainer';
import ContentContainer from '@containers/contentContainer';
import FormContainer from '@containers/formContainer';
import PetitionFooter from '@containers/petitionFooter';
// Import custom components
import HeroContent from './components/ResponsiveBanner/heroContent';
import ThanksContent from './components/ResponsiveBanner/thanksContent';
import DonationModule from '@components/GP/DonationModule';
import SignupForm from '@components/GP/WebinarForm';

import formContent from './form';
import RESULT from './data/result.json';

import QuizResult from './resultContent/quizResult';
import ThankyouResult from './resultContent/thankyouResult';

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

        // 將加總出的答案，由個位數開始取出，按照 ABCD 順序放入新陣列，並找出新陣列中，最大的數值，作為測驗結果
        const answerType = ['A', 'B', 'C', 'D'];
        let answerStringLength = sumTotalPointArray.length;
        let answerCountResults = [0, 0, 0, 0];
        for (let i = 0; i < answerStringLength && i < 4; i++) {
            let index = answerStringLength - i - 1;
            answerCountResults[i] = sumTotalPointArray[index];
        }
        console.log('answerCountResults: ' + answerCountResults);

        const maxAnswerCount = Math.max(...answerCountResults);
        const maxAnswerCountIndex = answerCountResults.indexOf(
            maxAnswerCount.toString(),
        );

        setResult({
            answer: answerType[maxAnswerCountIndex],
        });
    }, [answer]);

    useEffect(() => {
        setAnswerToSubmitForm({
            ...hiddenForm,
            CampaignData1__c: result?.answer,
            CampaignData2__c: RESULT[result?.answer]?.value,
        });
    }, [result?.answer]);

    useEffect(() => {
        if (submitted) {
            console.log('submitted');
            // Send fbq Subscription event
            window.dataLayer = window.dataLayer || [];

            window.dataLayer.push({
                event: 'fbqEvent',
                contentName: 'ship-quiz',
                contentCategory: 'Subscribe',
            });
        }
    }, [submitted]);

    return (
        <>
            <Box pos={'relative'}>
                <PageContainer>
                    {/* Hero Content */}
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
                                py={4}
                                zIndex={4}
                                pos={'relative'}
                                ref={topSection}
                                minH={{ base: 'auto', md: '550px' }}
                            >
                                <Stack>
                                    {/* Hero Content */}
                                    {submitted ? (
                                        <ThanksContent
                                            content={{
                                                title: '完整測驗結果圖已經發送到你嘅電子郵箱，即刻Post上Story Tag埋朋友一齊玩啦！',
                                                description: []
                                            }}
                                            quizResult={RESULT[result?.answer]}
                                            removeMask={true}
                                        />
                                    ) : (
                                        <HeroContent
                                            content={{
                                                title:
                                                    `${theme?.params?.headline_prefix
                                                        ? theme?.params?.headline_prefix + '<br/>'
                                                        : ''
                                                    }` + '立即登記獲得完整測驗結果圖！',
                                            }}
                                            quizResult={RESULT[result?.answer]}
                                            removeMask={true}
                                        />
                                    )}
                                </Stack>
                            </Box>
                        </GridItem>
                        <GridItem w="100%">
                            <Box py={4}>
                                {submitted ? (
                                    <FormContainer>
                                        <Box>
                                            <DonationModule
                                                market={'HK'}
                                                language={'zh_HK'}
                                                campaign={
                                                    theme?.params?.donation_module_campaign ?? 'plastics_earthday_2023quiz'
                                                }
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
                        </GridItem>
                    </Grid>
                    {/* Supporting Content */}
                    <Box maxW={{ base: '100%', md: '50%' }}>
                        <ContentContainer>
                            {submitted ? (
                                <ThankyouResult />
                            ) : (
                                <QuizResult quizResult={RESULT[result?.answer]} />
                            )}
                        </ContentContainer>
                    </Box>
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
