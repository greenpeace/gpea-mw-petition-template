import React from 'react';
import {
  Box,
  Text,
  Stack,
  Center,
  Button,
  Image,
  Flex,
} from '@chakra-ui/react';

import { Clouds } from './Clouds';

import mainVisualLaptop from '../../images/202204_EarthDayPush_R3_KV_laptop.png';
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

const HeroSectionDesktop = ({
  handleClick,
  selectedOption,
  handleSelectOption,
}) => {
  const OptionsBox = ({ image, text, action }) => {
    return (
      <Box flex={1}>
        <Image src={image} w={'full'} />
        <Center mt={'-10px'}>
          <Box bgColor={'white'} borderRadius={'8px'} py={1} px={2}>
            <Text color={'#88D6F8'} fontWeight={900}>
              {text}
            </Text>
          </Box>
        </Center>
      </Box>
    );
  };
  return (
    <Box bgColor={'#88D6F8'} p="6">
      <Box pos={'relative'}>
        <Clouds />

        <Flex direction={'row'} align={'center'}>
          <Box flex={1}>
            <Box maxW={{ lg: '480px' }} mx={'auto'} pos={'relative'} zIndex={2}>
              <Stack spacing="4">
                <Center>
                  <Text
                    fontSize={{ md: '64px', lg: '100px' }}
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
                    fontSize={{ md: 'md', lg: '28px' }}
                    color={'white'}
                    style={{ textShadow: '0 0 8px rgba(0,0,0,0.45)' }}
                  >
                    減碳無難度，地球日踏出第一步
                  </Text>
                </Box>

                <Box mx={'auto'} textAlign={'center'} my={2}>
                  <Button
                    variant={'roundedCTA'}
                    maxW={{ base: '250px', lg: '400px' }}
                    style={{ pointerEvents: 'none' }}
                  >
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
                      <Box key={d.value}>
                        <OptionsBox image={d.image} text={d.label} />
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Box>
          <Box flex={1} px="6" zIndex="1">
            <Image src={mainVisualLaptop} alt={'Greenpeace 綠色和平'} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default HeroSectionDesktop;
