import React, { useEffect, useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { connect } from 'react-redux';
import {
	Box,
	Button,
	Container,
	Stack,
	Text,
	Heading,
	Image,
	useMediaQuery,
	Grid,
	GridItem,
	Flex,
	SimpleGrid,
	UnorderedList,
	ListItem
} from '@chakra-ui/react';
import PetitionFooter from '@containers/petitionFooter';
import FormContainer from '@containers/formContainer';
import PageContainer from '@containers/pageContainer';
import ContentContainer from '@containers/contentContainer';
import formContent from './form';
import subscribeFormContent from './subscribe-form';
import RESULT from './data/result.json';
import useImage from './useImage';
import * as formActions from 'store/actions/action-types/form-actions';
import * as hiddenFormActions from 'store/actions/action-types/hidden-form-actions';
import {
	headingProps,
	paragraphProps
} from '@common/styles/components/contentStyle';
import { OrangeCTA } from '@common/styles/components/formStyle';

const SignContent = dynamic(() => import('./content/signContent'));
const DonateForm = dynamic(() => import('@components/GP/DonateForm'));
const SignupForm = dynamic(() => import('@components/GP/TWForm'));
const ResultContent = dynamic(() => import('./content/resultContent'));

const ThankyouContent = dynamic(() => import('./content/thankyouContent'));

function Index({
	status,
	theme,
	signup,
	setFormContent,
	answer,
	hiddenForm,
	setAnswerToSubmitForm
}) {
	const { submitted } = status;
	const [isLargerThan768] = useMediaQuery('(min-width: 48em)'); // follow Chakra UI default md break point
	const [result, setResult] = useState([]);
	const [score, setScore] = useState(0);
	const [dynamicImageHeight, setDynamicImage] = useState(null);
	const [bgElementHeight, setBgElementHeight] = useState(null);
	const { loading, error, image } = useImage(RESULT[result]?.image); // animal
	const photo = useImage(RESULT[result]?.photo);
	const topSection = useRef(null);
	// const dynamicContent = RESULT[result]?.content;
	const [supportType, setSupportType] = useState('');

	const handleOpenLink = (targetDonateURL) => {
		//
		window.dataLayer = window.dataLayer || [];

		window.dataLayer.push({
			event: 'gaEvent',
			eventCategory: 'donations',
			eventAction: 'form_steps',
			eventLabel: 'form_step:1_amount'
		});
		//
		window.open(`${targetDonateURL}`);
	};

	useEffect(() => {
		setFormContent(formContent);
		if (Number(hiddenForm?.ad_landing_page) === 1) setSupportType('support');
	}, []); // init Form

	useEffect(() => {
		if (supportType === 'support') {
			setFormContent(formContent);
		} else if (supportType === 'subscribe') {
			setFormContent(subscribeFormContent);
		} else {
			setFormContent(formContent);
		}
	}, [submitted, supportType]); // switch Form by result

	useEffect(async () => {
		console.log('answer: ', answer);
		if (!answer || Object.keys(answer).length == 0) {
			return;
		}

		const calAnswer = await Object.values(answer)
			.map((item) => item[1])
			.reduce((b, c) => {
				return b + c;
			});

		setScore(calAnswer);
		// const getMostLargerValue = calAnswer.filter(
		//   (d) => d.totalPoints === calAnswer[0].totalPoints, // get largest points only
		// );
		if (calAnswer >= 6 && calAnswer <= 8) {
			setResult('A');
		}
		if (calAnswer >= 4 && calAnswer <= 5) {
			setResult('B');
		}
		if (calAnswer >= 0 && calAnswer <= 3) {
			setResult('C');
		}
	}, [answer]);

	// useEffect(() => {
	//   if (result) {
	//     console.log(
	//       'topSection.current.clientHeight: ' + topSection.current.clientHeight,
	//     );
	//     setBgElementHeight(topSection.current.clientHeight);
	//   }
	// }, [
	//   topSection.current?.clientHeight,
	//   dynamicContent,
	//   dynamicImageHeight,
	//   submitted,
	// ]);

	useEffect(() => {
		setAnswerToSubmitForm({
			...hiddenForm,
			CampaignData1__c: result,
			CampaignData2__c: `${score}, ${RESULT[result]?.value}`,
			CampaignData3__c:
				supportType === 'support' ? '我願意' : '以其他方式支持減塑'
		});
	}, [result, supportType]);

	const RenderForm = () => (
		<>
			{supportType ? (
				submitted ? (
					<DonateForm />
				) : (
					<SignupForm />
				)
			) : (
				<Box py="8" px="4">
					<Stack spacing="4">
						<ResultContent result={result} />
						<SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4} pt={10}>
							<Button
								{...OrangeCTA}
								onClick={() => {
									setSupportType('support');
								}}
							>
								我願意
							</Button>
							<Button
								{...OrangeCTA}
								onClick={() => {
									handleOpenLink(formContent.donateURL);
								}}
							>
								以其他方式支持減塑
							</Button>
						</SimpleGrid>
					</Stack>
				</Box>
			)}
		</>
	);

	return (
		<>
			<Box pos={'relative'} bgColor={'#002137'} pb={12}>
				<PageContainer>
					<Grid
						templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
						gap={0}
						zIndex={2}
						flexDirection={'column-reverse'}
					>
						<GridItem w="100%">
							{submitted ? (
								<Box py={10}>
									<ThankyouContent type={supportType} />
								</Box>
							) : (
								<Box
									px={4}
									zIndex={4}
									pos={'relative'}
									ref={topSection}
									minH={{ base: 'auto', md: '550px' }}
								>
									<Stack py={4}>
										{supportType ? (
											<SignContent type={supportType} />
										) : (
											<>
												<Box pt={6}>
													<Heading
														{...headingProps}
														color={'black'}
														fontSize={{ base: '2xl', md: '3xl' }}
														dangerouslySetInnerHTML={
															RESULT[result] && {
																__html: RESULT[result]?.title
															}
														}
													/>
												</Box>
												<Box position="relative">
													<Image
														src={image}
														onLoad={(e) =>
															setDynamicImage(e.target.clientHeight)
														}
														pos={'relative'}
														w="100%"
														py={4}
														//maxW={{ base: '280px', md: '380px' }}
														zIndex={2}
													/>
												</Box>
												<Box>
													<Heading
														{...headingProps}
														color={'black'}
														fontSize={{ base: 'xl', md: '2xl' }}
														dangerouslySetInnerHTML={{
															__html: RESULT[result]?.subtitle
														}}
													/>
												</Box>
												<Box>
													<Text
														as="p"
														color={'black'}
														{...paragraphProps}
														mb={0}
														dangerouslySetInnerHTML={{
															__html: RESULT[result]?.content[0]
														}}
													/>
												</Box>
												<Box position="relative">
													<Image
														src={photo?.image}
														pos={'relative'}
														w="100%"
														py={4}
														//maxW={{ base: '280px', md: '380px' }}
														zIndex={2}
													/>
												</Box>
												<Box>
													<Text
														as="p"
														color={'black'}
														{...paragraphProps}
														dangerouslySetInnerHTML={{
															__html: RESULT[result]?.content[1]
														}}
													/>
												</Box>
											</>
										)}
									</Stack>
								</Box>
							)}
							<Box flex={1} position="relative" zIndex={3}>
								<Box py={2} d={{ base: 'block', md: 'none' }}>
									<Container>
										<Box
											maxW="100%"
											mx="auto"
											bgColor="white"
											borderRadius={8}
											boxShadow="lg"
											overflow="hidden"
											d={{ base: 'block', md: 'none' }}
										>
											<RenderForm />
										</Box>
									</Container>
								</Box>
							</Box>
						</GridItem>
						<GridItem w="100%" d={{ base: 'none', md: 'block' }}>
							<Box
								zIndex={9}
								position={{ md: 'sticky' }}
								top={{ base: 'auto', md: 2 }}
								right={{ base: 0 }}
								pt={3}
							>
								<FormContainer>
									<Box>
										<RenderForm />
									</Box>
								</FormContainer>
							</Box>
						</GridItem>
					</Grid>
				</PageContainer>

				{bgElementHeight && (
					<Box
						top={0}
						w={'100%'}
						h={bgElementHeight}
						position="absolute"
						bgColor={'#fffaf0'}
						zIndex={1}
					/>
				)}
			</Box>
			<PetitionFooter locale={'TWChinese'} />
		</>
	);
}

const mapStateToProps = ({ status, theme, signup, survey, hiddenForm }) => {
	return {
		status,
		answer: survey.data,
		theme: theme.data,
		signup: signup.data,
		hiddenForm: hiddenForm.data
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setFormContent: (data) => {
			dispatch({ type: formActions.SET_FORM, data });
		},
		setAnswerToSubmitForm: (data) => {
			dispatch({ type: hiddenFormActions.SET_HIDDEN_FORM, data });
		}
	};
};

function propsAreEqual(prevState, nextState) {
	return prevState.status.submitted === nextState.status.submitted;
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(React.memo(Index, propsAreEqual));
