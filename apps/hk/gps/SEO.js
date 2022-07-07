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
            gCampaign: 'forests',
            gBasket: 'global',
          });
        `,
        }}
      />
      {/* title */}
      <title>
        走塑GPS：全港走塑店鋪定位地圖 1,100間走塑店鋪輕鬆定位！ - Greenpeace
        綠色和平 | 香港
      </title>
      <meta
        property="og:title"
        content="走塑GPS：全港走塑店鋪定位地圖 1,100間走塑店鋪輕鬆定位！ - Greenpeace 綠色和平 | 香港"
      />
      <meta
        name="description"
        content="為了方便市民搜尋「全城走塑計劃」商戶，綠色和平推出「走塑GPS」WhatsApp Chatbot功能，讓你隨時隨地尋找鄰近走塑友善小店，做到「Plastic Free, Care Free」！"
      />
      <meta
        property="og:description"
        content="為了方便市民搜尋「全城走塑計劃」商戶，綠色和平推出「走塑GPS」WhatsApp Chatbot功能，讓你隨時隨地尋找鄰近走塑友善小店，做到「Plastic Free, Care Free」！"
      />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/04/9e75f891-20220318_gps-07.jpg"
      />
    </Head>
  );
};

export default SEO;
