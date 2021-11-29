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
      <title>推動超市走塑 急需您我行動 - Greenpeace 綠色和平 | 香港</title>
      <meta
        property="og:title"
        content="推動超市走塑 急需您我行動 - Greenpeace 綠色和平 | 香港"
      />
      <meta name="description" content="推動超市走塑 急需您我行動" />
      <meta property="og:description" content="推動超市走塑 急需您我行動" />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2019/07/8122f00d-gp01wpp.jpg"
      />
    </Head>
  );
};

export default SEO;
