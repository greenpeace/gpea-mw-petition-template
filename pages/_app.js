import React, { useEffect } from 'react';
import { ChakraProvider, CSSReset } from '@chakra-ui/react';
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

const MyApp = ({ Component, pageProps, props }) => {
  const dispatch = useDispatch();

  useEffect(async () => {
    let params = {};
    const getHiddenFields = document.querySelectorAll(
      'input[value][type="hidden"]:not([value=""])',
    );
    const hiddenFormValue = await [...getHiddenFields].reduce(
      (obj, e) => ({ ...obj, [e.name]: e.value }),
      {},
    );

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
      data: {
        ...hiddenFormValue,
        ...params,
      },
    });
  }, []);

  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  );
};

export default wrapper.withRedux(MyApp);

export async function getStaticProps(context) {
  const envProjectName = process.env.projectName;
  const fetchURLs = [
    process.env.themeEndpoint,
    process.env.signupNumbersHK,
    process.env.signupNumbersTW,
  ];

  const result = await axios.all(fetchURLs.map((d) => axios.get(d))).then(
    axios.spread(async (...res) => {
      const getTheme = await res[0].data.records.find(
        (d) => d.ProjectName === envProjectName,
      );
      const getSignupNumbersHK = res[1].data.find(
        (d) => d.Id === getTheme.CampaignId,
      );
      const getSignupNumbersTW = res[2].data.find(
        (d) => d.Id === getTheme.CampaignId,
      );

      return { getTheme, getSignupNumbersHK, getSignupNumbersTW };
    }),
  );

  return {
    props: {
      themeData: result.getTheme || {},
      signupNumbersHK: result.getSignupNumbersHK || '',
      signupNumbersTW: result.getSignupNumbersTW || '',
    },
  };
}
