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
            gBasket: 'downloadable',
          });
        `,
        }}
      />
      {/* title */}
      <title>
        立即下載：綠色生活電子手冊新春篇 精華內容教你環保過年 - Greenpeace
        綠色和平 | 香港
      </title>
      <meta
        property="og:title"
        content="立即下載：綠色生活電子手冊新春篇 精華內容教你環保過年 - Greenpeace 綠色和平 | 香港"
      />
      <meta
        name="description"
        content="綠色和平推出綠色生活電子手冊新春篇，20頁精華內容包括團年飯素食食譜、大掃除簡約收納法、環保清潔劑做法等，教你方便又環保地過年！電子手冊免費下載，即下載了解生活減廢、重用資源貼士，培養新一年新習慣，為地球環境出一分力！"
      />
      <meta
        property="og:description"
        content="綠色和平推出綠色生活電子手冊新春篇，20頁精華內容包括團年飯素食食譜、大掃除簡約收納法、環保清潔劑做法等，教你方便又環保地過年！電子手冊免費下載，即下載了解生活減廢、重用資源貼士，培養新一年新習慣，為地球環境出一分力！"
      />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/01/61150b1d-cny-booklet-preview-updatedv2.jpg"
      />
    </Head>
  );
};

export default SEO;
