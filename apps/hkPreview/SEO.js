import Head from 'next/head';
import Script from 'next/script';
import { useSelector } from 'react-redux';
const SEO = () => {
  const strapi = useSelector((state) => state?.theme?.strapi);
  return (
    <Head>
      {/* campaign dataLayer */}
      <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          var dataLayer = (window.dataLayer = window.dataLayer || []);
          dataLayer.push({
            gCampaign: ${strapi?.issue?.data?.attributes?.slug},
            gBasket: ${strapi?.campaign},
          });
        `,
        }}
      />
      {/* title */}
      <title>{strapi?.seo?.metaTitle}</title>
      <meta property="og:title" content={strapi?.seo?.metaTitle} />
      <meta name="description" content={strapi?.seo?.metaDescription} />
      <meta property="og:description" content={strapi?.seo?.metaDescription} />
      <meta property="og:image" content={strapi?.seo?.metaImageURL} />
    </Head>
  );
};

export default SEO;
