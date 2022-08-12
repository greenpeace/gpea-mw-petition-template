import React from 'react';
import { connect } from 'react-redux';
import { Heading, Text, Box, UnorderedList, ListItem, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import thankYouImageA from './images/202208-general-post-launch-webinar-thankyou-image01.jpg';
import thankYouImageB from './images/202208-general-post-launch-webinar-thankyou-image02.jpg';
import thankYouImageC from './images/202208-general-post-launch-webinar-thankyou-image03.jpg';
import thankYouImageD from './images/202208-general-post-launch-webinar-thankyou-image04.jpg';

const Thankyou = ({ theme, signup }) => {
  return (
    <>
      <Heading {...headingProps}>
        感謝您報名分享會！
      </Heading>

      <Text as="p" {...paragraphProps}>
        確認電郵將於 20 分鐘內向您發送，內含講座連結和密碼，敬請留意。活動開始前一小時，綠色和平會向您發送電郵和短訊提醒。
      </Text>

      <Text as="p" {...paragraphProps}>
        您的參與意義重大，因為即使您我身在香港，也能助全球環保運動一臂之力，以行動化解全球環境危機！
      </Text>

      <Heading {...headingProps}>
        在地行動：走塑行動再下一城！
      </Heading>

      <Text as="p" {...paragraphProps}>
        作為有興趣了解環保議題的熱心市民，相信您對氣候危機、全球暖化、塑膠污染等話題，並不陌生。在香港，我們推動的走塑行動，貼地之餘，也最能引起香港人共鳴。我們只需多一點的支持，行動定能再下一城。您願意多走一步，幫助環境逐步回復潔淨、健康嗎？
      </Text>

      <Box {...paragraphProps} borderRadius={8} p={4}>
        您的捐款將直接資助我們：
        <UnorderedList>
          <ListItem>提出政策倡議遊說政府 2025 年前全面管制即棄塑膠餐具，並制訂全面走塑藍圖</ListItem>
          <ListItem>透過獨立、專業的科學研究與採樣分析，了解塑膠問題如何影響香港人的健康，並遊說本地大企業肩負源頭減廢的責任</ListItem>
          <ListItem>與社區夥伴、專家學者合作舉行一系列社區實驗，提供實際、可行的走塑方案，進一步與市民一起驗證走塑有可能</ListItem>
        </UnorderedList>
      </Box>

      <Box {...paragraphProps}>
        <Image src={thankYouImageA} layout="fill" alt="Greenpeace 綠色和平" />
      </Box>
      <Box {...paragraphProps}>
        <Image src={thankYouImageB} layout="fill" alt="Greenpeace 綠色和平" />
      </Box>

      <Heading {...headingProps}>
        連繫全球：身在香港，成就跨越國界的影響力！
      </Heading>

      <Text as="p" {...paragraphProps}>
        綠色和平守護環境的工作不分地域界限，抱持專業、獨立的身份，務求為環境問題提出具體可行的解決方案，最重要的是帶來政府、企業的實際改變。
      </Text>

      <Text as="p" {...paragraphProps}>
        在塑膠議題上，聽見了您和全球數百萬人要求終結塑膠污染危機的訴求，聯合國終於在今年初通過制訂《全球塑膠公約》，背後綠色和平除了聯同 Break Free From Plastic 走塑聯盟伙伴集合全球數百萬計聯署，會議期間亦發起網絡行動，邀請公眾敦促與會代表通過制訂條約。今次決議確立條約將涵蓋源頭減廢，而非只規管回收再用，兼具法律約束力，正是綠色和平與全球數百萬環境守護者的共同訴求。
      </Text>

      <Box {...paragraphProps}>
        <Image src={thankYouImageC} layout="fill" alt="Greenpeace 綠色和平" />
      </Box>
      <Box {...paragraphProps}>
        <Image src={thankYouImageD} layout="fill" alt="Greenpeace 綠色和平" />
      </Box>

      <Text as="p" {...paragraphProps}>
        雖然通過制訂《公約》，但國際間仍須商議條文細則；未來綠色和平將持續監察並加強遊說各國代表，確保條約承諾「貨實價實」，創建一個整體且全面的框架，用於解決從生產、消費到處置塑膠廢棄物的問題。
      </Text>

      <Box {...paragraphProps} borderRadius={8} p={4}>
        綠色和平寄望《全球塑膠公約》將可以：
        <UnorderedList>
          <ListItem>促使大型跨國企業立即採取行動</ListItem>
          <ListItem>加快發展循環再用的商業模式</ListItem>
          <ListItem>大幅減少不必要的塑膠用量</ListItem>
          <ListItem>從源頭解決塑膠污染問題</ListItem>
        </UnorderedList>
      </Box>

      <Text as="p" {...paragraphProps}>
        有您的捐助支持，綠色和平便能有更多資源與力量執行全球國際環保倡議工作，幫助淘汰即棄塑膠，確保您我、下一代還能享有生機勃勃的地球。
      </Text>

      <Text as="span" fontWeight="bold" {...paragraphProps}>
        您的力量，足以挽救環境及人類未來。邀請您加入綠色和平，與全球環境守護者站在一起，共同攜手創建不一樣的未來。
      </Text>

    </>
  );
};

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Thankyou);
