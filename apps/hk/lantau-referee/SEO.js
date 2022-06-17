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
            gBasket: 'lantau-referee',
          });
        `,
        }}
      />
      {/* title */}
      <title>
        【朋友推薦登記頁】收看《山海大嶼》香港大嶼山生態紀錄片 - Greenpeace
        綠色和平 | 香港
      </title>
      <meta
        property="og:title"
        content="【朋友推薦登記頁】收看《山海大嶼》香港大嶼山生態紀錄片 - Greenpeace 綠色和平 | 香港"
      />
      <meta
        name="description"
        content="經已捐款收看紀錄片的朋友推薦，您可以免費登記收看《山海大嶼》！紀錄片由綠色和平與本地生態團隊耗時大半年製作，由資深傳媒人陳志雲聲音導航，以大嶼為舞台，帶領觀眾縱覽各個生境。"
      />
      <meta
        property="og:description"
        content="經已捐款收看紀錄片的朋友推薦，您可以免費登記收看《山海大嶼》！紀錄片由綠色和平與本地生態團隊耗時大半年製作，由資深傳媒人陳志雲聲音導航，以大嶼為舞台，帶領觀眾縱覽各個生境。"
      />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/05/ee047a92-documentary-hero-preview.jpg"
      />
    </Head>
  );
};

export default SEO;
