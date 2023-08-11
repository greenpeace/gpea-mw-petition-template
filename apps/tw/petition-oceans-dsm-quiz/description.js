import React from 'react';
import { connect } from 'react-redux';
import {
	Heading,
	Stack,
	Container,
	Box,
	Center,
	Image,
	Text,
	Flex,
	Button
} from '@chakra-ui/react';
import LazyShow from './components/LazyShow';
import * as surveyActions from 'store/actions/action-types/survey-actions';
import {
	headingProps,
	paragraphProps
} from '@common/styles/components/contentStyle';

import leafImage from './images/beforeresult.jpg';

const Description = ({ setSurveyPage }) => {
	return (
		<>
			<Container maxW={{ base: 'xl', xl: '2xl' }} pos={'relative'} zIndex={10}>
				<Center py={4}>
					<Stack w="100%" direction="column" spacing={4}>
						<Box borderRadius={'8px'} p={4}>
							<Heading
								fontSize={{ base: 'xl', md: '2xl' }}
								color={'white'}
								textAlign={{ base: 'center' }}
							>
								微塑膠污染已遍佈海、陸、空
								<br />
								入侵臺灣野生動物棲地！
							</Heading>
						</Box>
						<Box
							borderRadius={'8px'}
							pb={4}
							minH={{ base: 'auto', md: '240px' }}
						>
							<LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.5}>
								<Box borderRadius={'4px'} border={'4px solid #FFF'}>
									<Image src={leafImage} loading="lazy" />
								</Box>
							</LazyShow>
						</Box>

						<LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.25}>
							<Box bgColor={'rgba(255,255,255,0.8)'} borderRadius={'8px'} p={4}>
								<Text as="p" color={'black'} {...paragraphProps} mb={0}>
									海洋塑膠廢棄物、空氣中驗出微塑膠等塑膠污染的消息層出不窮...
									<br />
									綠色和平與研究團隊針對臺灣多個野生動物棲地進行科學研究，首度發現連臺灣保育類動物也難倖免於塑膠污染。
								</Text>
							</Box>
						</LazyShow>
						<Box>
							<Flex mt={4} justifyContent={{ base: 'center' }}>
								<Button
									variant={'quizSquare'}
									fontSize={{ base: 'xl', lg: '2xl' }}
									px={{ base: 10, md: 14 }}
									py={{ base: 6, md: 8 }}
									onClick={() => setSurveyPage('result')}
								>
									<Text>看目前研究結果</Text>
								</Button>
							</Flex>
						</Box>
					</Stack>
				</Center>
			</Container>
			<Box bgColor={'#002137'} w="100%" h="100%" top={0} position="absolute" />
		</>
	);
};

const mapStateToProps = ({ status, survey }) => {
	return { status, answer: survey.data, current: survey.current };
};

const mapDispatchToProps = (dispatch) => {
	return {
		setSurveyPage: (data) => {
			dispatch({ type: surveyActions.SET_SURVEY_PAGE, data });
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Description);
