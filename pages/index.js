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
import * as signupActions from 'store/actions/action-types/signup-actions';

import {
  hkDevTagManagerArgs,
  twDevTagManagerArgs,
  hkTagManagerArgs,
  twTagManagerArgs,
} from '@common/constants/tagManagerArgs';

/* Determine the returned project index by env variable */
const DynamicComponent = dynamic(() => import(`apps/${process.env.project}`));
const envProjectName = process.env.projectName;
const envProjectMarket = process.env.projectMarket;
const themeEndpointURL = process.env.themeEndpoint;
const signupNumbersHKURL = process.env.signupNumbersHK;
const signupNumbersTWURL = process.env.signupNumbersTW;

const initTagManager = (marketName) => {
  if (process.env.NODE_ENV === 'production') {
    switch (marketName) {
      case 'HK':
        TagManager.initialize(hkTagManagerArgs);
        break;
      case 'TW':
        TagManager.initialize(twTagManagerArgs);
      default:
        break;
    }
  } else {
    switch (marketName) {
      case 'HK':
        TagManager.initialize(hkDevTagManagerArgs);
        break;
      case 'TW':
        TagManager.initialize(twDevTagManagerArgs);
        break;
      default:
        break;
    }
  }
};

function Index({
  setTheme,
  themeData,
  setSignupNumbers,
  setWebStatus,
  setSignFormData,
}) {
  const router = useRouter();

  /** page=2 force to result page */
  useEffect(() => {
    const currentPage = router.query?.page;
    if (currentPage === '2') {
      setWebStatus(true);
    }
  }, [router]);

  /** Fetch signup data on load */
  useEffect(() => {
    async function fetchSignupData() {
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
    }
    fetchSignupData();
  }, []);

  useEffect(() => {
    const domain = document.location.host;
    const market =
      themeData?.Market?.toUpperCase() ||
      (domain.indexOf('hk') > 0 ? 'HK' : domain.indexOf('tw') > 0 ? 'TW' : ''); // Return 'HK' 'TW' ''
    /* GTM is only applicable for production env */
    initTagManager(market);
    setTheme(themeData);

    /* Pre-fill signup data */
    let FormObj = {};
    const selectForm = document.forms['mc-form'];
    const documentFormsArray = Array.from(selectForm);
    if (documentFormsArray) {
      documentFormsArray.map((data) => {
        // missing default value in field
        if (!data.defaultValue) {
          return;
        }
        // format MobilePhone and CountryCode field
        if (data.name === 'MobilePhone') {
          FormObj['MobileCountryCode'] = data.defaultValue
            ?.split(' ')[0]
            .replace('+', '');
          FormObj['MobilePhone'] = data.defaultValue?.split(' ')[1];
          return;
        }
        // format Birthdate field
        if (data.name === 'Birthdate') {
          FormObj['Birthdate'] = `${data.defaultValue
            ?.split('/')[2]
            .substring(0, 4)}-01-01`;
          return;
        }
        // other normal field
        FormObj[`${data.name}`] = data.defaultValue ?? '';
      });

      setSignFormData(FormObj);
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
    setSignFormData: (data) => {
      dispatch({ type: signupActions.SET_SIGN_UP_FORM_DATA, data });
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
