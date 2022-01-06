import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import contentB from './images/gp-plastic-photo.jpg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  console.log(themeInterests);
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        <Text as="span" color={`theme.${themeInterests}`}>
          桃園，從全臺人均垃圾量居冠
          <br />
          成為臺灣首個訂定「循環容器辦法」的城市
        </Text>
      </Heading>

      <Text as="p" {...paragraphProps}>
        2020 年，六都廢棄物佔全臺七成以上，
        <br />
        其中桃園市人均垃圾量高達 1.522 公斤。
        <br />
        <br />
        桃園市政府於 2021 年 9
        月通過「桃園市發展低碳綠色城市自治條例」修正案，規範具一定規模的飲料業者應提供循環容器。
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        <Text as="span" color={`theme.${themeInterests}`}>
          - 1 + ∞ 減少一次性塑膠、增加循環使用
          <br />
          讓一次性塑膠容器不再毒害環境好幾世紀
        </Text>
      </Heading>

      <Box {...paragraphProps}>
        <Image src={contentB} />
      </Box>

      <Text as="p" {...paragraphProps}>
        一次性塑膠容器在使用短短幾小時後，就成為破壞環境好幾世紀的垃圾。
        <br />
        而循環容器，則讓每個被製造出來的容器，物盡其用。
      </Text>

      <Text as="p" {...paragraphProps}>
        估計 2020 年全臺一次性飲料杯垃圾量高達 20 億個，要做到有效減量，需要
        <br />
        政府積極透過收費和誘因減少一次性塑膠，推動循環使用模式，引導企業一同站在減塑陣線。
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        <Text as="span" color={`theme.${themeInterests}`}>
          透過連署
          <br />
          讓市政府聽見您的聲音！
        </Text>
      </Heading>

      <Text as="p" {...paragraphProps}>
        根據桃園市政府通過的自治條例修正案，市府須另訂實施辦法，而該辦法目前正由行政部門研議當中，預計
        2022 年 7 月起實施。
      </Text>

      <Text as="p" {...paragraphProps}>
        此刻，桃園市政府正在制定阻止市內塑膠過量的實施辦法，綠色和平邀請您一同發聲，呼籲桃園市政府在
        6 個月後開始「- 1 + ∞」，讓 2025 年全市塑膠使用量減半：
      </Text>

      <Text as="p" {...paragraphProps}>
        <strong>-1 減少一次性塑膠：</strong>提高一次性餐具計價收費 2025
        年全市塑膠使用量減半
        <br />
        <strong>+ ∞ 增加循環使用：</strong>2025 年市內循環容器使用比例達
        50％，讓容器循環不息
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        <Text as="span" color={`theme.${themeInterests}`}>
          減塑議題需要您的參與
          <br />
          連署支持桃園成為全球減塑的燈塔！
        </Text>
      </Heading>
    </>
  );
};

const mapStateToProps = ({ theme }) => {
  return { theme: theme.data };
};

export default connect(mapStateToProps)(Content);
