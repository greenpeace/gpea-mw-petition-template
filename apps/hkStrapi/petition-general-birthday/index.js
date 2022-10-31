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
import ThanksBanner from '@components/ResponsiveBanner/thanks';
// import DonateFAQ from '@components/DonateFAQ';
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
			<Box>
				{(() => {
					if (pageType?.toLowerCase() === 'donation') {
						return (
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
						);
					} else {
						return submitted ? (
							<ThanksBanner
								removeMask={strapi?.contentHero?.removeMask}
								defaultImage={
									theme?.params?.hero_image_desktop ||
									strapi?.thankyouHero?.desktopImageURL
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
									title: strapi?.thankyouHero?.richContent,
									description: strapi?.thankyouHero?.richContentParagraph
								}}
							/>
						) : (
							<HeroBanner
								removeMask={strapi?.contentHero?.removeMask}
								defaultImage={
									theme?.params?.hero_image_desktop ||
									strapi?.thankyouHero?.desktopImageURL
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
						);
					}
				})()}
			</Box>
			<Box>
				<PageContainer>
					<ContentContainer>
						<Box>
							<img
								className="h-auto max-w-full"
								src="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/10/855db730-sl_111019_24830_70-scaled.jpg"
							/>
						</Box>
					</ContentContainer>

					<Flex
						flexDirection={{ base: 'column-reverse', md: 'row' }}
						className="contentWrap"
					>
						<Box flex={1} minWidth={0}>
							<ContentContainer issue={strapi?.issue?.data?.attributes?.slug}>
								<Box>
									<img
										className="h-auto max-w-full"
										src="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/10/855db730-sl_111019_24830_70-scaled.jpg"
									/>
								</Box>
								{(() => {
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
								})()}
							</ContentContainer>
							<BottomMarquee />
						</Box>
						<Box flex={1} ref={FormRef}>
							<Box zIndex="2" position="sticky" top="4px">
								<Box ref={ref}>
									<Form />
								</Box>
							</Box>
						</Box>
					</Flex>
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
			<div>
				<h1 className="mt-0 mb-2 text-3xl font-medium leading-tight text-blue-600">
					Gather your birthday wishes
				</h1>
			</div>
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
							borderRadius="4px"
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
