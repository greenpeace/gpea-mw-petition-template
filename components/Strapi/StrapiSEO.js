import Head from 'next/head';
import Script from 'next/script';

const StrapiSEO = ({ strapi }) => {
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
        `
				}}
			/>
			{/* title */}
			<title>{strapi?.seo?.metaTitle}</title>
			<meta property="og:title" content={strapi?.seo?.metaTitle} />
			<meta name="description" content={strapi?.seo?.metaDescription} />
			<meta property="og:description" content={strapi?.seo?.metaDescription} />
			<meta property="og:image" content={strapi?.seo?.metaImageURL} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content={strapi?.seo?.canonicalURL} />
			<meta name="keywords" content={strapi?.seo?.keywords} />
		</Head>
	);
};

export default StrapiSEO;
