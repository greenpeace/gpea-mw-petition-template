import Head from 'next/head';

const SEO = () => {
  return (
    <Head>
      <script>
        {`
          var dataLayer = (window.dataLayer = window.dataLayer || []);
          dataLayer.push({
            gCampaign: 'oceans',
            gBasket: 'sanctuaries',
          });
        `}
      </script>
      {/* title */}
      <title>現在連署 您能保護 30% 全球海洋 - Greenpeace 綠色和平 | 台灣</title>
      <meta
        property="og:title"
        content="現在連署 您能保護 30% 全球海洋 - Greenpeace 綠色和平 | 台灣"
      />
      <meta name="description" content="現在連署 您能保護 30% 全球海洋" />
      <meta
        property="og:description"
        content="現在連署 您能保護 30% 全球海洋"
      />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2019/07/8122f00d-gp01wpp.jpg"
      />
    </Head>
  );
};

export default SEO;
