import React from 'react';
import { connect } from 'react-redux';
import { Box, Fade, Flex, Spinner } from '@chakra-ui/react';

import useScript from './useScript';

/*

### Attributes for `<div gpea-donation-module>` tag

* `data-gpea-market`
  * Required
  * Available values: `TW`, `HK`
* `data-gpea-campaign`
  * Required
* `data-gpea-language`
  * Required
  * Available values: `zh_TW`, `zh_HK`, `en_HK`
* `data-gpea-env`
  * Required
  * Available values: `test`, `full`, `production`
* `data-gpea-campaign-id`
  * Optional
* `data-gpea-formdata`
  * Optional
  * The value is a JSON object including the data you want to pre-filled into the form

### Properties for `data-gpea-formdata` attribute

* `FirstName`
  * Optional
* `LastName`
  * Optional
* `Email`
  * Optional
* `MobilePhone`
  * Optional
  * Including the leading zero (0)
* `MobileCountryCode`
  * Optional
  * Not including the leading plus sign (+)
* `Birthdate`
  * Optional
  * Format: YYYY-MM-DD

*/

const path = require('path');

const DonationModule = (props) => {
  const { market, language, campaign, campaignId, env, signup, preFill, gclid } =
    props;

  //FIXME: Define constant module url
  let moduleUrl = '';
  if (process.env.envParam === 'production' || process.env.envParam === 'full') {
    moduleUrl = `${process.env.ASSETPREFIX}/` + path.join(process.env.CAMPAIGN, '/main.js');//`https://gpseoulwebserver.co.kr/dchain/nuke/production/main.js`;
  } else {
    moduleUrl = `${window.location.href}/main.js`;
  }

  // Import module
  const status = useScript(moduleUrl);

  return (
    <Box pos="relative" minH="400px">
      {/* Script loading */}
      <Fade in={status != 'ready'}>
        <Flex
          zIndex="99"
          pos="absolute"
          top="0"
          right="0"
          width="100%"
          height="100%"
          direction="column"
          align="center"
          justifyContent="center"
          bg="white"
        >
          <Spinner size="xl" color="#66cc00" />
        </Flex>
      </Fade>
      {/* React DOM render here */}
      <div
        data-gpea-module="gpea-donation-module"
        data-gpea-market={market?.toUpperCase()} //KR
        data-gpea-language={language} //KR
        data-gpea-campaign={campaign} //KR
        data-gpea-campaign-id={campaignId || ''} //Donation campaign
        data-gpea-env={env} //full or production
        data-gpea-gclid={gclid} //full or production
        data-gpea-formdata={JSON.stringify({
          ...preFill,
          ...signup,
        })} //petition daisy chain
      ></div>
    </Box>
  );
};

const mapStateToProps = ({ signup }) => {
  return {
    signup: signup?.data,
    preFill: signup?.preFill,
  };
};

export default connect(mapStateToProps)(DonationModule);
