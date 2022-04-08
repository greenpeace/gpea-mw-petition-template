import { Box, Text, Heading, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import banner from '../../images/A7307470.jpg';

const Thankyou = () => {
  return (
    <Box>
      <Heading as="h1" {...headingProps} color={'theme.climate'}>
        低碳惜地球，身體力行守護您我家園！
      </Heading>
      <Text as="p" {...paragraphProps}>
        您的參與意義重大，我們將一起減緩氣候危機，建立綠色、永續未來的理想。
      </Text>
      <Text as="p" {...paragraphProps}>
        身處減緩氣候危機的關鍵十年，我們必須分秒必爭加速推動各地領袖與企業，加入或加速氣候改革，全面淘汰化石燃料，控制全球升溫於1.5°C以內。
      </Text>
      <Heading as="h1" {...headingProps} color={'theme.climate'}>
        教育您我下一代，捐助支持綠色和平守護環境。
      </Heading>
      <Text as="p" {...paragraphProps}>
        綠色和平亦著重培養小孩對愛護氣候和環境的意識！自去年推出「童愛環境 ·
        地球日贈書」計劃，已有近15,000名小孩受惠，透過綠色和平原創繪本《無家可歸的我》，認識氣候危機與各種環境問題。
      </Text>
      <Text as="p" {...paragraphProps}>
        您的捐款將直接資助我們守護環境的工作，以及協助送出《無家可歸的我》繪本至香港小學，讓更多小孩認識氣候變化，從小培育關心環境的觀念。
      </Text>
      <Box {...paragraphProps}>
        <Image src={banner} />
      </Box>
      <Heading as="h1" {...headingProps} color={'theme.climate'}>
        減緩氣候危機刻不容緩，急需您的支持！
      </Heading>
      <Text as="p" {...paragraphProps}>
        綠色和平一直積極採取應對氣候危機的行動，推動各地實現能源轉型，設法讓全球暖化升幅控制在攝氏1.5度內，減緩氣候危機。
      </Text>
      <Text as="p" {...paragraphProps}>
        您的捐款將直接資助我們以行動、科學研究、政策倡議等方式減緩氣候危機，直接幫助達成建立綠色、永續未來的理想。
      </Text>
      <Text as="p" {...paragraphProps}>
        向地球伸出援手，捐助綠色和平減緩氣候危機工作。
      </Text>
    </Box>
  );
};

export default Thankyou;
