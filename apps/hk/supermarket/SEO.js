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
            gBasket: 'supermarket',
          });
        `,
        }}
      />
      {/* title */}
      <title>請即聯署 推動超市走塑 - Greenpeace 綠色和平 | 香港</title>
      <meta
        property="og:title"
        content="請即聯署 推動超市走塑 - Greenpeace 綠色和平 | 香港"
      />
      <meta
        name="description"
        content="每年，香港有至少112噸塑膠包裝垃圾流入海洋。綠色和平揭露，超市即棄包裝是塑膠污染的主要源頭之一；超市常用的即棄塑膠包裝，入侵食物鏈，你我日常進食的海鮮、食鹽亦無一倖免！全球相繼有超市落實減塑措施，一同推動香港連鎖超市，包括惠康、百佳等，加入走塑的風潮！"
      />
      <meta
        property="og:description"
        content="每年，香港有至少112噸塑膠包裝垃圾流入海洋。綠色和平揭露，超市即棄包裝是塑膠污染的主要源頭之一；超市常用的即棄塑膠包裝，入侵食物鏈，你我日常進食的海鮮、食鹽亦無一倖免！全球相繼有超市落實減塑措施，一同推動香港連鎖超市，包括惠康、百佳等，加入走塑的風潮！"
      />
      <meta
        property="og:image"
        content="https://storage.googleapis.com/planet4-hongkong-stateless/2020/05/89a55f6f-2020supermarket-fb-blog-thumbnail.jpg"
      />
    </Head>
  );
};

export default SEO;
