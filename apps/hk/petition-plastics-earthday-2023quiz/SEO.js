import Head from 'next/head';
import Script from 'next/script';
import shareImage from './images/earthday-share.jpg';

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
            gCampaign: 'arctic',
            gBasket: 'arcticquiz',
          });
        `
				}}
			/>
			{/* title */}
			<title>
				【2023世界地球日期間限定】2分鐘心理測驗搵出你內心最需要被清理嘅垃圾 -
				Greenpeace 綠色和平 | 香港
			</title>
			<meta
				property="og:title"
				content="【2023世界地球日期間限定】2分鐘心理測驗搵出你內心最需要被清理嘅垃圾 - Greenpeace 綠色和平 | 香港"
			/>
			<meta
				name="description"
				content="今年係世界地球日53週年，每年嘅4月22日都希望可以提醒大家守護地球嘅迫切性。愛護地球嘅同時，都想大家多啲愛錫自己，即刻用2分鐘做個心理測驗，幫你搵出內心最需要被清理嘅垃圾，同地球一齊減廢啦！"
			/>
			<meta
				property="og:description"
				content="今年係世界地球日53週年，每年嘅4月22日都希望可以提醒大家守護地球嘅迫切性。愛護地球嘅同時，都想大家多啲愛錫自己，即刻用2分鐘做個心理測驗，幫你搵出內心最需要被清理嘅垃圾，同地球一齊減廢啦！"
			/>
			<meta property="og:image" content={shareImage} />
			<link rel="canonical" href={theme?.PageURL} />
		</Head>
	);
};

export default SEO;
