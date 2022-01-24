import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';
import Speaker from './Speaker';
import Webinar from './Webinar';

import speaker1 from './images/Asset-4-wilson.png';

const WebinarContent = {
  title: '',
  date: '日期：2022年2月27日（星期日）',
  time: '時間：早上11時至12時15分',
  description: '線上分享會平台：Zoom（網上登記後會獲得相關鏈結和密碼）',
  other: '',
};

const speaker1Content = [
  {
    name: '張偉賢 Wilson Cheung',
    role: '極地科研與探險專家',
    content: `Wilson在極地工作10年以上，是首位港產極地嚮導，現時也是極地探險安全顧問。\nWilson目前在斯瓦爾巴特群島和加拿大北極研究冰川變化，是位冰川學博士學生和極地文化研究員。他的身分亦包括：南極研究科學委員會（SCAR）人文社會科學專家組成員、首位亞洲PTGA資深極地探險嚮導、英國皇家地理學會和美國探索者協會成員，以及亞洲青年探險導師計劃創辦人、綠色和平網站專欄作者，10多年來致力提高公眾對極地和冰川動態的認識和關注。`,
    avatar: speaker1,
  },
];

import image01 from './images/GP048X8_PressMedia.jpg';

const Content = ({ theme, speaker1Ref, speaker2Ref, speaker3Ref }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        報名科學講座 直擊北極熊與極地實況
      </Heading>

      <Box {...paragraphProps}>
        <Webinar showTitle={false} content={WebinarContent} />
      </Box>

      <Text as="p" {...paragraphProps}>
        極地科研與探險專家張偉賢Wilson
        Cheung在極地工作10年以上，是首位港產極地嚮導與極地探險安全顧問。適逢國際北極熊日，Wilson將會從遠洋開講，以科學與數據角度，講解北極熊的歷史、習性，以及現正面對的生態災難與威脅，並講解洋流、海冰融化如何影響北極熊生活。同時，Wilson曾見過北極熊超過30次，與自然環境建立了緊密關係。
      </Text>

      <Box ref={speaker1Ref}>
        <Speaker content={speaker1Content} />
      </Box>

      <Text as="p" {...paragraphProps}>
        自2021年6月開始，Wilson在綠色和平網站撰寫專欄《北極物語》，這次他更以視像方式，直接地在講座中分享珍貴的第一手北極熊片段與照片，以及對於保護極地的反思。
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        你願意了解北極熊的現況，以及他們逐漸減少的因由嗎？
      </Heading>

      <Text as="p" {...paragraphProps}>
        Wilson現正於加拿大進行冰川研究，過去因工作關係，每年至少有一段時間在兩極研究與探險，南北極早已像他的家。他對北極熊的習性與生活變化深有研究，見過他們30次以上，更有小熊好奇靠近船隊等深刻經歷。Wilson坦言人類的工業活動、氣候變化對北極熊的生活帶來很大衝擊；而因海冰融化，北極熊習性出現變化，被迫需要長途游泳⋯⋯在講座裡，Wilson也會詳細拆解北極熊數量下降的主因，與坊間對北極熊的誤解，例如「北極熊會主動攻擊人？」「北極熊會游泳，因此海冰融化也關係不大？」等。一小時內，您可以認識北極熊的生存危機，更能由此重新審視人類與大自然的關係。
      </Text>

      <Heading {...headingProps}>
        立即報名！認識北極熊生存危機，了解極地海冰研究結果。
      </Heading>

      <Box {...paragraphProps}>
        <Image src={image01} />
      </Box>

      <Heading {...headingProps}>
        畫出北極熊理想生存環境！有機會贏得從北極寄出的明信片
      </Heading>

      <Text as="p" {...paragraphProps}>
        阻止工業與人為破壞，守護北極的脆弱生態，北極熊也可以重回理想的生存環境。現時只要報名參與講座，並於確認電郵內的連結中，上載一幅以「北極熊理想生存環境」為題的原創畫作，經Wilson與綠色和平評審的頭三名得獎者，即可獲得由北極斯瓦爾巴特群島或努納武特寄出的明信片一張（蓋有當地郵戳）。
      </Text>
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
