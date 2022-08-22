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
            gBasket: 'recyclebooklet',
          });
        `,
        }}
      />
      {/* title */}
      <title>
        立即下載：裸買地圖、重用系統與紙包飲品盒回收全攻略（增訂版）｜電子指南 - Greenpeace
        綠色和平 | 香港
      </title>
      <meta
        property="og:title"
        content="立即下載：裸買地圖、重用系統與紙包飲品盒回收全攻略（增訂版）｜電子指南 - Greenpeace 綠色和平 | 香港"
      />
      <meta
        name="description"
        content="綠色和平推出綠色生活電子指南第三彈，包含最新全港裸買地圖、重用系統與回收全攻略，幫助大家做好家居環保！電子指南免費下載，請即下載了解塑膠、紙包飲品盒回收須知、就近裸買商鋪，以及香港最新重用系統消息，培養生活減廢習慣，為地球環境出多一分力！"
      />
      <meta
        property="og:description"
        content="綠色和平推出綠色生活電子指南第三彈，包含最新全港裸買地圖、重用系統與回收全攻略，幫助大家做好家居環保！電子指南免費下載，請即下載了解塑膠、紙包飲品盒回收須知、就近裸買商鋪，以及香港最新重用系統消息，培養生活減廢習慣，為地球環境出多一分力！"
      />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/08/791d148e-202208-recycle-booklet-fb-preview.jpg"
      />
    </Head>
  );
};

export default SEO;
