import {
	Button,
	Box,
	Image,
	Stack,
	Center,
	Text,
	Heading
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import LazyShow from './components/LazyShow';
import * as surveyActions from 'store/actions/action-types/survey-actions';
import {
	paragraphProps,
	headingProps
} from '@common/styles/components/contentStyle';

import bg from './images/landing-bg.jpg';
import mobileBG from './images/landing-bg-m.jpg';
import TitleKeyVisual from './images/title.png';

const Landing = ({ setSurveyPage }) => {
	return (
		<Box h={'100vh'} w={'100%'} pos={'relative'}>
			<Box
				pos={'relative'}
				display={'flex'}
				// mt={'-55px'}
				h={'100%'}
				minWidth={'180px'}
				alignItems={{ base: 'flex-start', lg: 'flex-end' }}
				zIndex={'2'}
			>
				<Stack
					mt={{ base: 24, lg: 0 }}
					ml={{ base: 4, lg: '2.5%' }}
					mr={4}
					mb={{ lg: '4.5%' }}
				>
					<Box
						p={{ base: 0 }}
						w={{ base: 'auto', md: 'auto' }}
						minWidth={'280px'}
						maxWidth={{ base: '100%', lg: '700px', '2xl': '820px' }}
					>
						<LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.25}>
							<Image src={TitleKeyVisual} alt="你對大海的認識有多深？" />
						</LazyShow>
					</Box>
					<Box {...paragraphProps}>
						<Heading
							{...headingProps}
							color={'white'}
							fontSize={{ base: '2xl', lg: '4xl', '2xl': '42px' }}
							mb={'.3em'}
							lineHeight={1.3}
						>
							海水覆蓋約 70% 地表，然而我們對火星和月球
							<br />
							表面的了解程度都遠高於對深海的了解！
						</Heading>
						<Text
							color={'white'}
							fontSize={{ lg: 'xl', '2xl': '2xl' }}
							lineHeight={1.5}
							maxWidth="805px"
						>
							深海是地球上最大、但最不為人所知的區域，而科學家們將這片神秘領域稱為
							「內太空」，邀請你與綠色和平透過測驗一同航行、探索、與研究......
						</Text>
					</Box>
					<Box my={4} maxWidth={{ base: 'auto', sm: 'auto' }}>
						<LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.25}>
							<Button
								mt={'.5em'}
								rounded={{ lg: 12 }}
								variant={'quizSquare'}
								fontSize={{ base: 'xl', sm: '2xl', '2xl': '3xl' }}
								px={{ base: 10, sm: 16, '2xl': 20 }}
								py={{ base: 4, sm: 8, '2xl': 12 }}
								onClick={() => setSurveyPage('quiz')}
							>
								立即潛入未知的「內太空」
							</Button>
						</LazyShow>
					</Box>

					{/* <Box
              maxWidth={{ base: '50%', sm: 'auto' }}
              alignSelf={'center'}
              onClick={() => setSurveyPage('description')}
            >
              <LazyShow initial={{ opacity: 0, x: 0, y: 0 }} duration={0.25}>
                <Image
                  src={startButton}
                  cursor={'pointer'}
                  _hover={{ opacity: 0.85 }}
                />
              </LazyShow>
            </Box> */}
				</Stack>
			</Box>
			<Box
				position="absolute"
				top={0}
				bottom={0}
				w={'100%'}
				h={'100%'}
				bgSize={'cover'}
				bgRepeat={'no-repeat'}
				objectFit={'cover'}
				bgImage={{ base: mobileBG, lg: bg }}
				bgPosition={{
					base: 'center bottom',
					lg: 'right center'
					// lg: 'center center',
				}}
				zIndex={'1'}
			></Box>
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
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
