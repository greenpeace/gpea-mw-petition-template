import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import { StaticNextImage } from '@components/Image/staticNextImage';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import contentImageA from './images/202207-plastic-dpt-policy-content-image01.jpeg';
import contentImageB from './images/202207-plastic-dpt-policy-content-image02.jpeg';
import contentImageC from './images/202207-plastic-dpt-policy-content-image03.jpeg';

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        聯署推動管制即棄膠餐具 急需您我發聲
      </Heading>

      <Text as="p" {...paragraphProps}>
        2020 年香港即棄膠餐具棄置量達歷史新高的每日 266
        公噸；管制即棄膠餐具，刻不容緩。
      </Text>

      <Text as="p" {...paragraphProps}>
        然而，政府目前建議的第一階段管制範圍不僅狹窄，即使第二階段較全面的管制亦缺乏明確時間表，難以及時、有效打擊即棄膠餐具的增長。
      </Text>

      <Box {...paragraphProps}>
        <StaticNextImage
          src={contentImageA}
          alt="content"
          width="2084"
          height="1260"
        />
      </Box>

      <Text as="p" {...paragraphProps}>
        政府表明，相關條例草案最快會在本年底提交立法會；您的聯署，可向當局展示香港市民加快限塑的強大意願，亦會趕及推動新一屆立法會做好把關，以達早日落實全面管制即棄膠餐具的目標。
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        您的聯署，有助香港早日告別即棄膠餐具。
      </Heading>

      <Text as="p" {...paragraphProps}>
        2021 年，當局為管制即棄膠餐具作公眾諮詢，綠色和平聯合 10 個環團動員超過
        5,400 名公眾遞交意見書，有賴您我積極發聲，終促使政府正式提出立法建議。
      </Text>

      <Text as="p" {...paragraphProps}>
        2018 年，當局開展「土地大辯論」公眾諮詢，超過 50,000
        名熱心市民透過綠色和平聯署頁提交意見書；最終「發展棕地」被納入為短中期的優先項目。
      </Text>

      <Text as="p" {...paragraphProps}>
        以上種種，都證明只要更多與您一樣的同路人聚在一起，保護環境的聲音才會更響亮，才能讓決策者更為環境著想。
      </Text>

      <Box {...paragraphProps}>
        <StaticNextImage
          src={contentImageB}
          alt="content"
          width="1920"
          height="964"
        />
      </Box>

      <Heading {...headingProps}>立法管制即棄餐具 並非遙不可及</Heading>

      <Text as="p" {...paragraphProps}>
        事實上，各地早已有立法限塑先例可循，其政策均有確實時間表與分段目標：以歐盟為例，2019
        年便發佈「管制塑膠條例」，禁止銷售及派發餐具、棉花棒、飲管等即棄塑膠用品；鄰近的中國內地及澳門亦已禁止餐飲業提供膠飲管，並已經禁止售賣及生產發泡膠餐具。
      </Text>

      <Heading {...headingProps}>推動政府發展可重用系統</Heading>

      <Text as="p" {...paragraphProps}>
        除了全面管制即棄膠餐具，發展可重用系統同樣重要。綠色和平經過 3
        年推動，亦為消費者帶來無塑選擇的成果：綠色和平台北辦公室成功爭取政府立法規管連鎖便利商店、超市等為自備容器的消費者提供優惠及必須提供循環杯租借服務，推算若有
        10% 消費者不使用即棄杯，一年就能省下 100
        萬個杯！（在香港，綠色和平亦將於社區試行借還重用杯計劃，希望提供更多走塑方案、加強社區連繫、新的社會環保好習慣。）
      </Text>

      <Box {...paragraphProps}>
        <StaticNextImage
          src={contentImageC}
          alt="content"
          width="1920"
          height="979"
        />
      </Box>

      <Text as="p" {...paragraphProps}>
        相較之下，掌握最多資源的公共部門卻異常緩慢，發展可重用系統的時間表更是欠奉，遠遠落後外界的走塑進程。請即聯署，讓香港在重用系統發展得以急起直追！
      </Text>

      <Text as="p" {...paragraphProps}>
        若政府仍不發展可重用系統，即棄塑膠問題只會依舊存在。管制塑膠與推廣重用必須雙管齊下！請即聯署要求政府在
        22/23 年度立法，管制即棄餐具，於 2025
        年前落實全面管制，並盡快發展可重用系統！
      </Text>
    </>
  );
};

const mapStateToProps = ({ status, theme }) => {
  return { status, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
