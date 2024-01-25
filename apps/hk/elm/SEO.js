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
            gCampaign: 'general',
            gBasket: 'elm',
          });
        `
				}}
			/>
			{/* title */}
			<title>
				請即聯署要求政府撤回「明日大嶼」填海計劃 - Greenpeace 綠色和平 | 香港
			</title>
			<meta
				property="og:title"
				content="請即聯署要求政府撤回「明日大嶼」填海計劃 - Greenpeace 綠色和平 | 香港"
			/>
			<meta
				name="description"
				content="大嶼山擁有不可忽視的生態價值，是香港珍貴的自然資源。但「明日大嶼」填海計劃一旦展開，可導致生態與財政雙重危機，因此，我們需要更多人的力量聯署，促請政府放棄「明日大嶼」，善用現存土地資源，守護香港自然環境。"
			/>
			<meta
				property="og:description"
				content="大嶼山擁有不可忽視的生態價值，是香港珍貴的自然資源。但「明日大嶼」填海計劃一旦展開，可導致生態與財政雙重危機，因此，我們需要更多人的力量聯署，促請政府放棄「明日大嶼」，善用現存土地資源，守護香港自然環境。"
			/>
			<meta
				property="og:image"
				content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/01/ae5922a9-artboard-15-elm-mw-fb-preview.jpg"
			/>
			<link rel="canonical" href={theme?.PageURL} />
		</Head>
	);
};

export default SEO;
