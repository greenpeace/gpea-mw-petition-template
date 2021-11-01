import React from 'react';
import { Heading, Box, Text, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import contentA from './images/GP0466C_High_res.jpg';
import contentB from './images/GP048X9_Web_size.jpg';
import contentC from './images/GP04Z2Q_Web_size-4_r.jpg';

const Thankyou = () => {
  return (
    <>
      <Heading {...headingProps}>
        放任氣候危機惡化，北極熊或將於 2100 年滅絕
      </Heading>

      <Text as="p" {...paragraphProps}>
        全球暖化下，北極海冰已損失三分之二的體積，放任氣候危機惡化，北極熊將失去唯一棲所，難以狩獵、尋找另一半以及養育幼熊。
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentA} />
      </Box>

      <Heading {...headingProps}>北極危機，與您我攸關</Heading>

      <Text as="p" {...paragraphProps}>
        北極與地球氣候息息相關，許多地區已遭受海平面上升，熱浪、颱風、洪水等異常氣候現象影響，這一切災難是全球人類、動植物及生態共同承受，無一倖免。
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentB} />
      </Box>

      <Heading {...headingProps}>群眾力量，創造無限可能</Heading>

      <Text as="p" {...paragraphProps}>
        目前，全球有超過
        800萬人參加守護北極聯署，繼成功令法院裁定蜆殼石油（SHELL）要為氣候危機負責，
        我們急需您擴大守護北極的聲音力量，以推動各國領袖宣布承諾減碳排目標、
        在2030 前將受保護海洋擴大至 30%
        。守護北極路上有您加入，綠色和平將努力創造更多改變！
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentC} />
      </Box>
    </>
  );
};

export default Thankyou;
