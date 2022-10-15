import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as formActions from 'store/actions/action-types/form-actions';
// Import library
import { useInView } from 'react-intersection-observer';
import {
	Box,
	Flex,
	Heading,
	Text,
	Center,
	Spinner,
	SimpleGrid,
	Button
} from '@chakra-ui/react';
// Import custom containers
import PageContainer from '@containers/pageContainer';
import ContentContainer from '@containers/contentContainer';
import PetitionFooter from '@containers/petitionFooter';
// Import custom components
import HeroBanner from '@components/ResponsiveBanner/hero';
// Import Strapi content components
import StrapiSEO from '@components/Strapi/StrapiSEO';
import StrapiDynamicBlocks from '@components/Strapi/StrapiDynamicContent';
import StrapiFixedButton from '@components/Strapi/StrapiFixedButton';
// Import Contents
import formContent from './form';
// Import static
import {
	headingProps,
	paragraphProps
} from '@common/styles/components/contentStyle';

import axios from 'axios';

// const API_ENDPOINT = `https://gsheet-toolkit.small-service.gpeastasia.org/v1/db/climate-commitment?q={"Status":"Approved"}`;

const API_ENDPOINT = `https://strapi.small-service.gpeastasia.org/api/thoughts`;

const Index = ({ submitted = false, strapi }) => {
	const dispatch = useDispatch();
	let theme = useSelector((state) => state?.theme);
	const pageType = strapi?.page_type?.data?.attributes?.name;
	const [ref, inView] = useInView({
		threshold: 0
	});
	const FormRef = useRef(null);

	submitted = useSelector((state) => state?.status?.submitted);

	useEffect(() => {
		dispatch({ type: formActions.SET_FORM, data: formContent }); // set form content from form.json
	}, [dispatch]);

	return (
		<>
			<StrapiSEO strapi={strapi} />
			<HeroBanner
				removeMask={strapi?.contentHero?.removeMask}
				defaultImage={
					theme?.params?.hero_image_desktop ||
					strapi?.contentHero?.desktopImageURL
				}
				imageSrcset={[
					{
						media: '(min-width: 48em)',
						srcset:
							theme?.params?.hero_image_desktop ||
							strapi?.contentHero?.desktopImageURL
					},
					{
						media: '',
						srcset:
							theme?.params?.hero_image_mobile ||
							strapi?.contentHero?.mobileImageURL
					}
				]}
				content={{
					title: theme?.params?.headline_prefix
						? theme?.params?.headline_prefix +
						  '<br/>' +
						  strapi?.contentHero?.richContent
						: strapi?.contentHero?.richContent,
					description: strapi?.contentHero?.richContentParagraph
				}}
			/>
			<Box
				className="contentOverlayWrap"
				m={{
					md: '-20px 20px',
					position: 'relative',
					backgroundColor: '#FFF',
					zIndex: 10
				}}
			>
				<PageContainer>
					<ContentContainer>
						<Box bgColor="#D2D2D2" w={'100%'} h={'60px'}></Box>
					</ContentContainer>

					<Flex flexDirection={{ base: 'column-reverse', md: 'row' }}>
						<Box flex={1}>
							<ContentContainer issue={strapi?.issue?.data?.attributes?.slug}>
								{strapi?.contentBlocks?.map(content=> <StrapiDynamicBlocks content={content} key={content?.id} />)}
								{/* {(() => {
									if (pageType?.toLowerCase() === 'donation') {
										return (
											<StrapiDynamicBlocks
												blocks={'contentBlocks'}
												strapi={strapi}
											/>
										);
									} else {
										return submitted ? (
											<StrapiDynamicBlocks
												blocks={'thankyouBlocks'}
												strapi={strapi}
											/>
										) : (
											<StrapiDynamicBlocks
												blocks={'contentBlocks'}
												strapi={strapi}
											/>
										);
									}
								})()} */}
								{/* <Box>
									<Heading as="h1" {...headingProps} color={'theme.climate'}>
										計劃描述
									</Heading>
									<Text as="p" {...paragraphProps}>
										推動環境工作，非一人能成就的事。今年世界地球日的主題是「
										<b>投資我們的星球</b>」，讓我們一起承諾愛護環境的同時，再
										<b>投資在地球</b>
										上，這是對人類未來最好的保障。身處香港，我們都可以出一分力，讓我們一起為地球作出小小的承諾，今天踏出第一步，減緩氣候危機！
									</Text>
									<Text as="p" {...paragraphProps}>
										<b>「惜碳承諾」</b>希望令我們每一位化身成為
										<b>「減碳達人」</b>
										，明白即使在香港這個彈丸之地，集眾人之力仍能為地球作出大大改變！讓我們檢視在日常生活中的碳足跡，珍惜寶貴的地球資源，為地球作出減碳承諾，遏止日益嚴重的環境問題。
									</Text>
									<Heading as="h1" {...headingProps} color={'theme.climate'}>
										請立即加入「惜碳承諾」行列:
									</Heading>
									<Text as="p" {...paragraphProps}>
										從今天承諾自己，在未來一星期，為地球作出減碳新嘗試！我們希望在
										5 月份招募 1000 位<b>「減碳達人」</b>
										，為地球減碳！若你能夠完成一星期承諾挑戰，更可以獲得一張電子
										<b>「惜碳證書」</b>，以表揚你的努力！
									</Text>
									<Text as="p" {...paragraphProps}>
										除承諾外，你更可分享一句減碳心得，與其他「減碳達人」互相支持！立即在今天許下你的承諾吧！
									</Text>
								</Box> */}
							</ContentContainer>
						</Box>
						<Box flex={1} ref={FormRef}>
							<Box zIndex="2" position="sticky" top="4px">
								<Box ref={ref}>
									<Form />
								</Box>
							</Box>
						</Box>
					</Flex>
					<BottomMarquee />
				</PageContainer>
			</Box>
			<PetitionFooter locale={'HKChinese'} />
			<StrapiFixedButton target={FormRef} targetInView={inView} />
		</>
	);
};

