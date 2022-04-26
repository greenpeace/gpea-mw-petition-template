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
            gCampaign: 'climate',
            gBasket: 'earthdaywebinar',
          });
        `,
        }}
      />
      {/* title */}
      <title>
        Greenpeace
        綠色和平 | 香港
      </title>
      <meta
        property="og:title"
        content="Greenpeace 綠色和平 | 香港"
      />
      <meta
        name="description"
        content="綠色和平舉辦原創繪本《無家可歸的我》故事共讀會，邀請到親子學習活動專頁創辦人MeeliMami，講故事之餘，亦會分享氣候危機、海洋暖化、海冰融化等環境議題，以及拯救環境的小知識。我們希望透過繪本共讀，讓大眾了解環境現正面對的危機與緩解方法，並加入守護地球的行列。"
      />
      <meta
        property="og:description"
        content="綠色和平舉辦原創繪本《無家可歸的我》故事共讀會，邀請到親子學習活動專頁創辦人MeeliMami，講故事之餘，亦會分享氣候危機、海洋暖化、海冰融化等環境議題，以及拯救環境的小知識。我們希望透過繪本共讀，讓大眾了解環境現正面對的危機與緩解方法，並加入守護地球的行列。"
      />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/04/d05a7515-202204-earthday-kv-sns-website-banner-preview.jpg"
      />
    </Head>
  );
};

export default SEO;
