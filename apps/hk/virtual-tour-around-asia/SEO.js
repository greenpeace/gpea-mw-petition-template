import Head from 'next/head';
import Script from 'next/script';

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
            gCampaign: 'general',
            gBasket: 'virtual-tour-around-asia',
          });
        `,
        }}
      />
      {/* title */}
      <title>
        立即報名：「眼睛去旅行：港台日韓四地環保成果巡禮」線上分享會 - Greenpeace 綠色和平 | 香港
      </title>
      <meta
        property="og:title"
        content="立即報名：「眼睛去旅行：港台日韓四地環保成果巡禮」線上分享會 - Greenpeace 綠色和平 | 香港"
      />
      <meta
        name="description"
        content="綠色和平守護環境的工作不分地域界限，抱持專業、獨立的身份，務求為環境問題提出具體可行的解決方案，最重要的是帶來政府、企業的實際改變。為讓您了解，您的同行如何為世界帶來改變，我們特別邀請綠色和平香港、台北、首爾、東京辦公室的代表，實時與我們連線，剖析各地環保工作的甜酸苦辣，以視像方式直接與我們分享一手拍攝的照片、影片。"
      />
      <meta
        property="og:description"
        content="綠色和平守護環境的工作不分地域界限，抱持專業、獨立的身份，務求為環境問題提出具體可行的解決方案，最重要的是帶來政府、企業的實際改變。為讓您了解，您的同行如何為世界帶來改變，我們特別邀請綠色和平香港、台北、首爾、東京辦公室的代表，實時與我們連線，剖析各地環保工作的甜酸苦辣，以視像方式直接與我們分享一手拍攝的照片、影片。"
      />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/08/012ee0b8-2022-general-post-launch-webinar-fb-preview-scaled.jpeg"
      />
    </Head>
  );
};

export default SEO;
