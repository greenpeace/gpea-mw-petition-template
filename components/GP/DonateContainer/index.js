import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import StepProgress from '@components/Progress/StepProgress';

const DonateForm = (props) => {
  const {
    formContent: {
      default_message,
      default_amount,
      amount_monthly,
      amount_onetime,
      donate_header,
      donate_description,
      donate_type,
    },
    theme,
    showMessage,
    setShowMessage,
    donateType,
    setDonateType,
    signup,
    market,
    language,
    campaign,
    campaignId,
    env,
  } = props;
  const [item, setItem] = useState();
  const [amount, setAmount] = useState(default_amount);
  const [url, setURL] = useState({ type: donateType, amount: amount });
  const themeInterests = theme.interests;
  const amountOption =
    donateType === 'monthly' ? amount_monthly : amount_onetime;
  const handleSetDonateType = (value) => {
    setDonateType(value);
    setAmount(
      value === 'monthly' ? amount_monthly[0].value : amount_onetime[0].value,
    );
    setURL({ ...url, type: value });
    setShowMessage(value === 'single');
  };

  useEffect(() => {
    if (!amount_monthly) {
      return;
    }
    setItem(amount_monthly[0]);
    setAmount(default_amount);
  }, [amount_monthly]);

  return (
    <Box>
      <Helmet>
        {/* <script src={process.env.donateModule}></script> */}
        <script src="https://api.greenpeace.org.hk/2022/donate-module/main.js"></script>
      </Helmet>
      <div
        data-gpea-module="gpea-donation-module" //不變
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

const mapStateToProps = ({ form, theme, signup }) => {
  return {
    formContent: form.content,
    theme: theme.data,
    showMessage: form.showMessage,
    donateType: form.donateType,
    signup: signup.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setShowMessage: (data) => {
      dispatch({ type: formActions.SET_SHOW_MESSAGE, data });
    },
    setDonateType: (data) => {
      dispatch({ type: formActions.SET_DONATE_TYPE, data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DonateForm);
