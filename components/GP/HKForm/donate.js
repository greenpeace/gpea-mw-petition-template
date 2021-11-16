import React, { useEffect, useState } from 'react';
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
import ButtonWithMessage from './buttonWithMessage';
import ButtonWithField from './ButtonWithField';
import { buttonStyle } from '@common/styles/components/formStyle';

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
  } = props;
  const [donateType, setDonateType] = useState('monthly');
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
                  onClick={() => {
                    d.value === 'single'
                      ? setItem(amount_onetime[0])
                      : setItem(amount_monthly[0]);
                    handleSetDonateType(d.value);
                  }}
                >
                  {d.label}
                </Button>
              ))}
            </Stack>
          </Box>

          <Divider />

          <Box>
            <Grid templateColumns="repeat(3, 1fr)" gap={2}>
              {(amountOption || []).map((d, i) => {
                const colSpan = amountOption.length === i + 1 ? 3 : 1;
                if (item && item.value === 'other' && d.value === 'other') {
                  return;
                }
                return (
                  <GridItem colSpan={colSpan} key={i}>
                    <Button
                      key={i}
                      flex="1"
                      border="1px"
                      borderColor="gray.100"
                      bg={
                        amount === d.value ? `theme.${themeInterests}` : '#fff'
                      }
                      color={amount === d.value ? '#fff' : 'gray.500'}
                      borderRadius={'md'}
                      _hover={{
                        bg: `theme.${themeInterests}`,
                        color: '#fff',
                      }}
                      onClick={() => {
                        setAmount(d.value);
                        setItem(d);
                      }}
                      w="100%"
                      {...buttonStyle}
                    >
                      {d.label}
                    </Button>
                  </GridItem>
                );
              })}
            </Grid>
          </Box>

          <Box>
            {item && item.value === 'other' ? (
              <ButtonWithField donateType={donateType} />
            ) : (
              <ButtonWithMessage
                amount={amount}
                donateType={donateType}
                description={item ? item.description : default_message}
              />
            )}
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

export default connect(mapStateToProps)(DonateForm);
