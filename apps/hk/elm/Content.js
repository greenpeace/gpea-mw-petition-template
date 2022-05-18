import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import image from './images/P1I4136.jpg';
import image02 from './images/elm-animation.gif';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        聯署守護大嶼 優先發展棕地
      </Heading>

      <Text as="p" {...paragraphProps}>
        你的聯署將有助推動政府撤回「明日大嶼」填海計劃，守護本地珍貴海洋生態，優先發展棕地。
      </Text>

      <Text as="p" {...paragraphProps}>
        綠色和平致力保護海洋，推動政府優先善用現有的土地資源，撤回「明日大嶼」填海工程。綠色和平發佈多份研究及實地調查為本的報告，揭露棕地違規作業等問題，成功促使特首於2021年底首次於立法會上答允處理棕地亂象；我們的生態報告，揭示東大嶼水域擁有不可忽視的生態價值；我們與經濟學者的研究，提醒公眾「明日大嶼」恐令公共財政儲備在數年內耗盡。種種證據表明，撤回「明日大嶼」填海計劃對香港和環境生態都是最有利的。
      </Text>

      <Heading {...headingProps}>
        你願意加入聯署，守護大嶼珍貴自然環境嗎？
      </Heading>

      <Box {...paragraphProps}>
        <Image src={image} />
      </Box>

      <Heading {...headingProps}>
        填海可導致生態與財政雙重危機，我們須力挽狂瀾！
      </Heading>

      <Text as="p" {...paragraphProps}>
        「明日大嶼」是香港史上最昂貴的基建工程，造價至少6,240億元，根據我們委託經濟學者關焯照的研究報告推算出，填海計劃恐在9年內耗盡香港的財政儲備。
      </Text>

      <Text as="p" {...paragraphProps}>
        同時，綠色和平聯同多個環團發佈的生態調查發現，鄰近填海選址的周公島具國家一級保護野生動物白腹海鵰的鳥巢、全球獨有的鮑氏雙足蜥等珍貴生物，可見東大嶼水域富有生態價值，若貿然展開大規模填海工程，這些海洋生物必會遭殃，中華白海豚及江豚亦恐會絕跡於香港，令我們引以為傲的生態或將不復存在。
      </Text>
      <Box {...paragraphProps}>
        <Image src={image02} />
      </Box>

      <Text as="p" {...paragraphProps}>
        自然住屋並不對立，香港有充足具發展潛力的土地可用。綠色和平提出發展棕地作為替代方案，遠比填海的成本效益更高、更快捷地增加香港公營房屋供應量。請支持我們，參與聯署，促請政府放棄「明日大嶼」填海計劃，善用現存土地資源，守護香港自然環境。
      </Text>

      <Heading {...headingProps}>
        請即聯署，促請撤回「明日大嶼」填海計劃。
      </Heading>
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
