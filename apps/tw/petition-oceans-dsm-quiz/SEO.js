import Head from 'next/head';
import Script from 'next/script';
import shareImage from './images/share.jpg';

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
        `
				}}
			/>
			{/* title */}
			<title>
				測你對大海的認識有多深？神秘的深海生態值得你更關注 - Greenpeace 綠色和平
				| 台灣
			</title>
			<meta
				property="og:title"
				content="測你對大海的認識有多深？神秘的深海生態值得你更關注 - Greenpeace 綠色和平 | 台灣"
			/>
			<meta
				name="description"
				content="一起潛入地球上最大卻最不為人知的區域，被科學家們稱為「內太空」的深海世界！"
			/>
			<meta
				property="og:description"
				content="一起潛入地球上最大卻最不為人知的區域，被科學家們稱為「內太空」的深海世界！"
			/>
			<meta property="og:image" content={shareImage} />
		</Head>
	);
};

export default SEO;
