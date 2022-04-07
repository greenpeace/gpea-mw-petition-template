import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import contentB from './images/gp-climate-photo.jpg';

const subHeadingProps = {
  lineHeight: 1.2,
  mb: 6,
  fontWeight: 'bold',
  fontSize: { base: '20px' },
};

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  console.log(themeInterests);
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        <Text as="span" color={`theme.${themeInterests}`}>
          氣候變遷：未來世界的生存考驗
        </Text>
      </Heading>

      <Text as="p" {...paragraphProps}>
        2019 年，延燒 4 個月的澳洲森林大火燒死 6 萬隻無尾熊
        <br />
        2020 年，北極圈內小鎮夏季溫度破天荒達攝氏 38 度
        <br />
        2021 年，致命性洪災同時侵襲德國、中國、美國，逾千人喪命
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentB} />
      </Box>

      <Text as="p" {...paragraphProps}>
        一切的災難與悲劇以「氣候變遷」概括，似乎太過溫和，更驚悚的是，
        <b>
          這一切僅是全球升溫 1 度所帶來的影響，此時此刻，我們正自殺式的邁向升溫
          3 度！
        </b>
      </Text>
      <Text as="p" {...paragraphProps}>
        科學家已向世界發出紅色警告：如果我們無法即刻減碳、在 2050
        年前達成淨零碳排，屆時氣候系統恐將崩潰，伴隨而來的是大規模的生物滅絕、食物鏈與生態系巨變與成千上萬的氣候難民。
        <b>
          當災難電影成為現實生活，試想您的晚年與您的後代，將會生活在何等可怕的氣候環境中？
        </b>
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        <Text as="span" color={`theme.${themeInterests}`}>
          逆轉氣候危機、守護珍貴物種
          <br />
          現在就連署！
        </Text>
      </Heading>

      <Text as="p" {...paragraphProps}>
        此刻，綠色和平正在監督臺灣政府修正氣候法，同時輔導、敦促企業使用綠電以加速達成淨零碳排（Net
        Zero）；要策動龐大的社會體系絕非易事，唯有您與更多夥伴的連署，才能讓綠色和平在與政府、企業的會談協商中更具說服力！
      </Text>

      <Text as="p" {...paragraphProps}>
        <b>現在就加入連署，聲援綠色和平的氣候行動</b>
        ，讓紊亂的氣候系統能因政府與企業的改變回到正軌，讓您我的努力，得以造福世間萬物在地球上生生不息。
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        <Text as="span" color={`theme.${themeInterests}`}>
          您的力量，是帶來改變的關鍵！
        </Text>
      </Heading>

      <Text as="p" {...paragraphProps}>
        龐大的政府與企業是解決氣候問題的關鍵，但
        <strong>「不作為」的政府與企業，就是逆轉氣候危機的最大阻礙。</strong>
        綠色和平在全球與臺灣展開積極的氣候行動，我們擁有專業的跨國研究團隊、救難隊、行銷人才與專案經理，以紮實的科學報告、強而有力的遊說協商技巧，參與國際會議、揭露氣候困境，
        <strong>
          但若缺少您的連署支持，我們無法對政府與企業造成任何壓力！
        </strong>
      </Text>

      <Text as="p" {...subHeadingProps}>
        200 次以上的拜會與遊說，還不夠！
      </Text>

      <Text as="p" {...paragraphProps}>
        我們訴求政府在氣候法草案中制定有效的「碳定價」收費標準，以經濟學理論增加碳排大戶的排碳成本，加速企業的減碳腳步，謀求最大化的碳排減量。
      </Text>

      <Text as="p" {...paragraphProps}>
        目前該草案仍未被政府採納，<u>我們需要您加入連署，以民意撼動政府！</u>
      </Text>

      <Text as="p" {...subHeadingProps}>
        52 家企業承諾轉用 100% 綠電，還不夠！
      </Text>

      <Text as="p" {...paragraphProps}>
        我們發起 RE10x10 企業綠電倡議計畫，鼓勵臺灣企業自主承諾使用 100%
        綠電，為企業提供無償的顧問服務，包含台灣大哥大、屈臣氏、元大金控…等已加入的
        52 家企業，預計 2025 年可實際減碳達 3 萬噸。
      </Text>

      <Text as="p" {...paragraphProps}>
        目前該計畫距離 3 年 150 家企業響應的目標仍有差距，
        <u>我們需要您加入連署，讓企業看見消費者對使用永續電力的實質肯定！</u>
      </Text>

      {/* <Text as="p" {...subHeadingProps}>
        317 位老師使用綠色和平線上氣候教育平台，還不夠！
      </Text>

      <Text as="p" {...paragraphProps}>
        我們深知教育是養成個人價值觀的重要工具，因此建立線上氣候學習平台 Green
        Future
        Academy，從偏鄉到城市，我們讓氣候變遷議題走入校園，走入臺灣各個角落。
      </Text>

      <Text as="p" {...paragraphProps}>
        我們的目標是以平台為起點，讓氣候教育最終能成為法定課綱，而這
        <u>需要您加入連署，讓政府意識到臺灣氣候教育的匱乏！</u>
      </Text> */}

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        <Text as="span" color={`theme.${themeInterests}`}>
          您的連署
          <br />
          讓我們做的更快、更多、更好
        </Text>
      </Heading>

      <Text as="p" {...paragraphProps}>
        當您加入連署，您無須再隔著手機螢幕為異常的氣候災難擔憂、為無端受害的物種淚流，因為您已成為綠色和平全球氣候行動的一員——我們是能撼動政府決策的公民團體，是能決定企業存續的重要社群，而您的連署支持，就是這份強大影響力的關鍵。
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        <Text as="span" color={`theme.${themeInterests}`}>
          現在就連署
          <br />
          讓氣候問題因您的一小步
          <br />
          帶來看的見的改變與進步！
        </Text>
      </Heading>
    </>
  );
};

const mapStateToProps = ({ theme }) => {
  // theme.data.interests = 'climate';
  return { theme: theme.data };
};

export default connect(mapStateToProps)(Content);
