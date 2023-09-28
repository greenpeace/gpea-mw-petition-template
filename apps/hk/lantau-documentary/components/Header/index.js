import React, { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import { Image, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import useScrollPosition from './useScrollPosition';
import logoChinese from '@common/images/logo/GP-logo-2019-TC-white-[web]-01.png';

const Header = ({
	nowPage
}) => {
	const data = useContext(AppContext);
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
		if(nowPage === 'streaming'){
			window.open(`${window.location.href.split('?')[0]}/?p=${page}&s=${refName}`, "_blank");
		}else{
			router.push(
				`/?p=${page}&s=${refName}`,
				`${window.location.href.split('?')[0]}/?p=${page}&s=${refName}`,
				{
					shallow: true
				}
			);
		}
		
	};

	const {
		heroSection,
		visionSection,
		swiperSection,
		supportSection,
		signupSection
	} = data;

	const MENU = [
		{
			label: '紀錄片介紹',
			page: 'main',
			refName: 'heroSection',
			ref: heroSection
		},
		{
			label: '我們的理念',
			page: 'main',
			refName: 'visionSection',
			ref: visionSection
		},
		{
			label: '大嶼有我',
			page: 'main',
			refName: 'swiperSection',
			ref: swiperSection
		},
		{
			label: '細看大嶼',
			page: 'main',
			refName: 'supportSection',
			ref: supportSection
		},
		{
			label: '立即聯署',
			page: 'main',
			refName: 'signupSection',
			ref: signupSection
		}
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
							onClick={() => {
								if(nowPage === 'streaming') return;
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
							{
								nowPage === 'streaming' ? (
									<Button
										color="white"
										bgColor={'orange.500'}
										_hover={{ bg: 'orange.300' }}
										onClick={() =>
											window.open(`https://cloud.greenhk.greenpeace.org/donation-oceans-elm?ref=lantau-documentary-petition-streaming-btn`, "_blank")
										}
									>
										捐款支持
									</Button>
								) : (
									<Button
										color="white"
										bgColor={'orange.500'}
										_hover={{ bg: 'orange.300' }}
										onClick={() =>
											router.push(
												`/?p=petition`,
												`${window.location.href.split('?')[0]}/?p=petition`,
												{ shallow: true }
											)
										}
									>
										立即觀看
									</Button>
								)
							}
							
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
