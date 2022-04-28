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
        立即下載：《山海大嶼》大嶼山自然與生態主題電子書 - Greenpeace 綠色和平 |
        香港
      </title>
      <meta
        property="og:title"
        content="立即下載：《山海大嶼》大嶼山自然與生態主題電子書 - Greenpeace 綠色和平 | 香港"
      />
      <meta
        name="description"
        content="綠色和平推出《山海大嶼》自然與生態主題電子書，內含豐富資訊，例如3條大嶼精選行山路線、攝影比賽作品巡禮、大嶼珍貴物種介紹等，展示大嶼山的生物多樣性與美態，推動大眾了解大嶼山物種與自然風光，守護大嶼。"
      />
      <meta
        property="og:description"
        content="綠色和平推出《山海大嶼》自然與生態主題電子書，內含豐富資訊，例如3條大嶼精選行山路線、攝影比賽作品巡禮、大嶼珍貴物種介紹等，展示大嶼山的生物多樣性與美態，推動大眾了解大嶼山物種與自然風光，守護大嶼。"
      />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/04/c079568d-202205-lantau-booklet-kv-fb-preview.jpg"
      />
    </Head>
  );
};

export default SEO;
