import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { wrapper } from 'store/configureStore';
import Router from 'next/router';

import nProgress from 'nprogress';
import theme from '@common/theme/theme';
import 'nprogress/nprogress.css';
import '@common/styles/index.scss';

// Hackle: import Hackle module
import { createInstance, HackleProvider } from '@hackler/react-sdk';

// Hackle: 建立hackle instance
const hackleClient = createInstance(
	'EBgQXeIcAvmJ6N3VuE3B2JwYAfNMudUP' // SDK Keys（分production和development）
);

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const MyApp = ({ Component, pageProps }) => {
	const getLayout = Component.getLayout || ((page) => page);
	console.log(
		'this page was built at: ',
		new Date(Number(process.env.timeStamp))
	);
	return (
		// Hackle: HackleProvider加在最外層
		<HackleProvider hackleClient={hackleClient}>
			<ChakraProvider theme={theme}>
				{/* Hackle: 傳props */}
				{getLayout(<Component {...pageProps} hackleClient={hackleClient} />)}
			</ChakraProvider>
		</HackleProvider>
	);
};

export default wrapper.withRedux(MyApp);
