import Head from 'next/head';
import Script from 'next/script';

const SEO = () => {
  return (
    <Head>
      {/* campaign dataLayer */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          var dataLayer = (window.dataLayer = window.dataLayer || []);
          dataLayer.push({
            gCampaign: 'plastics',
            gBasket: 'dpt-policy',
          });
        `,
        }}
      />
      {/* title */}
      <title>
        聯署要求政府立法 落實管制即棄膠餐具 - Greenpeace 綠色和平 | 香港
      </title>
      <meta
        property="og:title"
        content="聯署要求政府立法 落實管制即棄膠餐具 - Greenpeace 綠色和平 | 香港"
      />
      <meta
        name="description"
        content="2020 年香港即棄膠餐具棄置量達歷史新高的每日 266 公噸，冠絕各類塑膠垃圾。然而，政府目前建議的第一階段管制範圍不僅狹窄，即使第二階段較全面的管制亦缺乏明確時間表，難以有效打擊即棄膠餐具的增長。相關條例草案最快會在本年底提交立法會；您的聯署，可向當局展示香港市民加快限塑的強大意願，助香港早日告別即棄膠餐具。"
      />
      <meta
        property="og:description"
        content="2020 年香港即棄膠餐具棄置量達歷史新高的每日 266 公噸，冠絕各類塑膠垃圾。然而，政府目前建議的第一階段管制範圍不僅狹窄，即使第二階段較全面的管制亦缺乏明確時間表，難以有效打擊即棄膠餐具的增長。相關條例草案最快會在本年底提交立法會；您的聯署，可向當局展示香港市民加快限塑的強大意願，助香港早日告別即棄膠餐具。"
      />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/07/0719aef3-20220713_plastic_dpt_sns-05.jpg"
      />
    </Head>
  );
};

export default SEO;
