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
            gBasket: 'survey',
          });
        `,
        }}
      />
      {/* title */}
      <title>走塑不是一個人的事 - Greenpeace 綠色和平 | 香港</title>
      <meta
        property="og:title"
        content="走塑不是一個人的事 - Greenpeace 綠色和平 | 香港"
      />
      <meta
        name="description"
        content="走塑不是一個人的事，誠邀您用2分鐘參與問卷調查，一起動動腦袋，為塑膠污染問題尋找出路！"
      />
      <meta
        property="og:description"
        content="走塑不是一個人的事，誠邀您用2分鐘參與問卷調查，一起動動腦袋，為塑膠污染問題尋找出路！"
      />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/01/6495863e-plastic-survey-less.jpg"
      />
    </Head>
  );
};

export default SEO;
