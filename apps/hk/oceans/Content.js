import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import contentB from './images/GP1SV342_PressMedia.jpg';
import contentC from './images/GP02K27_PressMedia.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        聯署守護海洋
      </Heading>

      <Text as="p" {...paragraphProps}>
        你的聯署能幫助推動訂立《全球海洋公約》，2030年前成立至少30%海洋保護區！
      </Text>

      <Text as="p" {...paragraphProps}>
        此刻，綠色和平正爭取訂立《全球海洋公約》，為海洋建立完善保護機制，以長久保護、維持、復育海洋健康，並在2030年前成立至少30%的海洋保護區。
      </Text>

      <Heading {...headingProps}>您願意聯署加入守護海洋行列嗎？</Heading>

      <Box {...paragraphProps}>
        <Image src={contentB} />
      </Box>

      <Heading {...headingProps}>
        海洋正向我們發出求救信號，我們需要予以拯救！
      </Heading>

      <Text as="p" {...paragraphProps}>
        海洋孕育無數生物，亦提供地球50%的氧氣，更具調節全球氣候的功能，是我們的無上瑰寶。可惜，現時海洋受過度捕撈、深海採礦、塑膠污染等人類行為嚴重威脅，加上氣候危機影響下，海洋酸化、珊瑚白化問題愈趨嚴峻，海洋生態岌岌可危。
      </Text>

      <Text as="p" {...paragraphProps}>
        如我們未能及時挽救這場危機，海洋生態系統、生物多樣性將受到嚴重破壞，珊瑚及與其共生的魚類可能就此滅絕。如若海洋陷入困境，地球環境亦將難逃厄運。
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentC} />
      </Box>

      <Text as="p" {...paragraphProps}>
        綠色和平正號召全球支持者加入海洋聯署，亦誠意邀請你參與聯署，壯大守護海洋力量。你的力量，是推動2030年前成立至少30%海洋保護區的關鍵。
      </Text>

      <Text as="p" {...paragraphProps}>
        <b>
          請即聯署，向正受破壞的美麗大海伸出援手，支持訂立《全球海洋公約》！
        </b>
      </Text>
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
