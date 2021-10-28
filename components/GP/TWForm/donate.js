import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  Box,
  Button,
  Flex,
  Text,
  Stack,
  Grid,
  GridItem,
  Divider,
} from '@chakra-ui/react';

const buttonStyle = {
  h: '48px',
  fontWeight: '400',
};

const DonateForm = (props) => {
  const {
    formContent: {
      amount_monthly,
      amount_onetime,
      donateURL,
      donate_header,
      donate_description,
      donate_type,
      thanks_message,
      donate_button,
    },
    theme,
  } = props;
  const [donateType, setDonateType] = useState('monthly');
  const [amount, setAmount] = useState(100);
  const [url, setURL] = useState({ type: donateType, amount: amount });
  const amountOption =
    donateType === 'monthly' ? amount_monthly : amount_onetime;
  const handleSetDonateType = (value) => {
    setDonateType(value);
    setAmount(
      value === 'monthly' ? amount_monthly[0].value : amount_onetime[0].value,
    );
    setURL({ ...url, type: value });
  };

  const targetDonateURL = donateURL;

  const handleOpenLink = () => {
    window.open(`${targetDonateURL}&donate_amt=${donateType}:${amount}`);
  };

  return (
    <Box>
      {donate_header && (
        <Box pb={2}>
          <Text fontSize={{ base: 'md', xl: 'lg' }} fontWeight={700}>
            <span dangerouslySetInnerHTML={{ __html: donate_header }} />
          </Text>
        </Box>
      )}
      {(donate_description || []).map((d) => (
        <Box pb={6}>
          <Text fontSize={{ base: 'sm', xl: 'md' }}>
            <span dangerouslySetInnerHTML={{ __html: d }} />
          </Text>
        </Box>
      ))}
      <Box py={2}>
        <Stack
          direction="row"
          spacing={0}
          border="1px"
          borderColor="gray.100"
          borderRadius={'md'}
          overflow={'hidden'}
        >
          {(donate_type || []).map((d, i) => (
            <Button
              key={d.value}
              flex="1"
              h="40px"
              fontWeight="400"
              borderRadius={0}
              bg={donateType === d.value ? 'brand.500' : '#fff'}
              color={donateType === d.value ? '#fff' : 'gray.500'}
              onClick={() => handleSetDonateType(d.value)}
            >
              {d.label}
            </Button>
          ))}
        </Stack>
      </Box>

      <Divider mt={2} />

      <Box py={4} overflow="hidden">
        <Flex direction="column">
          <Grid templateColumns="repeat(3, 1fr)" gap={2}>
            {(amountOption || []).map((d, i) => {
              const colSpan = amountOption.length === i + 1 ? 3 : 1;

              return (
                <GridItem colSpan={colSpan} key={i}>
                  <Button
                    key={d.value}
                    flex="1"
                    border="1px"
                    borderColor="gray.100"
                    bg={amount === d.value ? 'brand.500' : '#fff'}
                    color={amount === d.value ? '#fff' : 'gray.500'}
                    borderRadius={'md'}
                    _hover={{ bg: 'brand.500', color: '#fff' }}
                    onClick={() => setAmount(d.value)}
                    w="100%"
                    {...buttonStyle}
                  >
                    {d.label}
                  </Button>
                </GridItem>
              );
            })}
          </Grid>
          <Box align="center" py={6}>
            <Text
              fontSize={'md'}
              color={props.mode === 'dark' ? '#fff' : '#000'}
            >
              {thanks_message}
            </Text>
          </Box>
          <Box onClick={() => handleOpenLink()}>
            <Button
              width="100%"
              height="48px"
              borderRadius="md"
              fontSize="xl"
              px={2}
              py={6}
              color="white"
              bg="orange.500"
              _hover={{ bg: 'orange.300' }}
            >
              {donate_button}
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

const mapStateToProps = ({ form, theme }) => {
  return {
    formContent: form.content,
    theme: theme.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(DonateForm);
