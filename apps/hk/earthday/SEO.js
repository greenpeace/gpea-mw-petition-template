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
            gCampaign: 'climate',
            gBasket: 'earthday',
          });
        `,
        }}
      />
      {/* title */}
      <title>
        立即參加「惜碳承諾」計劃！減碳無難度，地球日踏出第一步 - Greenpeace
        綠色和平 | 香港
      </title>
      <meta
        property="og:title"
        content="立即參加「惜碳承諾」計劃！減碳無難度，地球日踏出第一步 - Greenpeace 綠色和平 | 香港"
      />
      <meta
        name="description"
        content="綠色和平舉辦「惜碳承諾」計劃，希望令香港每一位化身成為「減碳達人」，即使在香港這個彈丸之地，集眾人之力仍能為地球作出大大改變！讓我們檢視在日常生活中的碳足跡，珍惜寶貴的地球資源，為地球作出減碳承諾，遏止日益嚴重的環境問題。"
      />
      <meta
        property="og:description"
        content="綠色和平舉辦「惜碳承諾」計劃，希望令香港每一位化身成為「減碳達人」，即使在香港這個彈丸之地，集眾人之力仍能為地球作出大大改變！讓我們檢視在日常生活中的碳足跡，珍惜寶貴的地球資源，為地球作出減碳承諾，遏止日益嚴重的環境問題。"
      />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/04/435252be-202204_earthdaypush-preview.jpg"
      />
    </Head>
  );
};

export default SEO;