const Form = () => {
	const [formSubmitted, setFormSubmit] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		message: ''
	});

	const onSubmit = (e) => {
		e.preventDefault();
		// checking
		if (!formData?.message) {
			// do somethings
			return;
		}

		const submitData = {
			email: 'demo@mail.com',
			firstName: formData.name,
			lastName: '',
			campaignData1: formData.message,
			campaignData2: '',
			campaignData3: '',
			campaignData4: '',
			campaignData5: ''
		};

		axios({
			method: 'post',
			url: 'https://strapi.small-service.gpeastasia.org/api/thoughts',
			headers: {
				// Authorization: `Bearer ${token}`,
			},
			data: {
				data: submitData
			}
		})
			.then((response) => {
				setFormSubmit(true);
			})
			.catch((error) => {
				console.log('An error occurred:', error.response);
			});
	};

	const updateForm = (e) => {
		const { name, value } = e?.target;
		setFormData({ ...formData, [name]: value });
	};

	return (
		<div className="px-4 py-6">
			<form className="w-full" onSubmit={onSubmit}>
				<div className="mb-6 flex flex-wrap">
					<div className="mb-6 w-full md:mb-0">
						<label
							className="text-md mb-2 block font-bold uppercase tracking-wide"
							htmlFor="grid-first-name"
						>
							名字
						</label>
						<input
							className="mb-3 block w-full appearance-none rounded border bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none"
							id="grid-first-name"
							type="text"
							placeholder="預設"
							name="name"
							onChange={updateForm}
						/>
					</div>
				</div>
				<div className="mb-6 flex flex-wrap">
					<div className="w-full">
						<label
							className="text-md mb-2 block font-bold uppercase tracking-wide"
							htmlFor="grid-password"
						>
							留言
						</label>
						<textarea
							className="mb-3 block h-[100px] w-full appearance-none rounded border border-gray-200 bg-gray-100 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none"
							id="grid-password"
							style={{ resize: 'none' }}
							name="message"
							onChange={updateForm}
						/>
						<p className="text-xs italic text-gray-600">寫上祝福的句語 xxx</p>
					</div>
				</div>
				<div className="flex justify-end">
					{!formSubmitted ? (
						<button
							className="focus:shadow-outline rounded bg-blue-500 py-2 px-4 font-bold text-[#FFF] hover:bg-blue-700 focus:outline-none"
							type="submit"
							disabled={formSubmitted}
						>
							提交
						</button>
					) : (
						<span>已提交</span>
					)}
				</div>
			</form>
		</div>
	);
};

