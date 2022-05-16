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
const envProjectName = process.env.projectName;
const envProjectMarket = process.env.projectMarket;
const themeEndpointURL = process.env.themeEndpoint;
const signupNumbersHKURL = process.env.signupNumbersHK;
const signupNumbersTWURL = process.env.signupNumbersTW;

function Index({ setTheme, themeData, setSignupNumbers, setWebStatus }) {
  const router = useRouter();

  /** page=2 force to result page */
  useEffect(() => {
    const currentPage = router.query?.page;
    if (currentPage === '2') {
      setWebStatus(true);
    }
  }, [router]);

  /** Fetch signup data on load */
  useEffect(async () => {
    const fetchURLs = {
      hk: signupNumbersHKURL,
      tw: signupNumbersTWURL,
    };

    const signupData = await axios
      .get(fetchURLs[themeData?.Market])
      .then((response) => {
        return response.data.find((d) => d.Id === themeData?.CampaignId);
      })
      .catch((error) => console.log(error));

    setSignupNumbers({ [themeData?.Market]: signupData });
  }, []);

  useEffect(() => {
    const domain = document.location.host;
    const market =
      themeData?.Market || domain.indexOf('hk') > 0
        ? 'hk'
        : domain.indexOf('tw') > 0
        ? 'tw'
        : '';
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
          break;
      }
      const tagManagerArgs = {
        gtmId: gtmId,
      };
      TagManager.initialize(tagManagerArgs);
    }
    setTheme(themeData);
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

export async function getStaticProps() {
  const singleResult = await axios
    .get(themeEndpointURL)
    .then((response) => {
      return response.data.records.find(
        (d) =>
          d.ProjectName === envProjectName && d.Market === envProjectMarket,
      );
    })
    .catch((error) => console.log(error));

  console.log('Building from ' + envProjectMarket + ':' + envProjectName);

  !singleResult && console.warn('PROJECT NAME NOT FOUND');

  return {
    props: {
      themeData: singleResult || {},
    },
  };
}

export default connect(null, mapDispatchToProps)(Index);
