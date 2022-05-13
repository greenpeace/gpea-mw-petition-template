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
        <script src="https://change.greenpeace.org.tw/2022/test-donation-module/main.js"></script>
      </Helmet>
      <div
        data-gpea-module="gpea-donation-module"
        data-gpea-market={theme.Market}
        data-gpea-campaign={'general'}
        data-gpea-language={'zh_TW'}
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