const BottomMarquee = () => {
	const PAGE_SIZE = 2;
	const [thoughts, setThoughts] = useState([]);
	const [pagination, setPagination] = useState(1);
	const [total, setTotal] = useState(0);
	useEffect(async () => {
		const thoughts = await axios
			.get(
				`${API_ENDPOINT}?pagination[page]=${pagination}&pagination[pageSize]=${PAGE_SIZE}`
			)
			.then((response) => {
				return response.data;
			})
			.catch(function (error) {
				console.log(error);
			});

		setThoughts(thoughts?.data);
		setTotal(thoughts?.meta?.pagination?.total);
	}, []);

	const handleFetchMore = async () => {
		const updateThoughts = await axios
			.get(
				`${API_ENDPOINT}?pagination[page]=${
					pagination + 1
				}&pagination[pageSize]=${PAGE_SIZE}`
			)
			.then((response) => {
				return response.data;
			})
			.catch(function (error) {
				console.log(error);
			});

		setThoughts([...thoughts, ...updateThoughts?.data]);
		setPagination(pagination + 1);
	};

	const handleLoadMore = () => {
		const number = total - thoughts.length;

		if (number > 0) {
			return (
				<Center my={4}>
					<Button variant="outline" onClick={() => handleFetchMore()}>
						{'讀取更多'}
					</Button>
				</Center>
			);
		}
	};

	if (thoughts?.length === 0) {
		return (
			<Center py="4">
				<Spinner color="gray.100" />
			</Center>
		);
	}

	return (
		<Box bgColor={'white'} pos={'relative'} borderRadius={'8px'} px="4" py="6">
			<Box>
				<Heading as="h2" {...headingProps} color={'theme.climate'} mb="6">
					我做得到！
				</Heading>
			</Box>
			<Box
				maxH={{ base: '480px', md: '680px' }}
				overflowY={'auto'}
				css={{
					'&::-webkit-scrollbar': {
						width: '4px'
					},
					'&::-webkit-scrollbar-track': {
						width: '6px'
					},
					'&::-webkit-scrollbar-thumb': {
						background: '#D2D2D2',
						borderRadius: '24px'
					}
				}}
			>
				<SimpleGrid columns={{ base: '1', md: '2' }}>
					{thoughts?.map((thought, i) => (
						<Box
							key={i}
							flex={1}
							boderRadius="xl"
							borderWidth="1px"
							borderLeft="4px"
							borderLeftColor={'theme.climate'}
							bgColor={'yellow.50'}
							p={4}
							overflow="hidden"
							mb="4"
							mx="2"
							fontFamily={'sans-serif'}
						>
							<Text
								fontSize={'md'}
								fontWeight={'bold'}
								color={'gray.800'}
								mb="1"
							>
								{thought?.attributes?.firstName}:
							</Text>
							<Text fontSize={'sm'} color={'gray.700'} lineHeight="2">
								{thought?.attributes?.campaignData1}:
							</Text>
						</Box>
					))}
				</SimpleGrid>

				{handleLoadMore()}
			</Box>
		</Box>
	);
};

export default Index;
