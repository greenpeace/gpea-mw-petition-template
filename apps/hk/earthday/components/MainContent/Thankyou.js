import { Box, Text, Heading, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import banner1 from '../../images/GP1SV0BR_High_res.jpg';
import banner2 from '../../images/GP1SW55R_High_res.jpg';

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
        身處減緩氣候危機的關鍵十年，我們必須分秒必爭推動各地領袖、企業展示更強行動力，承諾與兌現其氣候承諾，以加速全面淘汰化石燃料，控制全球升溫於1.5°C以內。
      </Text>
      <Box {...paragraphProps}>
        <Image src={banner1} />
      </Box>
      <Heading as="h1" {...headingProps} color={'theme.climate'}>
        支持綠色和平，就是對地球最好的投資
      </Heading>
      <Text as="p" {...paragraphProps}>
        走遍世界，看見科技不斷進步，我們的環境卻沒有變得更好。為甚麼？或許是過去我們向環境借走了太多。現在，是時候加倍奉還！氣候危機已近在咫尺，邀請你定期捐款支持綠色和平的環境工作，一起投資地球，締造更好未來。
      </Text>
      <Text as="p" {...paragraphProps}>
        綠色和平一直積極採取應對氣候危機的行動，推動各地實現能源轉型，設法讓全球暖化升幅控制在攝氏1.5度內，減緩氣候危機。向地球伸出援手，捐助綠色和平減緩氣候危機工作。
      </Text>
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
      <Box {...paragraphProps}>
        <Image src={banner2} />
      </Box>
      <Heading as="h1" {...headingProps} color={'theme.climate'}>
        今天行動，讓綠色和平守護您我下一代的美好環境
      </Heading>
      <Text as="p" {...paragraphProps}>
        一個美好的自然環境是留給下一代最好的禮物。過去50年，綠色和平堅持不接受政商界捐助，以公正獨立的身份減緩氣候危機。因為您，綠色和平守護環境的使命得以延續，實現綠色低碳未來，守護地球！
      </Text>
    </Box>
  );
};

export default Thankyou;
