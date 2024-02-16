import Head from 'next/head';
import Script from 'next/script';

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
            gCampaign: 'plastics',
            gBasket: 'cnywebinar',
          });
        `
				}}
			/>
			{/* title */}
			<title>
				綠色新春教室：裸買店店長同你環保辦年貨大掃除 - Greenpeace 綠色和平 |
				香港
			</title>
			<meta
				property="og:title"
				content="綠色新春教室：裸買店店長同你環保辦年貨大掃除 - Greenpeace 綠色和平 | 香港"
			/>
			<meta
				name="description"
				content="綠色和平將舉辦綠色新春教室，同大家學習裸買年貨、環保大掃除，在去舊迎新的過程中減廢走塑，養成新年新習慣！裸買店店長聯同綠色和平項目主任譚穎琳，會詳盡介紹裸買年貨的方法與心得，分享重用資源的平台，讓大家便捷地找到需要的新年用品。"
			/>
			<meta
				property="og:description"
				content="綠色和平將舉辦綠色新春教室，同大家學習裸買年貨、環保大掃除，在去舊迎新的過程中減廢走塑，養成新年新習慣！裸買店店長聯同綠色和平項目主任譚穎琳，會詳盡介紹裸買年貨的方法與心得，分享重用資源的平台，讓大家便捷地找到需要的新年用品。"
			/>
			<meta
				property="og:image"
				content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/01/8f5b8b4a-cnywebinar-preview.jpg"
			/>
			<link rel="canonical" href={theme?.PageURL} />
		</Head>
	);
};

export default SEO;
