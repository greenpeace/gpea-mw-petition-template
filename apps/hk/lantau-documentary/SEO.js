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
            gCampaign: '',
            gBasket: '',
          });
        `,
        }}
      />
      {/* title */}
      <title>
      《山海大嶼》香港第一部大嶼山生態紀錄長片 Greenpeace 綠色和平 | 香港
      </title>
      <meta
        property="og:title"
        content="《山海大嶼》香港第一部大嶼山生態紀錄長片 Greenpeace 綠色和平 | 香港"
      />
      <meta
        name="description"
        content="紀錄片由綠色和平與本地生態團隊耗時大半年製作，由資深傳媒人陳志雲聲音導航，以大嶼為舞台，帶領觀眾縱覽各個生境。有您的支持，綠色和平將堅持守護大嶼，讓世代得以見證這片水光山色與生態瑰寶的故事。"
      />
      <meta
        property="og:description"
        content="紀錄片由綠色和平與本地生態團隊耗時大半年製作，由資深傳媒人陳志雲聲音導航，以大嶼為舞台，帶領觀眾縱覽各個生境。有您的支持，綠色和平將堅持守護大嶼，讓世代得以見證這片水光山色與生態瑰寶的故事。"
      />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/04/d05a7515-202204-earthday-kv-sns-website-banner-preview.jpg"
      />
    </Head>
  );
};

export default SEO;
