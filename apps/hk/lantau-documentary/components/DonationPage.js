import React, { useEffect, useState } from 'react';
import { Box, Center, Image, Text, Heading, UnorderedList, ListItem, AspectRatio } from '@chakra-ui/react';

import MobileHero from '../images/mobile/hero.png';
import MobileHeroFront from '../images/mobile/hero_front.png';
import DesktopHero from '../images/hero_v2.jpg';
import DesktopHeroFront from '../images/hero_front_v2.png';

import PlayButton from '../images/donate/play_button.png';

import regFlow from '../images/graphics-reg-flow.jpg';
import thankPhoto from '../images/Thankyoupage_film_v2_cap screen.00_17_23_07.Still074.jpg'

import DonationModule from '@components/GP/DonationModule';
import SignupForm from '@components/GP/WebinarForm';


import { connect } from 'react-redux';
import formContent from '../form';
import * as formActions from 'store/actions/action-types/form-actions';
import * as signupActions from 'store/actions/action-types/signup-actions';
import * as statusActions from 'store/actions/action-types/status-actions';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';


function Index({ status, setFormContent, theme, resetSubmitted, signup }) {
	const themeInterests = theme.interests;
	const [tab, setTab] = useState(0);
	const { submitted } = status;

	const { FirstName } = signup;

	const [signupBtnRef, setSignupBtnRef] = useState(null);
	

	useEffect(() => {
		setFormContent(formContent);
		resetSubmitted();
		window.scrollTo({
			top: 0,
			behavior: 'auto'
		});
	}, []);
	useEffect(() => {
		
		console.log("submitted",submitted)
		window.__greenpeace__ = window.__greenpeace__ || {};
		if(window.__greenpeace__?.renderDonationModule && submitted){
			
			window.__greenpeace__.renderDonationModule()
		}
	}, [submitted]);

	return (
		<>
			<div className="relative pb-[60px]">
				<Box
					backgroundImage={{ base: MobileHero, lg: DesktopHero }}
					backgroundPosition={'top center'}
					backgroundRepeat="no-repeat"
					backgroundSize={'100%'}
					w={'100%'}
					position="absolute"
					top={0}
					bottom={0}
					backgroundAttachment={'fixed'}
				/>
				<Box
					backgroundImage={{ base: MobileHeroFront, lg: DesktopHeroFront }}
					backgroundPosition={'top center'}
					backgroundRepeat="no-repeat"
					backgroundSize={'100%'}
					w={'100%'}
					position="absolute"
					top={0}
					bottom={0}
					zIndex={2}
					className="frontHero"
				/>
				<div
					className="container relative mx-auto px-[20px]"
					style={{ zIndex: 11 }}
				>
					<div className="flex flex-col pt-[140px] pb-[40px] md:py-0 md:pt-[80px] lg:pt-[200px]">
						<div className="text-center text-[#FFF]">
							<div>
								<h2
									className="text-3xl font-bold md:text-5xl "
									style={{ textShadow: '0 0 4px rgba(0,0,0,0.8)' }}
								>
									<div className="leading-normal">
										<span className="block ">立即登記</span>
										<span className="md:inline-block">
											免費觀看《山海大嶼》紀錄片
										</span>
									</div>
								</h2>
							</div>
						</div>
					</div>
				</div>

				<div
					className="container relative mx-auto px-[20px] pt-[40px] md:max-w-[1345px] md:pt-[140px]"
					style={{ zIndex: 10 }}
				>
					<div className="relative z-10 flex flex-col-reverse gap-8 lg:flex-row">
						<div className="relative w-[100%] flex-1">
							{
								submitted ? (
									<div className="rounded-xl bg-white py-0 md:py-10">
										<Box px={{base: 0, md: 10}}>
											<Heading
												{...headingProps}
												as={'h3'}
												color={`theme.${themeInterests}`}
											>
												{ FirstName }，<br />感謝您登記觀看《山海大嶼》紀錄片
											</Heading>
											<Text as="p" {...paragraphProps}>感謝您登記觀看我們的《山海大嶼》紀錄片，共同守護大嶼山的珍貴生態和自然美景。您現在可以免費觀看我們耗時大半年製作的《山海大嶼》紀錄片，進一步了解大嶼山的生態價值及其珍稀生物！
											</Text>
											<Heading
												{...headingProps}
												as={'h3'}
												color={`theme.${themeInterests}`}
											>
												我們已經向您發送了影片的連結和觀看密碼，感謝您參與我們的活動。
											</Heading>
											<Text
												{...paragraphProps}
												as={'p'}
											>
												通常，您將在幾分鐘內會收到我們的電子郵件。只需點擊電子郵件中的影片連結並輸入密碼，即可免費觀看。
											</Text>
											<Text
												{...paragraphProps}
												as={'p'}
											>
												如果您在 15 分鐘後仍未收到相關電子郵件，請檢查您的垃圾郵件檔案夾。如果您仍未找到電子郵件，請隨時與我們聯繫，我們將竭誠為您提供協助。
											</Text>
											<Heading
												{...headingProps}
												as={'h3'}
												color={`theme.${themeInterests}`}
											>
												在您等待的時候，您願意考慮進一步支持綠色和平嗎？
											</Heading>
											<Text as="p" {...paragraphProps}>
												您的支持不僅代表經濟上的援助，更是一種力量，推動我們共同的目標：保護香港的自然資源和生態環境。 每天只要捐款HK$3，即可：
												<UnorderedList my={4}>
													<ListItem>
													生態保護行動：透過連結公眾發聲，阻截破壞郊野生態的行徑和發展計劃，令珍貴的物種和生境得以有喘息空間。
													</ListItem>
													<ListItem>
														推廣教育活動：開展更多的教育和宣傳活動，讓更多人了解大嶼山的珍貴價值及其所面臨的威脅。
													</ListItem>
													<ListItem>
														影響政策決定：以紮實、專業的研究，向政府提出更多「明日大嶼」填海以外的可行覓地建議和替代方案。
													</ListItem>
												</UnorderedList>
												您的捐款是我們維持獨立和公正的保證。 我們所有的資源都來自於熱心人士，而不是政府或企業捐款。 我們承諾，每一分捐款都將謹慎使用，並致力於資訊透明化。
											</Text>
											<Box {...paragraphProps}>
												<Image src={thankPhoto} />
											</Box>
										</Box>
									</div>
									
								):(
									<>
										<div className="mb-[30px] w-full overflow-hidden rounded-lg bg-[#000]">
											<AspectRatio w="100%" ratio={16 / 9}>
												<iframe
													src="https://www.youtube.com/embed/KeMRrYCfKFI"
													allowFullScreen
												/>
											</AspectRatio>
										</div>
										<div className="rounded-xl bg-white py-0 md:py-10">
											<CONTENT01 />
										</div>
									</>
								)
							}
						
						</div>
						<div className="relative w-[100%] flex-1">
							<Box
								className="md:sticky md:top-[70px]"
								maxW="500px"
								mx="auto"
								bgColor="white"
								borderRadius={8}
								boxShadow="lg"
								overflow="hidden"
							>
							{
								submitted ? (
									<DonationModule
										market={'HK'}
										language={'zh_HK'}
										campaign={'elm_infopage'}
										campaignId={theme.CampaignId}
										env={'production'}
									/>
								):(
									<SignupForm setSignupBtnRef={ setSignupBtnRef } />
								)
							}
							</Box>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

const CONTENT01 = () => (
	<Box px={{
		base: 0,
		md: 10
	}}>
		<div className='content'>
			<p className='mb-6'>
				綠色和平聯同本地得獎生態攝影團隊耗時大半年製作的生態紀錄片《山海大嶼》片長25分鐘，紀錄大嶼山超過20個物種的珍貴片段，包括中華白海豚、江豚、翻石鷸、馬蹄蟹、香港瘰螈、牛背鷺等等。全片包含航拍、水底拍攝、夜視拍攝等鏡頭，務求將大嶼山生態最真實一面呈現熒幕上，全方位帶領大眾了解大嶼山豐富生物多樣性、值得香港人驕傲的一面。
			</p>
			<h3 className='text-xl font-bold mb-6'>如何觀看</h3>
			<p>
				<img src={ regFlow } width={'61.54%'}/>
			</p>
			
		</div>
		
	</Box>
);

const ThankContent = () => (
	<Box px={{base: 0, md: 10}}>
		{ FirstName }
	</Box>
)


const mapStateToProps = ({ status, theme, form, signup }) => {
	return { status, theme: theme.data, form, signup:signup.data };
};

const mapDispatchToProps = (dispatch) => {
	return {
		setFormContent: (data) => {
			dispatch({ type: formActions.SET_FORM, data });
		},
		resetSubmitted: () => {
			dispatch({ type: signupActions.RESET_SUBMITTED });
			dispatch({ type: statusActions.SET_FORM_SUBMITTED, data:false });
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
