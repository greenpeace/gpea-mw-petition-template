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
      <Heading {...headingProps}>
        感謝您聯署支持守護大嶼，優先發展棕地。
      </Heading>

      <Text as="p" {...paragraphProps}>
        您的聯署意義重大，我們將一起實現守護香港自然環境的目標。
      </Text>

      <Text as="p" {...paragraphProps}>
        面對您和超過17萬人提出的守護大嶼訴求，政府必須妥善規管與善用經濟、環境成本較低的棕地，保留您我、香港人珍惜的郊野和海洋。
      </Text>

      <Text as="p" {...paragraphProps}>
        由證明棕地發展可能性、揭露垃圾山等棕地亂象...
        綠色和平以事實證明政府只要規管和善用棕地，香港已有足夠的土地資源應付所需。
      </Text>

      <Text as="p" {...paragraphProps}>
        您為守護大嶼工作提供了強大力量。我們邀請您繼續關注守護香港自然環境議題，以及透過綠色和平的網站認識更多守護大嶼的幕後工作與同路人故事。
      </Text>

      {/* <Box {...paragraphProps}>
        <Image src={borrow} />
      </Box> */}

      <Heading {...headingProps}>
        為香港自然環境多走一步，請捐助守護大嶼項目。
      </Heading>

      <Text as="p" {...paragraphProps}>
        感謝您聯署支持守護大嶼，優先發展棕地。
      </Text>

      <Text as="p" {...paragraphProps}>
        您的聯署意義重大，我們將一起實現守護香港自然環境的目標。綠色和平一直以行動、研究調查、政策倡議等方式守護大嶼，您願意多走一步，捐助守護大嶼的工作嗎？
      </Text>

      <Text as="p" {...paragraphProps}>
        您的捐款將直接資助綠色和平繼續以紮實研究，揭露真相，推動政府善用棕地，守護您我珍惜的自然環境！
      </Text>

      <Heading {...headingProps}>
        填海嚴重將危害海洋生態，您可以施以援手！
      </Heading>

      <Text as="p" {...paragraphProps}>
        東大嶼水域具有白腹海鵰、鮑氏雙足蜥、海筆等珍稀物種，距離填海範圍最近僅約十多公里，正是全港唯一綠海龜的產卵地—南丫島深灣，在如此敏感的生態區域大興土木，必然破壞珍貴的海洋生態，野生動物亦恐從此絕跡。
      </Text>

      <Text as="p" {...paragraphProps}>
        有您的捐助支持，綠色和平便能有更多資源與力量執行守護大嶼工作，推動政府優先發展棕地，守護香港自然環境。
      </Text>

      <Text as="p" {...paragraphProps}>
        向香港自然環境伸出援手，捐助綠色和平守護大嶼工作。
      </Text>

      {/* <Text as="p" {...paragraphProps}>
        捐款查詢：
        <br />
        歡迎致電會員服務熱線 (852) 2854 8318，或電郵至{' '}
        <a href="mailto:donor.services.hk@greenpeace.org">
          <u>donor.services.hk@greenpeace.org</u>
        </a>
        ，以查詢捐款相關事宜。
      </Text> */}
    </>
  );
};

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Thankyou);
