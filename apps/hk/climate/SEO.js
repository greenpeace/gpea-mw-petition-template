import Head from 'next/head';

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
            gCampaign: 'climate',
            gBasket: 'emergency',
          });
        `
				}}
			/>
			{/* title */}
			<title>推動超市走塑 急需您我行動 - Greenpeace 綠色和平 | 香港</title>
			<meta
				property="og:title"
				content="推動超市走塑 急需您我行動 - Greenpeace 綠色和平 | 香港"
			/>
			<meta name="description" content="推動超市走塑 急需您我行動" />
			<meta property="og:description" content="推動超市走塑 急需您我行動" />
			<meta
				property="og:image"
				content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2019/07/8122f00d-gp01wpp.jpg"
			/>
			<link rel="canonical" href={theme?.PageURL} />
		</Head>
	);
};

export default SEO;
