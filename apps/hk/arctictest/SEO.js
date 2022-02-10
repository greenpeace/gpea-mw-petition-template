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
            gCampaign: 'arctic',
            gBasket: 'arcticquiz',
          });
        `,
        }}
      />
      {/* title */}
      <title>
        找出隱藏在您潛意識中的極地動物！10題測出您的性格與習慣 - Greenpeace
        綠色和平 | 香港
      </title>
      <meta
        property="og:title"
        content="找出隱藏在您潛意識中的極地動物！10題測出您的性格與習慣 - Greenpeace 綠色和平 | 香港"
      />
      <meta
        name="description"
        content="每個人的潛意識都會隱藏著最真實的性格，而每一種性格都代表着不同的極地動物，獨立自主的北極熊、始終如一的雪鴞、家庭至上的藍鯨等，快來找出隱藏在您潛意識中的極地動物吧！"
      />
      <meta
        property="og:description"
        content="每個人的潛意識都會隱藏著最真實的性格，而每一種性格都代表着不同的極地動物，獨立自主的北極熊、始終如一的雪鴞、家庭至上的藍鯨等，快來找出隱藏在您潛意識中的極地動物吧！"
      />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/02/1e286272-key_visual_updated_preview.jpg"
      />
    </Head>
  );
};

export default SEO;
