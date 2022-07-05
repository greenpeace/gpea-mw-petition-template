import React from 'react';
import { connect } from 'react-redux';
import { Box, Image, Heading, Text } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';


const Thankyou = ({ theme, signup }) => {
  const themeInterests = theme.interests;
  const { FirstName } = signup;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        歡迎您成為愛護的海洋一分子！
      </Heading>

      <Text as="p" {...paragraphProps}>
        不約而同，我們都是熱愛海洋的一分子，希望《瀕危的海洋生物手冊》電子圖鑑，能帶領您進一步這些認識奇妙的海洋生物。
      </Text>

      <Text as="p" {...paragraphProps}>
        浩瀚海洋裡，還有很多我們未及探索的奧妙，然而在長期缺乏整全的保護下，過度捕魚、深海採礦、塑膠及鑽油污染等多方威脅，已令不少海洋生物面臨滅絕危機：全球三分之一鯊魚品種面臨滅絕威脅、已知 7 種海龜中，有 6 種面臨絕種危機⋯⋯
      </Text>

      <Text as="p" {...paragraphProps}>
        我們特別製作《瀕危的海洋生物手冊》電子圖鑑，目標讓更多人進一步了解海洋生物的生存危機，並一起以行動守護海洋。
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        您願意一起守護珍貴海洋嗎？
      </Heading>

      <Text as="p" {...paragraphProps}>
        自 1975 年反捕鯨行動開始，綠色和平一直竭力守護海洋，我們的船隊走遍世界各地：大堡礁、亞馬遜珊瑚礁、南極羅斯海... 留下了許多改變足跡，卻未足以覆蓋廣闊海洋，令猖狂的破壞絕跡。
      </Text>

      <Text as="p" {...paragraphProps}>
        來到今天，我們花了 10 年構思訂立《全球海洋公約》、在 2030 年保護 30% 海洋的計劃，已順利推上國際舞台，並正式進入最後關鍵時刻—各國領袖將於今年8月15至26日聚首作最終決定。
      </Text>

      <Text as="p" {...paragraphProps}>
        訂立《全球海洋公約》對海洋未來攸關重要 ，誠邀您在這關鍵時刻，向美麗大海伸出援手，捐助綠色和平海洋工作。
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        立即捐款，攜手守護珍貴海洋！
      </Heading>

      <Text as="p" {...paragraphProps}>
        您的捐款將直接資助我們與全球頂尖科學家，進行海上科研任務、揭露企業破壞海洋的行為、以及國際間的倡議工作，直接幫助爭取訂立《全球海洋公約》，達成 2030 年 30% 全球海洋保護區的目標，幫助海洋回復美麗健康。
      </Text>

    </>
  );
};

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Thankyou);
