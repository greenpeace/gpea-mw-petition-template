import Head from 'next/head';
import Script from 'next/script';

const SEO = () => {
  return (
    <Head>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          var dataLayer = (window.dataLayer = window.dataLayer || []);
          dataLayer.push({
            gCampaign: 'general',
            gBasket: 'general',
          });
        `,
        }}
      />
      {/* title */}
      <title>捐款支持- 綠色和平，環保·行動 - Greenpeace 綠色和平 | 台灣</title>
      <meta
        property="og:title"
        content="捐款支持- 綠色和平，環保·行動 - Greenpeace 綠色和平 | 台灣"
      />
      <meta
        name="description"
        content="從不接受政商資助，只靠民眾捐助，您的每月捐款支持，能幫助綠色和平推動環境永續方案，並在全球各地落實環保工作，謝謝您！"
      />
      <meta
        property="og:description"
        content="從不接受政商資助，只靠民眾捐助，您的每月捐款支持，能幫助綠色和平推動環境永續方案，並在全球各地落實環保工作，謝謝您！"
      />
    </Head>
  );
};

export default SEO;
