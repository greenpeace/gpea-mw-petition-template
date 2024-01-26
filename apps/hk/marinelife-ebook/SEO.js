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
            gCampaign: 'oceans',
            gBasket: 'marinelife-ebook',
          });
        `
				}}
			/>
			{/* title */}
			<title>
				立即下載：《瀕危的海洋生物手冊》電子圖鑑 - Greenpeace 綠色和平 | 香港
			</title>
			<meta
				property="og:title"
				content="立即下載：《瀕危的海洋生物手冊》電子圖鑑 - Greenpeace 綠色和平 | 香港"
			/>
			<meta
				name="description"
				content="綠色和平推出《瀕危的海洋生物手冊》，讓您認識 10 種鯨魚、鯊魚、海豚、海龜與企鵝的習性與牠們面臨的威脅。本書以認真細緻的手繪插畫，加上綠色和平在專業科研與考察行程中，實地拍攝的獨家攝影作品，帶您走遍全球海洋，同時見證海洋破壞，了解保護海洋、拯救動物的各種行動與「終極方案」——《全球海洋公約》。"
			/>
			<meta
				property="og:description"
				content="綠色和平推出《瀕危的海洋生物手冊》，讓您認識 10 種鯨魚、鯊魚、海豚、海龜與企鵝的習性與牠們面臨的威脅。本書以認真細緻的手繪插畫，加上綠色和平在專業科研與考察行程中，實地拍攝的獨家攝影作品，帶您走遍全球海洋，同時見證海洋破壞，了解保護海洋、拯救動物的各種行動與「終極方案」——《全球海洋公約》。"
			/>
			<meta
				property="og:image"
				content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/07/8185a1e6-2022-ocean-ebook-fb-preview.jpg"
			/>
			<link rel="canonical" href={theme?.PageURL} />
		</Head>
	);
};

export default SEO;
