import Head from 'next/head';
import Script from 'next/script';
import OgImage from './images/seo-cover.jpg';

const SEO = ({ theme }) => {
	return (
		<Head>
			{/* campaign dataLayer */}
			<Script
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
          var dataLayer = (window.dataLayer = window.dataLayer || []);
          dataLayer.push({
            gCampaign: 'oceans',
            gBasket: 'lantau-documentary',
          });
        `
				}}
			/>
			{/* title */}
			<title>
				相識香港野——生態探索及攝影大師班 - Greenpeace 綠色和平 | 香港
			</title>
			<meta
				property="og:title"
				content="相識香港野——生態探索及攝影大師班 - Greenpeace 綠色和平 | 香港"
			/>
			<meta
				name="description"
				content="綠色和平與生態攝影師Robert Ferguson合辦免費網上課程：相識香港野——生態探索及攝影大師班，一連七集精彩內容教你認識香港自然生態，由淺入深分享拍攝大小野外生物冷知識！立即登記，一起認識、賞識香港「野」！"
			/>
			<meta
				property="og:description"
				content="綠色和平與生態攝影師Robert Ferguson合辦免費網上課程：相識香港野——生態探索及攝影大師班，一連七集精彩內容教你認識香港自然生態，由淺入深分享拍攝大小野外生物冷知識！立即登記，一起認識、賞識香港「野」！"
			/>
			<meta property="og:image" content={OgImage} />
			<link rel="canonical" href={theme?.PageURL} />
		</Head>
	);
};

export default SEO;
