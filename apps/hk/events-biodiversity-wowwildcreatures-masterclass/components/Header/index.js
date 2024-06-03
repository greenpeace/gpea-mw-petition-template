import React, { useContext } from 'react';
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
	IconButton
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import useScrollPosition from './useScrollPosition';
import logoChinese from '@common/images/logo/GP-logo-2019-TC-white-[web]-01.png';

import { ArrowForwardIcon } from '@chakra-ui/icons';
const Header = ({ nowPage }) => {
	const data = useContext(AppContext);
	const value = useGlobalContext();
	const isUserLoggedIn = value?.isLoggedIn === 'loggedIn';
	const router = useRouter();
	const OFFSET = 10;
	const scrollPosition = useScrollPosition();
	const stickyStyle = {
		wrap: scrollPosition > OFFSET ? 'bg-[#66CC00]' : '',
		border: scrollPosition > OFFSET ? '' : 'border-b-[1px]'
	};
	const handleMenuOnClick = (main, link, refName, page) => {
		// let url = new URL(window.location);
		// console.log('params-',url)
		// history.pushState({}, null, `${url.origin}/?p=${page}&s=${refName}`)
		if (nowPage === 'streaming') {
			window.open(
				`${window.location.href.split('?')[0]}/?p=${page}&s=${refName}`,
				'_blank'
			);
		} else {
			router.push(
				`/?p=${page}&s=${refName}`,
				`${window.location.href.split('?')[0]}/?p=${page}&s=${refName}`,
				{
					shallow: true
				}
			);
		}
	};

	const handleLogoutButtonClick = () => {
		if (typeof window !== "undefined" && window.localStorage) {
		value.setLoggedIn("");
		localStorage.removeItem("gpea-project");
		localStorage.removeItem("gpea-project-passCode");
		router.push("/");
		}
	  };

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
                  label: "所有集數",
                  page: "episodes",
                  refName: "",
                },
              ]
            : []),
	];

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
								if (nowPage === 'streaming') return;
								router.push(
									`/?p=main`,
									`${window.location.href.split('?')[0]}/?p=main`,
									{ shallow: true }
								);
							}}
						/>
					</div>
					<div>
						<div className="flex flex-row items-center gap-8">
							{(MENU || []).map((d) => (
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
											`${window.location.href.split('?')[0]}/?p=main&s=signupSection`,
											{ shallow: true }
										)
									}
								>
									立即登記
								</Button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
