/**
 * Deploy setting
# Project Apps Directory: /apps/{PROJECT}
PROJECT=hk/events-biodiversity-wowwildcreatures-masterclass
MARKET=hk
PROJECT_NAME=events-biodiversity-wowwildcreatures-masterclass
BASEPATH=/web/api.greenpeace.org.hk/htdocs/page/events-biodiversity-wowwildcreatures-masterclass
ASSETPREFIX=https://api.greenpeace.org.hk/page/events-biodiversity-wowwildcreatures-masterclass/
FTP_CONFIG_NAME=api_hk_cloud 
# ******** MC Cloud Page Name ********
CLOUD_PAGE_NAME=events-biodiversity-wowwildcreatures-masterclass
*/

import React, { useState, useEffect, useContext } from 'react';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { AppContext } from './context/appContext';
import AppProvider from './context/appContext';
import { GlobalProvider } from './context/global';
import PetitionFooter from '@containers/petitionFooter';
import Header from './components/Header';
import MainPage from './components/MainPage';
import ThanksPage from './components/ThanksPage';
import LoginPage from './components/LoginPage';
import EpisodesPage from './components/EpisodesPage';
import VideoPage from './components/VideoPage';

function Index() {
	const router = useRouter();
	const [language, setLanguage] = useState('zh_HK');

	

	useEffect(() => {
		const { language } = router.query;
		if (language == 'zh_HK' || language == 'en_HK') {
			setLanguage(language);
			console.log(language);
		}
	}, [router.isReady]);

	return (
		<>
			<AppProvider>
				<GlobalProvider>
					<SwitchHeader />
					<SwitchPage />
					{language === 'zh_HK' && <PetitionFooter locale={'HKChinese'} />}
					{language === 'en_HK' && <PetitionFooter locale={'HKEnglish'} />}
				</GlobalProvider>
			</AppProvider>
		</>
	);
}

const SwitchHeader = () => {
	const data = useContext(AppContext);
	return <Header nowPage={data.page} />;
};

const SwitchPage = () => {
	// get utm_source
	const hiddenForm = useSelector((state) => state?.hiddenForm);
	const { utm_source } = hiddenForm?.data;

	const data = useContext(AppContext);

	switch (data.page) {
		case 'main':
			return <MainPage utm_source={utm_source} />;

		case 'petition':
			return <DonationPage />;

		case 'thankyou':
			return <ThanksPage utm_source={utm_source} />;

		case 'streaming':
			return <StreamingPage />;

		case 'login':
			return <LoginPage />;

		case 'episodes':
			return <EpisodesPage utm_source={utm_source} />;

		case 'video':
			return <VideoPage utm_source={utm_source} />;

		default:
			return <Box minH={'100vh'}></Box>;
	}
};

export default Index;
