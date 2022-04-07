import Head from 'next/head';
import Script from 'next/script';
import OgImage from './images/meta_activist_recruitment.jpg';

const SEO = () => {
  return (
    <Head>
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          var dataLayer = (window.dataLayer = window.dataLayer || []);
          dataLayer.push({
            gCampaign: 'oceans',
            gBasket: 'sanctuaries',
          });
        `,
        }}
      />
      {/* title */}
      <title>
        用行動愛地球！成為綠色和平行動者 - Greenpeace 綠色和平 | 台灣
      </title>
      <meta
        property="og:title"
        content="用行動愛地球！成為綠色和平行動者 - Greenpeace 綠色和平 | 台灣"
      />
      <meta
        name="description"
        content="立即報名報名參加基礎行動培訓，跨出成為行動者的第一步！"
      />
      <meta
        property="og:description"
        content="立即報名報名參加基礎行動培訓，跨出成為行動者的第一步！"
      />
      <meta property="og:image" content={OgImage} />
    </Head>
  );
};

export default SEO;
