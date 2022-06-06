import Head from 'next/head';
import Script from 'next/script';
import OgImage from './images/share.jpg';

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
      <title>立即連署！改寫氣候未來 - Greenpeace 綠色和平 | 台灣</title>
      <meta
        property="og:title"
        content="立即連署！改寫氣候未來 - Greenpeace 綠色和平 | 台灣"
      />
      <meta
        name="description"
        content="全球暖化、極端氣候無分國界衝擊著每一個人，時間不多了！現在就抬頭面對氣候變遷造成的冰山消融、海平面上升、森林大火、高溫熱浪、農作物危機。連署支持綠色和平為環境做事，讓企業看見消費者的力量，讓政府看見民意的偉大。"
      />
      <meta
        property="og:description"
        content="全球暖化、極端氣候無分國界衝擊著每一個人，時間不多了！現在就抬頭面對氣候變遷造成的冰山消融、海平面上升、森林大火、高溫熱浪、農作物危機。連署支持綠色和平為環境做事，讓企業看見消費者的力量，讓政府看見民意的偉大。"
      />
      <meta property="og:image" content={OgImage} />
    </Head>
  );
};

export default SEO;
