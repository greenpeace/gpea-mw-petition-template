import Head from 'next/head';
import Script from 'next/script';
import { createInstance, HackleProvider } from '@hackler/react-sdk';

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

			<Script strategy="afterInteractive">
				{(function () {
					const hackleClient = createInstance(
						'yWTbqKSdoOA6ECdlxFLkEBPj9Nl9SbES'
					);
					hackleClient.onReady(function () {
						console.log('hackleClient: ', hackleClient);
						// const remoteConfig = hackleClient.remoteConfig();
						// //const parameterValue = remoteConfig.get(parameterKey, defaultValue)
						// const ctaText_get = remoteConfig.get('cta_text', 'defaultValue');
						// const ctaText = document.getElementById('cta_text');
						// ctaText.textContent = ctaText_get;
						// const bgImg_get = remoteConfig.get('bg_img', 'defaultValue');
						// const bgImg = document.getElementById('bg_img');
						// bgImg.setAttribute('src', bgImg_get);
						// const bgImgABtest_get = remoteConfig.get(
						// 	'bgImg_abtest',
						// 	'defaultValue'
						// );
						// const bgImgABtest = document.getElementById('bgImg_ABtest');
						// bgImgABtest.style.backgroundImage = "url('bgImgABtest_get')";
					});
				})()}
			</Script>
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
