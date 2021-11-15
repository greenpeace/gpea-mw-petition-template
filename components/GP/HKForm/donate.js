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
  Heading,
} from '@chakra-ui/react';
import StepProgress from '@components/Progress/StepProgress';
import { OrangeCTA, buttonStyle } from '@common/styles/components/formStyle';

const DonateForm = (props) => {
  const {
    formContent: {
      default_amount,
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
  };

  const targetDonateURL = donateURL;

  const handleOpenLink = () => {
    window.open(`${targetDonateURL}&donate_amt=${donateType}:${amount}`);
  };

  return (
    <Box>
      <StepProgress />
      <Box py="6" px="4">
        <Stack spacing="4">
          {donate_header && (
            <Box>
              <Heading
                fontSize={{ base: '2xl', xl: '3xl' }}
                fontWeight={700}
                dangerouslySetInnerHTML={{ __html: donate_header }}
              />
            </Box>
          )}
          {(donate_description || []).map((d, i) => (
            <Box key={i}>
              <Text
                fontSize={{ base: 'sm', xl: 'md' }}
                dangerouslySetInnerHTML={{ __html: d }}
              />
            </Box>
          ))}
          <Box>
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
                  key={i}
                  flex="1"
                  h="40px"
                  fontWeight="400"
                  borderRadius={0}
                  bg={
                    donateType === d.value ? `theme.${themeInterests}` : '#fff'
                  }
                  color={donateType === d.value ? '#fff' : 'gray.500'}
                  _hover={{ bg: `theme.${themeInterests}`, color: '#fff' }}
                  onClick={() => handleSetDonateType(d.value)}
                >
                  {d.label}
                </Button>
              ))}
            </Stack>
          </Box>

          <Divider />

          <Box>
            <Flex direction="column">
              <Grid templateColumns="repeat(3, 1fr)" gap={2}>
                {(amountOption || []).map((d, i) => {
                  const colSpan = amountOption.length === i + 1 ? 3 : 1;
                  return (
                    <GridItem colSpan={colSpan} key={i}>
                      <Button
                        key={i}
                        flex="1"
                        border="1px"
                        borderColor="gray.100"
                        bg={
                          amount === d.value
                            ? `theme.${themeInterests}`
                            : '#fff'
                        }
                        color={amount === d.value ? '#fff' : 'gray.500'}
                        borderRadius={'md'}
                        _hover={{
                          bg: `theme.${themeInterests}`,
                          color: '#fff',
                        }}
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
              <Box py={6}>
                <Text fontSize={'md'}>{thanks_message}</Text>
              </Box>
              <Box>
                <Button {...OrangeCTA} onClick={() => handleOpenLink()}>
                  {donate_button}
                </Button>
              </Box>
            </Flex>
          </Box>
        </Stack>
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
