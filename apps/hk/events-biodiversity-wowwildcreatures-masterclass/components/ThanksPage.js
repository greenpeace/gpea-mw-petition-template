import React, { useEffect, useRef } from 'react';
import { Box, Image } from '@chakra-ui/react';

import DonationModule from '@components/GP/DonationModule';

import { connect } from 'react-redux';
import formContent from '../form';
import * as formActions from 'store/actions/action-types/form-actions';
import * as signupActions from 'store/actions/action-types/signup-actions';
import * as statusActions from 'store/actions/action-types/status-actions';
import { useRouter } from 'next/router';
import RobertClassHero from './RobertClassHero';
import table from '../images/robert-class/list/06_non_donor_incentive_tier_t.png';
import thanks from '../images/robert-class/thanks/08_thank_you_with_hk_animals.png';
import GeneralCarousel from './GeneralCarousel';
import { scrollToRef } from '../util';
const WRAPPER_CLASSES = 'container px-4 relative mx-auto md:max-w-[1345px]';

function ThanksPage({ status, setFormContent, theme, resetSubmitted }) {
	const { submitted } = status;
	const signupSection = useRef(null);
	const router = useRouter();
	const { p, ep, s } = router.query;
	useEffect(() => {
		setFormContent(formContent);
		resetSubmitted();
		window.scrollTo({
			top: 0,
			behavior: 'auto'
		});
	}, []);

	useEffect(() => {
		window.__greenpeace__ = window.__greenpeace__ || {};
		if (window.__greenpeace__?.renderDonationModule) {
			window.__greenpeace__.renderDonationModule();
		}
	}, [submitted]);

	useEffect(() => {
		const REFS = {
			signupSection: signupSection,
		};

		if (!!s) {
			const ref = s;
			if (ref) {
				// eslint-disable-next-line react-hooks/exhaustive-deps
				scrollToRef(REFS[ref]);
			}
		}
	}, [s]);

	return (
		<Box>
			<RobertClassHero />
			<div className="spacer flex-col space-y-12">
				<div
					className={`${WRAPPER_CLASSES} mt-[30px] md:mt-[-240px]`}
					style={{ zIndex: 10 }}
				>
					<div className="relative z-10 flex flex-col gap-8 md:gap-0 lg:flex-row">
						<div className="relative flex w-[100%] flex-1 flex-col gap-8 pb-8 md:mt-[270px]">
							<div className="flex w-full flex-col gap-4">
								<h1 className="text-2xl font-bold text-[#007c00] md:text-3xl">
									感謝您參與相識香港野——生態探索及攝影大師班！
								</h1>
								<p className="">
									感謝您登記參與相識香港野——生態探索及攝影大師班，與我們一起探索香港的珍貴自然生態。現在，您可以開始免費觀看由生態攝影師Robert
									Ferguson親身教授的六集課堂影片，深入了解香港的野生動物和牠們的棲息地。
								</p>

								<p className="font-bold">
									好消息！若您已是綠色和平捐款會員，您更可額外欣賞會員限定的第七集精彩內容！
								</p>

								<p className="">* 2024 年 6 月 5 日起，逢星期三更新最新集數</p>
							</div>

							<div className="flex w-full flex-col gap-4">
								<h1 className="text-2xl font-bold text-[#007c00] md:text-3xl">
									影片連結正發送至您的電子郵箱
								</h1>
								<p className="">
									您將在 15 - 20
									分鐘內收到我們的電郵，只需點擊電郵中的大師班網站連結，並輸入登入密碼，即可免費觀看。
								</p>

								<p className="">
									如果您在 30
									分鐘後仍未收到相關電郵，請檢查您的垃圾郵件電郵夾。如您仍未找到電郵，請與我們聯絡，我們將儘快為您提供協助。
								</p>
							</div>
							<div className="flex w-full flex-col gap-4">
								<h1 className="text-2xl font-bold text-[#007c00] md:text-3xl">
									在等待的同時，您願意為守護香港自然環境出一分力嗎？您的捐款將幫助我們：
								</h1>
								<ul className="list-disc p-6">
									<li>推廣生態教育，提升公眾對自然環境的認識和愛護</li>
									<li>
										進行科學研究和調查，深入了解野生動物的生態習性和棲息地狀況，為保育策略提供堅實的科學基礎
									</li>
									<li>推動與環境相關的政策倡議，為保護香港的自然資源發聲</li>
								</ul>

								<p className="underline-offset-3 underline">
									我們承諾，每一分捐款都將被妥善使用，並致力於保持財務資訊的透明度。
								</p>
							</div>

							<div className="flex w-full flex-col gap-4">
								<h1 className="text-2xl font-bold text-[#007c00] md:text-3xl">
									成為我們的月捐會員，共同守護香港野
								</h1>
								<p className="">
									現在以每月 HK$100
									支持我們，即可解鎖第七集會員獨家限定集數，並獲贈限量版《相識香港野》紀念品。
								</p>
							</div>

							<div className="relative w-[100%] flex-1">
								<Image src={table} alt="06_donor_incentive_tier_t" />
							</div>

							<Box px={1}>
								<GeneralCarousel />
							</Box>
						</div>
						<Box className="relative w-[100%] flex-1" ref={signupSection}>
							<Box
								className="md:sticky md:top-[70px]"
								maxW="500px"
								mx="auto"
								bgColor="white"
								borderRadius={8}
								boxShadow="lg"
								overflow="hidden"
							>
								<DonationModule
									market={'HK'}
									language={'zh_HK'}
									campaign={'biodiversity'}
									campaignId={'701If000000xF73IAE'}
									env={'production'}
								/>
							</Box>
						</Box>
					</div>
				</div>
			</div>

			<Image
				src={thanks}
				maxW={{ base: 240, md: 500 }}
				mx={'auto'}
				alt={'08_thank_you_with_hk_animals'}
			/>
		</Box>
	);
}

const mapStateToProps = ({ status, theme, form, signup }) => {
	return { status, theme: theme.data, form, signup: signup.data };
};

const mapDispatchToProps = (dispatch) => {
	return {
		setFormContent: (data) => {
			dispatch({ type: formActions.SET_FORM, data });
		},
		resetSubmitted: () => {
			dispatch({ type: signupActions.RESET_SUBMITTED });
			dispatch({ type: statusActions.SET_FORM_SUBMITTED, data: false });
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ThanksPage);
