import React from 'react';
import { connect } from 'react-redux';
import { Box, Text, Stack, Heading, Center, Button } from '@chakra-ui/react';
import * as formActions from 'store/actions/action-types/form-actions';
import { OrangeCTA, OutlineCTA } from '@common/styles/components/formStyle';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';
import { imageLoader } from '@common/utils';
import Image from 'next/image';

const DonateForm = (props) => {
  const {
    formContent: {
      donate_suggestion_header,
      donate_suggestion_message,
      donate_type,
    },
    theme,
    setShowMessage,
    setDonateType,
  } = props;
  const themeInterests = theme.interests;

  return (
    <Box py="6" px="4">
      <Center>
        <Image
          loader={imageLoader}
          src={`/images/heart-icon.png`}
          layout="intrinsic"
          width={100}
          height={84}
        />
      </Center>
      <Heading
        {...headingProps}
        dangerouslySetInnerHTML={{
          __html: donate_suggestion_header,
        }}
        color={`theme.${themeInterests}`}
        pt={6}
      />
      <Text
        as="p"
        {...paragraphProps}
        dangerouslySetInnerHTML={{
          __html: donate_suggestion_message,
        }}
      />
      <Stack direction={'row'} py={6}>
        <Button
          {...OrangeCTA}
          flex={1}
          onClick={() => {
            setShowMessage(false);
            setDonateType('monthly');
          }}
        >
          {donate_type[0]?.label}
        </Button>

        <Button
          {...OutlineCTA}
          variant="outline"
          flex={1}
          onClick={() => {
            setShowMessage(false);
            setDonateType('single');
          }}
        >
          {donate_type[1]?.label}
        </Button>
      </Stack>
    </Box>
  );
};

const mapStateToProps = ({ form, theme }) => {
  return {
    formContent: form.content,
    theme: theme.data,
    showMessage: form.showMessage,
    donateType: form.donateType,
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
