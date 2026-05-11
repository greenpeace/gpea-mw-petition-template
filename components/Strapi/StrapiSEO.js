import Head from 'next/head';
import Script from 'next/script';

const StrapiSEO = ({ strapi }) => {
	return (
		
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
		
	);
};

export default StrapiSEO;
