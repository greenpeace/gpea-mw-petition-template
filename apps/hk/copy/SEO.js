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
      <title>
        Sign the petition to PROTECT 30% OF THE WORLD's OCEANS. - Greenpeace
        綠色和平 | 香港
      </title>
      <meta
        property="og:title"
        content="Sign the petition to PROTECT 30% OF THE WORLD's OCEANS. - Greenpeace 綠色和平 | 香港"
      />
      <meta
        name="description"
        content="Sign the petition to PROTECT 30% OF THE WORLD's OCEANS."
      />
      <meta
        property="og:description"
        content="Sign the petition to PROTECT 30% OF THE WORLD's OCEANS."
      />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2019/07/8122f00d-gp01wpp.jpg"
      />
    </Head>
  );
};

export default SEO;
