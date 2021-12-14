import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {
  Box,
  Text,
  Stack,
  Grid,
  GridItem,
  Divider,
  Heading,
} from '@chakra-ui/react';
import * as formActions from 'store/actions/action-types/form-actions';
import StepProgress from '@components/Progress/StepProgress';
import MessageSection from './messageSection';
import SubmitSection from './submitSection';

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
      {showMessage && <MessageSection />}

      {!showMessage && (
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
                    as="p"
                    fontSize={{ base: 'sm', xl: 'md' }}
                    dangerouslySetInnerHTML={{ __html: d }}
                  />
                </Box>
              ))}

              <Box>
                <Stack direction="row" spacing={2} overflow={'hidden'}>
                  {(donate_type || []).map((d, i) => (
                    <Box
                      key={i}
                      bordertype={`solid`}
                      borderWidth={`2px`}
                      borderColor={
                        donateType === d.value
                          ? `theme.${themeInterests}`
                          : 'gray.200'
                      }
                      flex={1}
                      fontWeight="400"
                      textAlign="center"
                      height="auto"
                      pos="relative"
                      padding="12px 4px"
                      overflow="hidden"
                      borderRadius="md"
                      _before={beforeProps}
                      _after={{
                        ...afterProps,
                        backgroundColor:
                          donateType === d.value
                            ? `theme.${themeInterests}`
                            : '#fff',
                      }}
                      onClick={() => {
                        d.value === 'single'
                          ? setItem(amount_onetime[0])
                          : setItem(amount_monthly[0]);
                        handleSetDonateType(d.value);
                      }}
                      cursor={`pointer`}
                    >
                      {d.label}
                    </Box>
                  ))}
                </Stack>
              </Box>

              <Divider />

              <Box>
                <Grid templateColumns="repeat(3, 1fr)" gap={2}>
                  {(amountOption || []).map((d, i) => {
                    const colSpan = amountOption.length === i + 1 ? 3 : 1;
                    const isOther = d.value === 'other';
                    if (item && item.value === 'other' && isOther) {
                      return;
                    }
                    return (
                      <GridItem colSpan={colSpan} key={i}>
                        <Box
                          textAlign={`center`}
                          border={`2px`}
                          borderColor={
                            amount === d.value
                              ? `theme.${themeInterests}`
                              : isOther
                              ? '#FFF'
                              : 'gray.200'
                          }
                          borderRadius={'md'}
                          fontWeight="400"
                          position={'relative'}
                          overflow={'hidden'}
                          minH={'48px'}
                          _before={{
                            ...beforeProps,
                            top: '-4px',
                          }}
                          _after={{
                            ...afterProps,
                            backgroundColor:
                              amount === d.value
                                ? `theme.${themeInterests}`
                                : '#fff',
                          }}
                          onClick={() => {
                            const updateItem = {
                              ...d,
                              description: d.description
                                ? d.description
                                : item.description,
                            };
                            setAmount(d.value);
                            setItem(updateItem);
                          }}
                          py={2}
                          cursor={'pointer'}
                        >
                          <Text
                            as={'span'}
                            fontWeight={isOther ? 400 : 'bold'}
                            fontSize={isOther ? 'sm' : '2xl'}
                          >
                            {d.label}
                          </Text>
                          <br />
                          <Text as={'span'} fontSize="sm" fontWeight={400}>
                            {d.currency}
                          </Text>
                        </Box>
                      </GridItem>
                    );
                  })}
                </Grid>
                {item && (
                  <Box>
                    <SubmitSection
                      submitType={item.value}
                      amount={amount}
                      donateType={donateType}
                      description={item ? item.description : default_message}
                    />
                  </Box>
                )}
              </Box>
            </Stack>
          </Box>
        </Box>
      )}
    </Box>
  );
};

const beforeProps = {
  zIndex: 1,
  content: '"✓"',
  position: 'absolute',
  left: '4px',
  top: '-4px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  color: 'white',
};

const afterProps = {
  content: '""',
  position: 'absolute',
  left: '-1.5rem',
  top: '-1.5rem',
  width: '3rem',
  height: '3rem',
  transform: 'rotate(-45deg)',
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
