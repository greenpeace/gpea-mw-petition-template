import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { wrapper } from 'store/configureStore';
import Router from 'next/router';

import nProgress from 'nprogress';
import theme from '@common/theme/theme';
import 'nprogress/nprogress.css';
import '@common/styles/index.scss';

import TagManager from 'react-gtm-module';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      TagManager.initialize({ gtmId: 'GTM-M6LZL75' });
    }
  }, []);
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
};

export default wrapper.withRedux(MyApp);
