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
      <title>電視募款轉帳劃撥登記表 - Greenpeace 綠色和平 | 台灣</title>
      <meta
        property="og:title"
        content="電視募款轉帳劃撥登記表 - Greenpeace 綠色和平 | 台灣"
      />
      <meta name="description" content="" />
      <meta property="og:description" content="" />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2019/07/8122f00d-gp01wpp.jpg"
      />
    </Head>
  );
};

export default SEO;
