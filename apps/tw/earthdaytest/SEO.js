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
            gCampaign: 'arctic',
            gBasket: 'arcticquiz',
          });
        `,
        }}
      />
      {/* title */}
      <title>
        2022地球日限定人格測驗！3分鐘測出最適合您的永續投資方式 - Greenpeace
        綠色和平 | 台灣
      </title>
      <meta
        property="og:title"
        content="2022地球日限定人格測驗！3分鐘測出最適合您的永續投資方式 - Greenpeace 綠色和平 | 台灣"
      />
      <meta
        name="description"
        content="2022世界地球日主題是投資我們的星球，理財節目主持人暨綠色和平氣候大使謝哲青與您分享投資最重要的事不只ESG、CSR。快用人格測驗測出您是哪一型投資人，找到適合您的愛地球投資組合！"
      />
      <meta
        property="og:description"
        content="2022世界地球日主題是投資我們的星球，理財節目主持人暨綠色和平氣候大使謝哲青與您分享投資最重要的事不只ESG、CSR。快用人格測驗測出您是哪一型投資人，找到適合您的愛地球投資組合！"
      />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/02/1e286272-key_visual_updated_preview.jpg"
      />
    </Head>
  );
};

export default SEO;
