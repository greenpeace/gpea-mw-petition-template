import React from 'react';
import { connect } from 'react-redux';
import { Box, Button, Text } from '@chakra-ui/react';
import { OrangeCTA } from '@common/styles/components/formStyle';

const ButtonWithMessage = (props) => {
  const {
    formContent: { donateURL, donate_button },
    amount,
    donateType,
    description,
  } = props;

  const targetDonateURL = donateURL;

  const handleOpenLink = () => {
    const { formContent, donateType } = props;
    //
    window.dataLayer = window.dataLayer || [];

    window.dataLayer.push({
      event: 'gaEvent',
      eventCategory: 'donations',
      eventAction: 'form_steps',
      eventLabel: 'form_step:1_amount',
      eventValue: eventValue,
    });
    //
    window.open(`${targetDonateURL}&donate_amt=${donateType}:${amount}`);
  };

  return (
    <Box>
      <Box py={6}>
        <Text fontSize={'md'}>{description}</Text>
      </Box>
      <Box>
        <Button {...OrangeCTA} onClick={() => handleOpenLink()}>
          {donate_button}
        </Button>
      </Box>
    </Box>
  );
};

const mapStateToProps = ({ form }) => {
  return {
    formContent: form.content,
  };
};

export default connect(mapStateToProps)(ButtonWithMessage);
