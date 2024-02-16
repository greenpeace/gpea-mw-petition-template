/**
 * Deploy setting
# Project Apps Directory: /apps/{PROJECT}
PROJECT=tw/before-you-eat
MARKET=tw
PROJECT_NAME=petition-oceans-beforeyoueat
BASEPATH=/htdocs/2024/before-you-eat
ASSETPREFIX=https://change.greenpeace.org.tw/2024/before-you-eat/
FTP_CONFIG_NAME=ftp_tw
# ******** MC Cloud Page Name ********
CLOUD_PAGE_NAME=zh-TW.2024.before-you-eat.signup
*/

import React, { useState, useEffect, useContext } from 'react';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import { AppContext } from './context/appContext';
import AppProvider from './context/appContext';
import PetitionFooter from '@containers/petitionFooter';
import Header from './components/Header';
import StreamingPageHeader from './components/Header/streamingPageHeader';
import SEO from './SEO';

import DonationPage from './components/DonationPage';
import StreamingPage from './components/StreamingPage';
import MainPage from './components/MainPage';

function Index() {
	/* #region HK */
	// const router = useRouter();
	// const [language, setLanguage] = useState('zh_HK');

	// useEffect(() => {
	// 	const { language } = router.query;
	// 	if (language == 'zh_HK' || language == 'en_HK') {
	// 		setLanguage(language);
	// 		console.log(language);
	// 	}
	// }, [router.isReady]);
	/* #endregion */

	return (
		<>
			<SEO />
			<AppProvider>
				<Header />
				<StreamingPage />
				{<PetitionFooter locale={'TWChinese'} />}
				{/* {language === 'zh_HK' && <PetitionFooter locale={'HKChinese'} />}
				{language === 'en_HK' && <PetitionFooter locale={'HKEnglish'} />} */}
			</AppProvider>
		</>
	);
}

// const SwitchHeader = () => {
// 	const data = useContext(AppContext);
// 	return <Header nowPage={data.page} />;
// };

const SwitchPage = () => {
	const data = useContext(AppContext);

	switch (data.page) {
		case 'main':
			return <MainPage />;

		case 'petition':
			return <DonationPage />;

		case 'streaming':
			return <StreamingPage />;

		default:
			return <Box minH={'100vh'}></Box>;
	}
};

export default Index;
