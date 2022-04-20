import React from 'react';
import { connect } from 'react-redux';
import { Box, Text, Stack, Image, Center, Flex } from '@chakra-ui/react';
import * as formActions from 'store/actions/action-types/form-actions';

import CLICK from '../../images/click.svg';

const Option = ({ setForm, formData, text, value, image }) => {
  const selected = formData.indexOf(value) !== -1;
  return (
    <Flex
      transition={'all 0.3s ease'}
      borderRadius={'8px'}
      outline={selected ? '3px solid #88D6F8' : '1px solid #E2E8F0'}
      position={'relative'}
      py={6}
      minHeight={'180px'}
      alignItems="center"
      justifyContent="center"
      onClick={() =>
        selected
          ? setForm(formData.filter((e) => e !== value))
          : setForm([...formData, value])
      }
      cursor={'pointer'}
    >
      <Box pos={'absolute'} top={'16px'} left={'20px'}>
        <Box
          border={selected ? '3px solid #88D6F8' : '2px solid #CBD5E0'}
          w={'30px'}
          h={'30px'}
          borderRadius={'50%'}
        >
          <Center h={'100%'}>{selected && <img src={CLICK} />}</Center>
        </Box>
      </Box>
      <Stack direction={{ base: 'column' }} spacing={4}>
        <Box textAlign={'center'} mx={'auto'}>
          <Image src={image} w="80px" />
        </Box>
        <Box>
          <Text
            color={selected ? 'gray.800' : 'gray.700'}
            fontSize="lg"
            fontWeight={700}
            textAlign={'center'}
            mx={'auto'}
          >
            {text}
          </Text>
        </Box>
      </Stack>
    </Flex>
  );
};

const mapStateToProps = ({ form }) => {
  return {
    formData: form.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setForm: (data) => {
      dispatch({ type: formActions.SET_FORM_DATA, data });
    },
  };
};

function propsAreEqual(prevFormData, nextFormData) {
  return prevFormData === nextFormData;
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(React.memo(Option, propsAreEqual));
