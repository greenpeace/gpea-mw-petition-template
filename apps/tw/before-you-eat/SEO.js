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
				觀賞《開動之前 Before You Eat》 遠洋漁業人權紀錄片｜Greenpeace 綠色和平
			</title>
			<meta
				property="og:title"
				content="觀賞《開動之前 Before You Eat》 遠洋漁業人權紀錄片｜Greenpeace 綠色和平"
			/>
			<meta
				name="description"
				content="從遠洋漁工的視角出發，《開動之前》記錄海鮮由產地到餐桌最重要的一段歷程：海上捕撈。鏡頭追隨一群海上工作者，直擊遠洋漁業作業的真實情況，部分畫面甚至是由漁工冒著生命危險親自錄下，才得以完整呈現在世人眼前。"
			/>
			<meta
				property="og:description"
				content="從遠洋漁工的視角出發，《開動之前》記錄海鮮由產地到餐桌最重要的一段歷程：海上捕撈。鏡頭追隨一群海上工作者，直擊遠洋漁業作業的真實情況，部分畫面甚至是由漁工冒著生命危險親自錄下，才得以完整呈現在世人眼前。"
			/>
			<meta property="og:image" content={OgImage} />
		</Head>
	);
};

export default SEO;
