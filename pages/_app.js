import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { wrapper } from 'store/configureStore';
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import * as hiddenFormActions from 'store/actions/action-types/hidden-form-actions';

import nProgress from 'nprogress';
import theme from '@common/theme/theme';
import 'nprogress/nprogress.css';
import '@common/styles/index.scss';

Router.events.on('routeChangeStart', nProgress.start);
Router.events.on('routeChangeError', nProgress.done);
Router.events.on('routeChangeComplete', nProgress.done);

const MyApp = ({ Component, pageProps }) => {
  const dispatch = useDispatch();

  useEffect(async () => {
    let params = {};

    await window.location.search
      .slice(1)
      .split('&')
      .forEach((elm) => {
        if (elm === '') return;
        let spl = elm.split('=');
        const d = decodeURIComponent;
        params[d(spl[0])] = spl.length >= 2 ? d(spl[1]) : true;
      });

    dispatch({
      type: hiddenFormActions.SET_HIDDEN_FORM,
      data: params,
    });
  }, []);

  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
};

export default wrapper.withRedux(MyApp);
