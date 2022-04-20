import React from 'react';
import {
  Box,
  Text,
  Stack,
  Center,
  Button,
  Heading,
  Image,
  Flex,
  useMediaQuery,
} from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import { Clouds } from './Clouds';

import mainHeadline from '../../images/202204_EarthDayPush-17.svg';
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

const OptionBox = ({ image, text, action }) => {
  return (
    <Box w={'100%'} flex={1}>
      <Image w={'100%'} src={image} alt={text} />
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

const HeroSection = ({ handleClick, selectedOption, handleSelectOption }) => {
  const [isLargerThanLG] = useMediaQuery('(min-width: 62em)');
  const isSubmitted = useSelector((state) => state.status?.submitted);
  const formData = useSelector((state) => state.form.data);
  const PROMISES = [
    '1星期食3餐素',
    '1星期不用即棄餐具',
    '1星期做好垃圾資源回收分類',
  ];

  return (
    <Box bgColor={'#88D6F8'}>
      <Box pos={'relative'} maxW="1200px" mx="auto">
        <Clouds />

        <Flex
          direction={{ base: 'column-reverse', md: 'row' }}
          alignItems={'center'}
        >
          <Box w="100%" flex={1}>
            {isSubmitted ? (
              <Box mx={'auto'} pos={'relative'} zIndex={2}>
                <Box p="6" pt="60px">
                  <Heading
                    as="h1"
                    {...headingProps}
                    color={'white'}
                    fontSize={{
                      base: 'var(--text-xl)',
                      md: 'var(--text-2xl)',
                    }}
                    textShadow="0 0 1px rgba(0,0,0, .2)"
                    mb={4}
                  >
                    感謝您加入
                    <br />
                    「惜碳承諾」
                  </Heading>
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color="white"
                    textShadow="0 0 1px rgba(0,0,0, .2)"
                    mb="4"
                  >
                    以下是您選擇的承諾：
                  </Text>
                  <Stack
                    spacing="4"
                    fontSize="xl"
                    fontWeight="bold"
                    color="white"
                    mb="4"
                  >
                    {(formData || []).map((d, i) => (
                      <Text key={i}>✅ {PROMISES[d]}</Text>
                    ))}
                  </Stack>
                  <Text
                    fontSize="xl"
                    fontWeight="bold"
                    color="white"
                    textShadow="0 0 1px rgba(0,0,0, .2)"
                    mb="4"
                  >
                    完成挑戰，獲取「惜碳證書」，攜手為地球減碳！
                  </Text>
                </Box>
              </Box>
            ) : (
              <Box pos={'relative'} zIndex={2}>
                {/* Desktop */}
                <Box p="6" d={{ base: 'none', md: 'block' }}>
                  <Stack py={6} spacing="2" alignItems="center" pt={{ md: 16 }}>
                    <Image px={{ base: 2, md: 8 }} src={mainHeadline} />
                    <Box
                      cursor={'pointer'}
                      zIndex={99}
                      position={'relative'}
                      w={{ base: '100%', md: '420px' }}
                      onClick={handleClick}
                    >
                      <Button
                        w="100%"
                        px="6"
                        variant={'roundedCTA'}
                        style={{ pointerEvents: 'none' }}
                      >
                        立即選擇你的承諾
                      </Button>
                    </Box>

                    <Box w={'100%'} mx={'auto'} py="4" px={{ base: 4, md: 10 }}>
                      <Stack
                        spacing="4"
                        justifyContent={'space-around'}
                        direction={{ base: 'row' }}
                      >
                        {OPTIONS.map((d) => (
                          <OptionBox
                            key={d.value}
                            image={d.image}
                            text={d.label}
                            onClick={handleClick}
                            cursor={'pointer'}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </Stack>
                </Box>
                {/* Mobile */}
                <Box p="4" pb="8" d={{ base: 'block', md: 'none' }}>
                  <Stack spacing="4" alignItems={'center'}>
                    <Image src={mainHeadline} />

                    <Button
                      w="100%"
                      px="6"
                      variant={'roundedCTA'}
                      onClick={handleClick}
                    >
                      立即選擇你的承諾
                    </Button>

                    <Box w={'100%'} mx={'auto'} py="4" px="4">
                      <Stack
                        spacing="4"
                        justifyContent={'space-around'}
                        direction={{ base: 'row' }}
                      >
                        {OPTIONS.map((d) => (
                          <OptionBox
                            key={d.value}
                            transition="transform 0.3s ease"
                            _hover={{ transform: 'scale(1.05)' }}
                            onClick={handleClick}
                            image={d.image}
                            text={d.label}
                          />
                        ))}
                      </Stack>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            )}
          </Box>
          {/* KV */}
          <Box w="100%" flex={1} px="6" zIndex="1">
            {(!isSubmitted || isLargerThanLG) && (
              <Box pos={'relative'}>
                <Image
                  position={'relative'}
                  transform={{
                    base: 'translateY(42px)',
                    md: 'translateY(0px)',
                  }}
                  mr={{ base: '-15px' }}
                  pl={{ base: ' 15px' }}
                  src={mainVisualLaptop}
                  alt={'Greenpeace 綠色和平'}
                />
              </Box>
            )}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default HeroSection;
