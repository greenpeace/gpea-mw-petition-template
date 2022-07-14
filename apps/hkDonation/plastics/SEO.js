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
            gBasket: 'plastics',
          });
        `,
        }}
      />
      {/* title */}
      <title>請即捐款支持解決塑膠污染 - Greenpeace 綠色和平 | 香港</title>
      <meta
        property="og:title"
        content="請即捐款支持解決塑膠污染 - Greenpeace 綠色和平 | 香港"
      />
      <meta
        name="description"
        content="每年有逾萬噸塑膠垃圾流入海洋，塑膠不能自然降解，在水中分解成體積比沙粒、塵埃更細的「微塑膠」，被海洋生物吸收後進入食物鏈，均直接影響人體健康。"
      />
      <meta
        property="og:description"
        content="每年有逾萬噸塑膠垃圾流入海洋，塑膠不能自然降解，在水中分解成體積比沙粒、塵埃更細的「微塑膠」，被海洋生物吸收後進入食物鏈，均直接影響人體健康。"
      />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/07/83d0a77a-gp0strf5f_preview.jpg"
      />
    </Head>
  );
};

export default SEO;
