import Head from 'next/head';
import Script from 'next/script';
import shareImage from './images/share.jpg';

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
      <title>難逃一塑！臺灣保育類動物需要您的幫助 - Greenpeace 綠色和平 | 台灣</title>
      <meta
        property="og:title"
        content="難逃一塑！臺灣保育類動物需要您的幫助 - Greenpeace 綠色和平 | 台灣"
      />
      <meta
        name="description"
        content="測你多了解臺灣自然棲地，野生保育類動物有話要說！"
      />
      <meta
        property="og:description"
        content="測你多了解臺灣自然棲地，野生保育類動物有話要說！"
      />
      <meta property="og:image" content={shareImage} />
    </Head>
  );
};

export default SEO;
