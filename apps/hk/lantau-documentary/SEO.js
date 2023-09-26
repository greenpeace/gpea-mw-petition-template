import Head from 'next/head';
import Script from 'next/script';
import OgImage from './images/seo-cover.jpg';

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
            gCampaign: 'oceans',
            gBasket: 'lantau-documentary',
          });
        `
				}}
			/>
			{/* title */}
			<title>
				《山海大嶼》香港珍貴生態紀錄片 - Greenpeace 綠色和平 | 香港
			</title>
			<meta
				property="og:title"
				content="《山海大嶼》香港珍貴生態紀錄片 -  Greenpeace 綠色和平 | 香港"
			/>
			<meta
				name="description"
				content="紀錄片由綠色和平與本地獲獎生態攝製隊耗時大半年製作，由資深傳媒人陳志雲聲音導航，以大嶼山為舞台，帶領觀眾縱覽各個生境。有您的支持，綠色和平將堅持守護大嶼，讓世代得以見證這片水光山色與生態瑰寶的故事。"
			/>
			<meta
				property="og:description"
				content="紀錄片由綠色和平與本地獲獎生態攝製隊耗時大半年製作，由資深傳媒人陳志雲聲音導航，以大嶼山為舞台，帶領觀眾縱覽各個生境。有您的支持，綠色和平將堅持守護大嶼，讓世代得以見證這片水光山色與生態瑰寶的故事。"
			/>
			<meta
				property="og:image"
				content={OgImage}
			/>
		</Head>
	);
};

export default SEO;
