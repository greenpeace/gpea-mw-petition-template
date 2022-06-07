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
        立即下載：綠色生活電子手冊 精華內容教你環保好生活 - Greenpeace
        綠色和平 | 香港
      </title>
      <meta
        property="og:title"
        content="立即下載：綠色生活電子手冊 精華內容教你環保好生活 - Greenpeace 綠色和平 | 香港"
      />
      <meta
        name="description"
        content="綠色和平推出綠色生活電子手冊，20頁精華內容包括家常素食食譜、家居掃除簡約收納法、環保清潔劑做法等，教你方便又環保地生活！電子手冊免費下載，即下載了解生活減廢、重用資源貼士，培養環保新習慣，為地球環境出一分力！"
      />
      <meta
        property="og:description"
        content="綠色和平推出綠色生活電子手冊，20頁精華內容包括家常素食食譜、家居掃除簡約收納法、環保清潔劑做法等，教你方便又環保地生活！電子手冊免費下載，即下載了解生活減廢、重用資源貼士，培養環保新習慣，為地球環境出一分力！"
      />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/06/7db0a0b3-202206-cny-ebook-new-fb-preview.jpg"
      />
    </Head>
  );
};

export default SEO;
