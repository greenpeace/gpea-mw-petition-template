import React from 'react';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import contentA from './images/GP04NTU_PressMedia.jpg';
import contentB from './images/GP04F4D_High_res.jpg';
import contentC from './images/GP04Z2Q_Web_size-4_r.jpg';

const Content = ({ theme }) => {
  return (
    <>
      <Heading {...headingProps}>
        聯署制止企業政府破壞行為，守護北極生態！
      </Heading>

      <Text as="p" {...paragraphProps}>
        您的聯署將幫助制止各國企業、政府在北極鑽油與工業捕撈惡行，守護北極生態、北極熊的唯一棲所！
      </Text>

      <Text as="p" {...paragraphProps}>
        綠色和平致力制止各國企業、政府破壞北極的行動及政策，透過推動《全球海洋公約》，將北極地區設為優先保護區，嚴格管制、禁止各國進行鑽油、捕魚等活動，同時帶動全球氣候改革以控制升溫於
        1.5℃ 內。守護北極生態、北極熊的唯一棲所。
      </Text>

      <Heading {...headingProps}>您願意聯署加入守護北極行列嗎？</Heading>

      <Box {...paragraphProps}>
        <Image src={contentA} />
      </Box>

      <Heading {...headingProps}>
        北極熊被逼至減絕邊緣，急需您施予援手！
      </Heading>

      <Text as="p" {...paragraphProps}>
        北極原是地球上的淨土，孕育奇妙不凡的野生生態，更具調節全球氣候的功能。可惜，鑽油破壞和工業捕撈等人類行為嚴重威脅，加上氣候危機影響下，海冰在過去數十年已損失三分之二的體積，北極熊的數量亦減少近一半，北極生態岌岌可危。
      </Text>

      <Text as="p" {...paragraphProps}>
        如我們未能及時挽救這場危機，北極生態系統、生物多樣性將受到嚴重破壞，北極熊可能就此滅絕。如若北極陷入困境，人類亦將難逃厄運。
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentB} />
      </Box>

      <Text as="p" {...paragraphProps}>
        綠色和平正號召全球支持者加入北極聯署，亦誠意邀請您參與聯署，壯大守護北極力量。您的力量，是制止企業政府破壞行為，守護北極生態的關鍵。
      </Text>

      <Heading {...headingProps}>
        請即聯署，向正受破壞的脆弱北極伸出援手！
      </Heading>
    </>
  );
};

export default Content;
