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
            gCampaign: 'arctic',
            gBasket: 'polarbearday',
          });
        `,
        }}
      />
      {/* title */}
      <title>
        立即報名：與極地科學家遠洋對話：北極熊與海冰科學講座 - Greenpeace
        綠色和平 | 香港
      </title>
      <meta
        property="og:title"
        content="立即報名：與極地科學家遠洋對話：北極熊與海冰科學講座 - Greenpeace 綠色和平 | 香港"
      />
      <meta
        name="description"
        content="極地科研與探險專家張偉賢Wilson Cheung將於遠洋開講，從科學和數據角度，講解北極熊的歷史、習性，以及現正面對的生態災難與威脅，並講解洋流、海冰融化如何影響北極熊生活。Wilson在極地工作10年以上，是首位港產極地嚮導，亦是極地探險安全顧問，親眼看見北極熊超過30次。Wilson在綠色和平網站撰寫專欄《北極物語》，這次他更以視像方式，直接地與我們分享在極地的最新研究與深刻見聞。"
      />
      <meta
        property="og:description"
        content="極地科研與探險專家張偉賢Wilson Cheung將於遠洋開講，從科學和數據角度，講解北極熊的歷史、習性，以及現正面對的生態災難與威脅，並講解洋流、海冰融化如何影響北極熊生活。Wilson在極地工作10年以上，是首位港產極地嚮導，亦是極地探險安全顧問，親眼看見北極熊超過30次。Wilson在綠色和平網站撰寫專欄《北極物語》，這次他更以視像方式，直接地與我們分享在極地的最新研究與深刻見聞。"
      />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-hongkong-stateless/2022/01/9f7d4b1a-artboard-15-pbd-webinar-preview.jpg"
      />
    </Head>
  );
};

export default SEO;
