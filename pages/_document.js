import Document, { Html, Head, Main, NextScript } from 'next/document';


class NextDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  
  render() {
    let moduleUrl = process.env.projectMarket?.toUpperCase() === 'TW' 
		? `https://change.greenpeace.org.tw/app/donation-module/main.js?ts=${process.env.timeStamp}`
		: process.env.projectMarket?.toUpperCase() === 'HK'
    ? `https://api.greenpeace.org.hk/app/donation-module-hkmp/main.js?ts=${process.env.timeStamp}`
    : `https://gpseoulwebserver.co.kr/app/donation-module/main.js?ts=${process.env.timeStamp}`;
    // if(process.env.NODE_ENV === 'production') {
    //   moduleUrl = `{{ get_asset_url("/gpea-hubspot-design-manager/landing-page-module/donation-form/donation-module-line-pay/main.js") }}`;
    // }
     return ( 
      <Html lang={process.env.projectMarket?.toUpperCase() === ('KR') ? 'ko-KR' : 'zh'}>
        <Head>
          <link
            rel="shortcut icon"
            type="image/png"
            href="https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/09/01aca3df-favicon-96x96-1.png"
          />
          
          {(process.env.NODE_ENV !== 'production') && (
            <link
              data-donation-module="true"
              rel="preload"
              href={moduleUrl}
              as="script"
            />  
          )}
          {/* Load google fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link rel="stylesheet"
            href={`https://fonts.googleapis.com/css2?family=Noto+Sans+${process.env.projectMarket?.toUpperCase() === ('KR') ? 'KR' : 'TC'}:wght@300;400;700&display=swap`}
            media="print"
            onLoad="this.onload=null;this.removeAttribute('media');"
          />
          
          {/* <!-- begin Convert Experiences code--> */}
          {(process.env?.convExp) && (
            <script type="text/javascript" src={process.env?.convExp}></script>
          )}
          {/* <!-- end Convert Experiences code --> */}
        </Head>
        <body className={process.env.projectMarket?.toUpperCase() === ('KR') ? 'kr' : ''}>
          <Main />
          <NextScript />
          {/** MC_FORM_STARTS  */}
          <form method="post" id="mc-form" style={{ display: 'none' }}>
            <input
              placeholder="FirstName"
              name="FirstName"
              type="text"
              defaultValue=""
            />
            <input
              placeholder="LastNameName"
              name="LastName"
              type="text"
              defaultValue=""
            />
            <input
              placeholder="Email"
              name="Email"
              type="email"
              defaultValue=""
            />
            <input
              placeholder="MobilePhone"
              name="MobilePhone"
              type="tel"
              defaultValue=""
            />
            <input
              placeholder="Birthdate"
              name="Birthdate"
              type="text"
              defaultValue=""
            />
            <input
              placeholder="OptIn"
              name="OptIn"
              type="checkbox"
              defaultValue=""
            />
          </form>
          {/** MC_FORM_ENDS  */}
        </body>
      </Html>
    );
  }
}

export default NextDocument;
