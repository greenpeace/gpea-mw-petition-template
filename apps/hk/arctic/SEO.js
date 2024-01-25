import Head from 'next/head';
import Script from 'next/script';

const SEO = (theme) => {
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
            gBasket: 'savethearctic',
          });
        `
				}}
			/>
			{/* title */}
			<title>守護北極 全球行動！ - Greenpeace 綠色和平 | 香港</title>
			<meta
				property="og:title"
				content="守護北極 全球行動！ - Greenpeace 綠色和平 | 香港"
			/>
			<meta
				name="description"
				content="北極在全球暖化下，已損失三分之二的海冰體積，北極熊的數量亦減少近一半。綠色和平正爭取訂立「全球海洋公約」，將北極地區設為優先保護區，以嚴格管制、禁止各國進行鑽油、捕魚等活動，同時推動全球氣候改革以控制升溫於 1.5℃ 內。守護北極生態、北極熊的唯一棲所，請即加入聯署，為北極發聲！"
			/>
			<meta
				property="og:description"
				content="北極在全球暖化下，已損失三分之二的海冰體積，北極熊的數量亦減少近一半。綠色和平正爭取訂立「全球海洋公約」，將北極地區設為優先保護區，以嚴格管制、禁止各國進行鑽油、捕魚等活動，同時推動全球氣候改革以控制升溫於 1.5℃ 內。守護北極生態、北極熊的唯一棲所，請即加入聯署，為北極發聲！"
			/>
			<meta
				property="og:image"
				content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/08/a5120475-gp02i8e_high_res.jpg"
			/>
			<link rel="canonical" href={theme?.PageURL} />
		</Head>
	);
};

export default SEO;
