import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';


const DonateForm = (props) => {
  const {
    market,
    language,
    campaign,
    campaignId,
    env,
    moduleUrl,
    signup,
  } = props;


  return (
    <Box>
      <Helmet>
        <script src={moduleUrl}></script>
      </Helmet>
      <div
        data-gpea-module="gpea-donation-module"
        data-gpea-market={market.toUpperCase()} //← TW 或 HK
        data-gpea-language={language} //手動填寫← zh_TW 或 zh_HK 或 en_HK
        data-gpea-campaign={campaign} //手動填寫，schema原始資料沒有這個設定
        data-gpea-campaign-id={campaignId || ''} //手動填寫，依 Donation campaign 手動填寫
        data-gpea-env={env} //手動填寫← test 或 full 或 prod
        data-gpea-formdata={JSON.stringify(signup)} //非必填，繼承自 petition daisy chain
      ></div>
    </Box>
  );
};

const mapStateToProps = ({ signup }) => {
  return {
    // formContent: form.content,
    // theme: theme.data,
    // showMessage: form.showMessage,
    // donateType: form.donateType,
    signup: signup.data,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setShowMessage: (data) => {
//       dispatch({ type: formActions.SET_SHOW_MESSAGE, data });
//     },
//     setDonateType: (data) => {
//       dispatch({ type: formActions.SET_DONATE_TYPE, data });
//     },
//   };
// };

export default connect(mapStateToProps)(DonateForm);
