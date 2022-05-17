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
            gBasket: 'plasticfree-marketplace',
          });
        `,
        }}
      />
      {/* title */}
      <title>
        立即登記參與「惜簡生活節」，體驗裸買市集 - Greenpeace 綠色和平 | 香港
      </title>
      <meta
        property="og:title"
        content="立即登記參與「惜簡生活節」，體驗裸買市集 - Greenpeace 綠色和平 | 香港"
      />
      <meta
        name="description"
        content="今年6月，適逢世界環境日和國際海洋日，綠色和平舉辦「惜簡生活節」，帶領更多市民在日常中實踐裸買生活。現只需網上登記，即能參與「惜簡生活節」以及報名環保好生活工作坊。"
      />
      <meta
        property="og:description"
        content="今年6月，適逢世界環境日和國際海洋日，綠色和平舉辦「惜簡生活節」，帶領更多市民在日常中實踐裸買生活。現只需網上登記，即能參與「惜簡生活節」以及報名環保好生活工作坊。"
      />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/05/00c9a8ad-plastic-free-marketplace-preview.jpg"
      />
    </Head>
  );
};

export default SEO;
