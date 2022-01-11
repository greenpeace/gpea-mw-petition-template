import Head from 'next/head';
import Script from 'next/script';
import OgImage from './images/share.png';

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
        立即連署 ! 支持桃園制定積極塑膠減量目標 - Greenpeace 綠色和平 | 台灣
      </title>
      <meta
        property="og:title"
        content="立即連署 ! 支持桃園制定積極塑膠減量目標 - Greenpeace 綠色和平 | 台灣"
      />
      <meta
        name="description"
        content="桃園，是臺灣首個訂定「循環容器辦法」的城市。綠色和平邀請您一同連署，呼籲桃園市政府在實施辦法中制定減量目標、循環容器使用目標！"
      />
      <meta
        property="og:description"
        content="桃園，是臺灣首個訂定「循環容器辦法」的城市。綠色和平邀請您一同連署，呼籲桃園市政府在實施辦法中制定減量目標、循環容器使用目標！"
      />
      <meta property="og:image" content={OgImage} />
    </Head>
  );
};

export default SEO;
