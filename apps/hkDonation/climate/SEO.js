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
            gBasket: 'climate',
          });
        `,
        }}
      />
      {/* title */}
      <title>捐款支持綠色和平 - Greenpeace 綠色和平 | 香港</title>
      <meta
        property="og:title"
        content="捐款支持綠色和平 - Greenpeace 綠色和平 | 香港"
      />
      <meta
        name="description"
        content="為維持公正獨立，綠色和平從不接受政府、企業資助，全有賴如您一般有心的市民得以持續為脆弱的地球盡一份力。綠色和平承諾善用一分一毫，將您的心意轉化為改變環境的力量。懇請您，加入我們，為脆弱的地球環境發聲！"
      />
      <meta
        property="og:description"
        content="為維持公正獨立，綠色和平從不接受政府、企業資助，全有賴如您一般有心的市民得以持續為脆弱的地球盡一份力。綠色和平承諾善用一分一毫，將您的心意轉化為改變環境的力量。懇請您，加入我們，為脆弱的地球環境發聲！"
      />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2020/07/d25d8238-2020-sf-donation-climate6.jpg"
      />
    </Head>
  );
};

export default SEO;
