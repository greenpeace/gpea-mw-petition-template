import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../../context/appContext';
import { useGlobalContext } from '../../context/global';
import {
	Image,
	Button,
	Menu,
	MenuButton,
	MenuList,
	MenuItem,
	Avatar,
	IconButton,
	useDisclosure,
	Drawer,
	DrawerBody,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Stack,
	Flex,
	Text
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import useScrollPosition from './useScrollPosition';
import logoChinese from '@common/images/logo/GP-logo-2019-TC-white-[web]-01.png';
import { HamburgerIcon } from '@chakra-ui/icons';
import { ArrowForwardIcon } from '@chakra-ui/icons';
const Header = ({ nowPage }) => {
	const value = useGlobalContext();
	const isUserLoggedIn = value?.isLoggedIn === 'loggedIn';
	const router = useRouter();
	const OFFSET = 10;
	const scrollPosition = useScrollPosition();
	const btnRef = useRef();
	const { isOpen, onOpen, onClose, onToggle } = useDisclosure();
	const { p, s } = router.query;

	const MENU = [
		{
			label: '課程一覽',
			page: 'main',
			refName: 'courseSection'
		},
		{
			label: '預告片',
			page: 'main',
			refName: 'videoListSection'
		},
		{
			label: '導師簡介',
			page: 'main',
			refName: 'introSection'
		},
		{
			label: '我們的工作',
			page: 'main',
			refName: 'ourWorkSection'
		},
		...(isUserLoggedIn
			? [
					{
						label: '所有集數',
						page: 'episodes',
						refName: 'episodes'
					},
					{
						label: '資源下載',
						page: 'episodes',
						refName: 'downloads'
					}
			  ]
			: [])
	];

	const EP_MENU = [
		{
			label: '所有集數',
			page: 'episodes',
			refName: 'episodes'
		},
		{
			label: '資源下載',
			page: 'episodes',
			refName: 'downloads'
		}
	];

	const [nav, setNav] = useState(MENU);

	const urlParams = new URLSearchParams(router.asPath);
	const stickyStyle = {
		wrap:
			scrollPosition > OFFSET
				? 'bg-[#66CC00]'
				: p === 'video'
				? 'bg-[#66CC00]'
				: '',
		border: scrollPosition > OFFSET ? '' : p === 'video' ? '' : 'border-b-[1px]'
	};

	useEffect(() => {
		if (p === 'main') {
			setNav(MENU);
		}
		if (p === 'episodes') {
			setNav(EP_MENU);
		}
	}, [p]);

	const handleMenuOnClick = (main, link, refName, page) => {
		const epParams = urlParams.get('ep') && '&ep=' + urlParams.get('ep');
		let url = `/?p=${page}&s=${refName}`;
		let as = `${window.location.href.split('?')[0]}/?p=${page}&s=${refName}`;
		if (epParams) {
			url = url + epParams;
			as = as + epParams;
		}

		router.push(url, as, {
			shallow: true
		});
	};

	const handleLogoutButtonClick = () => {
		if (typeof window !== 'undefined' && window.localStorage) {
			value.setLoggedIn('');
			localStorage.removeItem('gpea-project');
			localStorage.removeItem('gpea-project-passCode');
			handleMenuOnClick('','','','main');
		}
	};

	const MobileNavItem = ({ navItem }) => {
		return (
			<Stack spacing={0} w="full">
				<Flex
					py={4}
					justify={'space-between'}
					align={'center'}
					_hover={{
						textDecoration: 'none'
					}}
					onClick={() => {
						handleMenuOnClick(
							navItem.value,
							navItem.label,
							navItem.refName,
							navItem.page
						);
						onToggle();
					}}
				>
					<Text
						fontWeight={600}
						w="full"
						color={navItem.refName === 'signupSection' || navItem.refName === 'donateSection' ? '#FF8100' : ''}
					>
						{navItem.label}
					</Text>
				</Flex>
			</Stack>
		);
	};

	const MobileNav = () => {
		return (
			<Stack p={4} display={{ lg: 'none' }}>
				{nav.map((navItem, index) => (
					<MobileNavItem
						key={`${navItem.label}-${index}`}
						label={navItem?.label}
						navItem={navItem}
					/>
				))}
				{!isUserLoggedIn && (
					<MobileNavItem
						key={`donation`}
						label={`立即捐款`}
						navItem={{
							label: '立即捐款',
							page: 'main',
							refName: 'signupSection'
						}}
					/>
				)}
				{(isUserLoggedIn && nowPage === 'episodes') && (
					<MobileNavItem
						key={`donation`}
						label={`立即捐款`}
						navItem={{
							label: '立即捐款',
							page: 'episodes',
							refName: 'donateSection'
						}}
					/>
				)}
			</Stack>
		);
	};

	return (
		<div
			className={`fixed top-0 px-4 ${stickyStyle.wrap} w-full transition-all duration-500`}
			style={{ zIndex: 99 }}
		>
			<div
				className={`${stickyStyle.border} left-0 right-0 mx-auto md:max-w-[1345px]`}
			>
				<div className="flex h-[64px] flex-row items-center space-x-0">
					<div className="flex-1">
						<Image
							src={logoChinese}
							maxW="220px"
							alt={'Greenpeace 綠色和平'}
							cursor={'pointer'}
							onClick={() => {
								if (nowPage === 'episodes') return;
								router.push(
									`/?p=main`,
									`${window.location.href.split('?')[0]}/?p=main`,
									{ shallow: true }
								);
							}}
						/>
					</div>
					<div>
						<div className="flex flex-row items-center gap-2 lg:gap-8">
							{(nav || []).map((d) => (
								<div
									className="hidden cursor-pointer  text-[16px] text-[#FFF] hover:font-bold lg:block"
									key={d.label}
									onClick={() => {
										handleMenuOnClick(d.value, d.label, d.refName, d.page);
									}}
								>
									{d.label}
								</div>
							))}
							{isUserLoggedIn && nowPage === 'episodes' && (
								<Button
									d={{ base: 'none', lg: 'block' }}
									color="white"
									bgColor={'orange.500'}
									_hover={{ bg: 'orange.300' }}
									onClick={() =>
										handleMenuOnClick('', '', 'donateSection', 'episodes')
									}
								>
									立即捐款
								</Button>
							)}

							{isUserLoggedIn ? (
								<Menu>
									<MenuButton
										as={IconButton}
										aria-label="Options"
										icon={<Avatar size="sm" bg="#007c00" cursor={'pointer'} />}
										variant="unstyled"
									/>
									<MenuList>
										<MenuItem
											icon={<ArrowForwardIcon />}
											onClick={() => handleLogoutButtonClick()}
										>
											登出
										</MenuItem>
									</MenuList>
								</Menu>
							) : (
								<Button
									color="white"
									bgColor={'orange.500'}
									_hover={{ bg: 'orange.300' }}
									onClick={() =>
										router.push(
											`/?p=main&s=signupSection`,
											`${
												window.location.href.split('?')[0]
											}/?p=main&s=signupSection`,
											{ shallow: true }
										)
									}
								>
									立即捐款
								</Button>
							)}

							<IconButton
								display={{ lg: 'none' }}
								color="white"
								bgColor={'transparent'}
								_hover={{ bg: 'transparent' }}
								aria-label="Menu button"
								icon={<HamburgerIcon />}
								onClick={() => onToggle()}
							/>
						</div>
					</div>
				</div>
			</div>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerBody>
						<MobileNav />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</div>
	);
};

export default Header;
