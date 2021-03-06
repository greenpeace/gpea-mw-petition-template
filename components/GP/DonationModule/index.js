import React from 'react';
import { connect } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';

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
  const { market, language, campaign, campaignId, env, moduleUrl, signup } =
    props;

  return (
    <Box minH="400px">
      <Helmet>
        <script src={moduleUrl}></script>
      </Helmet>
      <div
        data-gpea-module="gpea-donation-module"
        data-gpea-market={market.toUpperCase()} //手動填寫← TW 或 HK
        data-gpea-language={language} //手動填寫← zh_TW 或 zh_HK 或 en_HK
        data-gpea-campaign={campaign} //手動填寫，schema原始資料沒有這個設定
        data-gpea-campaign-id={campaignId || ''} //手動填寫，依 Donation campaign 手動填寫
        data-gpea-env={env} //手動填寫← test 或 full 或 production
        data-gpea-formdata={JSON.stringify(signup)} //非必填，繼承自 petition daisy chain
      ></div>
    </Box>
  );
};

const mapStateToProps = ({ signup }) => {
  return {
    signup: signup.data,
  };
};

export default connect(mapStateToProps)(DonationModule);
