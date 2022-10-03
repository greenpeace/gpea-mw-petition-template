import React, { useState, useEffect, useContext } from 'react';
import { Box } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { AppContext } from './context/appContext';
import AppProvider from './context/appContext';
import PetitionFooter from '@containers/petitionFooter';
import Header from './components/Header';
import StreamingPageHeader from './components/Header/StreamingPageHeader';
import SEO from './SEO';

import DonationPage from './components/DonationPage';
import StreamingPage from './components/StreamingPage';
import MainPage from './components/MainPage';

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
			<SEO />
			<AppProvider>
				<SwitchHeader />
				<SwitchPage />
				{language === 'zh_HK' && <PetitionFooter locale={'HKChinese'} />}
				{language === 'en_HK' && <PetitionFooter locale={'HKEnglish'} />}
			</AppProvider>
		</>
	);
}

const SwitchHeader = () => {
	const data = useContext(AppContext);
	return data.page !== 'streaming' ? <Header /> : <StreamingPageHeader />;
};

const SwitchPage = () => {
	const data = useContext(AppContext);

	switch (data.page) {
		case 'main':
			return <MainPage />;

		case 'donation':
			return <DonationPage />;

		case 'streaming':
			return <StreamingPage />;

		default:
			return <Box minH={'100vh'}></Box>;
	}
};
export default Index;
