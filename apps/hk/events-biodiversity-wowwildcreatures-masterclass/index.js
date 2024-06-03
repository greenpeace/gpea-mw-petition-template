/**
 * Deploy setting
# Project Apps Directory: /apps/{PROJECT}
PROJECT=hk/lantau-documentary
MARKET=hk
PROJECT_NAME=lantau-documentary
BASEPATH=/web/api.greenpeace.org.hk/htdocs/page/lantau-documentary
ASSETPREFIX=https://api.greenpeace.org.hk/page/lantau-documentary/
FTP_CONFIG_NAME=api_hk_cloud 
# ******** MC Cloud Page Name ********
CLOUD_PAGE_NAME=Web - Donation Form - HK - Lantau Documentary
*/

import React, { useState, useEffect, useContext } from 'react';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { AppContext } from './context/appContext';
import AppProvider from './context/appContext';
import { GlobalProvider } from './context/global';
import PetitionFooter from '@containers/petitionFooter';
import Header from './components/Header';
import DonationPage from './components/DonationPage';
import StreamingPage from './components/StreamingPage';
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
	const data = useContext(AppContext);

	switch (data.page) {
		case 'main':
			return <MainPage />;

		case 'petition':
			return <DonationPage />;

		case 'thankyou':
			return <ThanksPage />;

		case 'streaming':
			return <StreamingPage />;

		case 'login':
			return <LoginPage />;

		case 'episodes':
			return <EpisodesPage />;

		case 'video':
			return <VideoPage />;

		default:
			return <Box minH={'100vh'}></Box>;
	}
};

export default Index;
