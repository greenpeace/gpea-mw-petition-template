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
            gBasket: 'recycle101',
          });
        `,
        }}
      />
      {/* title */}
      <title>
        立即報名：惜物慳家101：家居減廢與回收講座 - Greenpeace 綠色和平 | 香港
      </title>
      <meta
        property="og:title"
        content="立即報名：惜物慳家101：家居減廢與回收講座 - Greenpeace 綠色和平 | 香港"
      />
      <meta
        name="description"
        content="家居物品種類繁多，大眾未必清楚知道正確的回收分類與方法。因此，綠色和平特意邀請到回收廠Mil Mill代表，以及環保網店Guruguru創辦人阿晴參與線上講座，講解回收要點、分類與限制，分享業界推廣重用、源頭減廢的工作，以及​​​​大眾能如何做好家居減廢與回收。透過這個講座，您可以了解到回收業背後的工序，認識家居減廢的方法。"
      />
      <meta
        property="og:description"
        content="家居物品種類繁多，大眾未必清楚知道正確的回收分類與方法。因此，綠色和平特意邀請到回收廠Mil Mill代表，以及環保網店Guruguru創辦人阿晴參與線上講座，講解回收要點、分類與限制，分享業界推廣重用、源頭減廢的工作，以及​​​​大眾能如何做好家居減廢與回收。透過這個講座，您可以了解到回收業背後的工序，認識家居減廢的方法。"
      />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/01/8f5b8b4a-cnywebinar-preview.jpg"
      />
    </Head>
  );
};

export default SEO;
