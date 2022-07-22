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
            gCampaign: 'oceans',
            gBasket: 'shipquiz',
          });
        `,
        }}
      />
      {/* title */}
      <title>
        【航海心理測驗】找出您的第二人生職業！ - Greenpeace
        綠色和平 | 香港
      </title>
      <meta
        property="og:title"
        content="【航海心理測驗】找出您的第二人生職業！ - Greenpeace 綠色和平 | 香港"
      />
      <meta
        name="description"
        content="看見人類活動破壞海洋生態，令海洋生物身陷險境，您也想伸出援手？若您將登上綠色和平船艦「彩虹勇士號」，執行守護海洋任務，您會適合船隊中的哪個崗位？立即參與心理測驗，找到您有適合擔任船隊中的崗位，一起成為海洋護航者 ！"
      />
      <meta
        property="og:description"
        content="看見人類活動破壞海洋生態，令海洋生物身陷險境，您也想伸出援手？若您將登上綠色和平船艦「彩虹勇士號」，執行守護海洋任務，您會適合船隊中的哪個崗位？立即參與心理測驗，找到您有適合擔任船隊中的崗位，一起成為海洋護航者 ！"
      />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/02/1e286272-key_visual_updated_preview.jpg"
      />
    </Head>
  );
};

export default SEO;
