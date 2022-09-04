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

const DonationModule = (props) => {
  const { market, language, campaign, campaignId, env, signup, preFill } =
    props;

  // Define constant module url
  //FIXME: KR AND UP TO DATE
  const moduleUrl = 'main.js'; 
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
        data-gpea-market={market?.toUpperCase()} //手動填寫← TW 或 HK
        data-gpea-language={language} //手動填寫← zh_TW 或 zh_HK 或 en_HK
        data-gpea-campaign={campaign} //手動填寫，schema原始資料沒有這個設定
        data-gpea-campaign-id={campaignId || ''} //手動填寫，依 Donation campaign 手動填寫
        data-gpea-env={env} //手動填寫← test 或 full 或 production
        data-gpea-formdata={JSON.stringify({
          ...preFill,
          ...signup,
        })} //非必填，繼承自 petition daisy chain
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
