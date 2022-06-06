import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import StepProgress from '@components/Progress/StepProgress';
// import MessageSection from './messageSection';
// import SubmitSection from './submitSection';


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
        <script src={process.env.donateModule}></script>
      </Helmet>
      <div
        data-gpea-module="gpea-donation-module"
        data-gpea-market={theme.Market.toUpperCase()}//← TW 或 HK
        data-gpea-language={"zh_TW"} //schema原始資料沒有這個設定需依專案手動填寫 zh_TW 或 zh_HK 或 en_HK
        data-gpea-campaign={"general"} //schema原始資料沒有這個設定需依專案手動填寫
        data-gpea-campaign-id={theme.CampaignId} //← 非必填（未填寫時會依照 env 與 market 來決定一個預設值）
        data-gpea-env={"test"}
        data-gpea-formdata={JSON.stringify(signup)}
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
