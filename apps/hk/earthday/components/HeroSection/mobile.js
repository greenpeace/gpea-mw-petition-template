import React from 'react';
import { Box, Text, Stack, Center, Button, Image } from '@chakra-ui/react';
import { connect } from 'react-redux';
import * as formActions from 'store/actions/action-types/form-actions';

import { Clouds } from './Clouds';

import mainVisualMobile from '../../images/202204_EarthDayPush_R3_KV_mobile.png';
import R310 from '../../images/202204_EarthDayPush_R3-10.svg';
import R311 from '../../images/202204_EarthDayPush_R3-11.svg';
import R312 from '../../images/202204_EarthDayPush_R3-12.svg';

const OPTIONS = [
  { label: '食素', content: '1星期食3餐素', value: 0, image: R310 },
  { label: '回收', content: '1星期不用即棄餐具', value: 1, image: R311 },
  {
    label: '走塑',
    content: '1星期做好垃圾資源回收分類',
    value: 2,
    image: R312,
  },
];

const HeroSection = ({ handleClick, setForm, formData }) => {
  const OptionsBox = ({ image, text }) => {
    return (
      <Box flex={1} cursor={'pointer'} onClick={() => handleClick()}>
        <Image src={image} w={'full'} />
        <Center mt={'-10px'}>
          <Box bgColor={'#FFF'} borderRadius={'8px'} py={1} px={2}>
            <Text color={'#88D6F8'} fontWeight={900}>
              {text}
            </Text>
          </Box>
        </Center>
      </Box>
    );
  };
  return (
    <Box bgColor={'#88D6F8'} p="4" pt="60px" pb="8">
      <Box pos={'relative'}>
        <Clouds />

        <Box pos={'relative'}>
          <Image
            mr={{ base: '-15px' }}
            pl={{ base: ' 15px' }}
            pos={'relative'}
            src={mainVisualMobile}
            alt={'Greenpeace 綠色和平'}
          />
        </Box>

        <Box mx={'auto'} pos={'relative'} zIndex={2}>
          <Stack spacing="4">
            <Center mt={{ base: '-50px' }}>
              <Text
                fontSize={{ base: '72px' }}
                fontWeight={900}
                color={'white'}
                style={{ textShadow: '0 0 8px rgba(0,0,0,0.45)' }}
                lineHeight="1.2"
              >
                惜碳承諾
              </Text>
            </Center>

            <Box textAlign={'center'}>
              <Text
                fontWeight={500}
                fontSize="xl"
                color={'white'}
                style={{ textShadow: '0 0 8px rgba(0,0,0,0.45)' }}
              >
                減碳無難度，今天踏出第一步
              </Text>
            </Box>

            <Box mx={'auto'} textAlign={'center'}>
              <Button variant={'roundedCTA'} w="90%" onClick={handleClick}>
                立即選擇你的承諾
              </Button>
            </Box>

            <Box mx={'auto'} py="4" px="4">
              <Stack
                spacing="4"
                justifyContent={'space-around'}
                direction={{ base: 'row' }}
              >
                {OPTIONS.map((d) => (
                  <Box
                    key={d.value}
                    transition="transform 0.3s ease"
                    _hover={{ transform: 'scale(1.05)' }}
                    onClick={() => {
                      const selected = [...formData, d.value];
                      setForm([...new Set(selected)]);
                    }}
                  >
                    <OptionsBox image={d.image} text={d.label} />
                  </Box>
                ))}
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeroSection);
