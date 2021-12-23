import React, { useEffect } from 'react';
import Wrapper from '@containers/wrapper';
import dynamic from 'next/dynamic';
import axios from 'axios';
import TagManager from 'react-gtm-module';
import { useRouter } from 'next/router';
import { connect } from 'react-redux';
import * as themeActions from 'store/actions/action-types/theme-actions';
import * as formActions from 'store/actions/action-types/form-actions';
import * as statusActions from 'store/actions/action-types/status-actions';

/* Determine the returned project index by env variable */
const DynamicComponent = dynamic(() => import(`apps/${process.env.project}`));

function Index({
  setTheme,
  themeData,
  signupNumbersHK,
  signupNumbersTW,
  setSignupNumbers,
  setWebStatus,
}) {
  const router = useRouter();
  useEffect(() => {
    setTheme(themeData);
    setSignupNumbers({ hk: signupNumbersHK, tw: signupNumbersTW });
    const currentPage = router.query?.page;
    if (currentPage === '2') {
      setWebStatus(true);
    }
  }, [router]);

  useEffect(() => {
    const market = themeData?.Market;
    /* GTM is only applicable for production env */
    if (process.env.NODE_ENV === 'production') {
      let gtmId = '';
      switch (market) {
        case 'hk':
          gtmId = 'GTM-M6LZL75';
          break;
        case 'tw':
          gtmId = 'GTM-WRM6WK6';
          break;
        default:
          gtmId = '';
          break;
      }
      const tagManagerArgs = {
        gtmId: gtmId,
      };
      TagManager.initialize(tagManagerArgs);
    }
  }, [themeData]);

  if (DynamicComponent) {
    return <DynamicComponent />;
  }
  return <div>Loading...</div>;
}

Index.getLayout = (page) => <Wrapper>{page}</Wrapper>;

const mapDispatchToProps = (dispatch) => {
  return {
    setTheme: (data) => {
      dispatch({ type: themeActions.SET_THEME, data });
    },
    setSignupNumbers: (data) => {
      dispatch({ type: formActions.SET_SIGNUP_NUMBERS, data });
    },
    setWebStatus: (bol) => {
      dispatch({ type: statusActions.SET_FORM_SUBMITTED, data: bol });
    },
  };
};

export async function getStaticProps(context) {
  const envProjectName = process.env.projectName;
  const envMarket = process.env.MARKET;
  console.log(process.env.MARKET);
  const fetchURLs = [
    process.env.themeEndpoint,
    process.env.signupNumbersHK,
    process.env.signupNumbersTW,
  ];

  const result = await axios.all(fetchURLs.map((d) => axios.get(d))).then(
    axios.spread(async (...res) => {
      const getTheme = await res[0].data.records.find(
        (d) => d.ProjectName === envProjectName && d.Market === envMarket,
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

export default connect(null, mapDispatchToProps)(Index);
