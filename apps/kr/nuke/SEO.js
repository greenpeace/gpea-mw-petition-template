import Head from 'next/head';
import Script from 'next/script';

const SEO = () => {
  return (
    <Head>
      {/* campaign dataLayer */}
      {/* <Script
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          var dataLayer = (window.dataLayer = window.dataLayer || []);
          dataLayer.push({
            event: 'petition_load'
          });
        `,
        }}
      /> */}
      {/* title */}
      <title>
        일본 정부의 후쿠시마 방사성 오염수 해양 방류 결정의 즉각적 철회를
        요구합니다! | 그린피스
      </title>
      <meta
        property="og:title"
        content="그린피스 | 일본 정부의 후쿠시마 방사성 오염수 해양 방류 결정의 즉각적 철회를 요구합니다!"
      />
      <meta
        name="description"
        content="일본 정부의 후쿠시마 방사성 오염수 태평양 방류 처분을 막기 위해 탄원서에 서명해주세요! 한국 시민들의 서명은 주한 일본 대사와 일본 정부에 공식 전달되었습니다. 해양 방류 철회가 되는 그날까지 더 많은 전 세계 시민들의 청원을 모아 국제 사회 지지를 조직화 하는데 청원이 사용될 것입니다. 지금 막지 않으면 방사성 오염수는 2022년부터 태평양에 방류됩니다. 여러분의 동참 부탁드립니다!"
      />
      <meta
        property="og:description"
        content="일본 정부의 후쿠시마 방사성 오염수 태평양 방류 처분을 막기 위해 탄원서에 서명해주세요! 한국 시민들의 서명은 주한 일본 대사와 일본 정부에 공식 전달되었습니다. 해양 방류 철회가 되는 그날까지 더 많은 전 세계 시민들의 청원을 모아 국제 사회 지지를 조직화 하는데 청원이 사용될 것입니다. 지금 막지 않으면 방사성 오염수는 2022년부터 태평양에 방류됩니다. 여러분의 동참 부탁드립니다!"
      />
      <meta
        property="og:image"
        content="https://www.greenpeace.org/static/planet4-korea-stateless/2021/09/2b46af17-kr_2021_ce_petition_nuke_main.jpg"
      />
    </Head>
  );
};

export default SEO;
