import Document, { Html, Head, Main, NextScript } from 'next/document';


class NextDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  
  render() {
    const moduleUrl = process.env.projectMarket?.toUpperCase() === 'TW' 
		? `https://change.greenpeace.org.tw/app/donation-module/main.js`
		: `https://api.greenpeace.org.hk/app/donation-module-hkmp/main.js`;
    // preload the production version only.
    return (
      <Html lang="zh">
        <Head>
          <link
            rel="shortcut icon"
            type="image/png"
            href="https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/09/01aca3df-favicon-96x96-1.png"
          />
          <link
            rel="preload"
            href={moduleUrl + "?ts=" + process.env.timeStamp}
            as="script"
          />
          {/* Load google fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700&display=swap"
            media="print"
            onload="this.onload=null;this.removeAttribute('media');"
          />
          {/* <!-- begin Convert Experiences code--> */}
          {(process.env?.convExp) && (
            <script type="text/javascript" src={process.env?.convExp}></script>
          )}
          {/* <!-- end Convert Experiences code --> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/** MC_FORM_STARTS  */}
          <form method="post" id="mc-form" style={{ display: 'none' }}>
            <input
              placeholder="FirstName"
              name="FirstName"
              type="text"
              defaultValue="DemoFirstName"
            />
            <input
              placeholder="LastNameName"
              name="LastName"
              type="text"
              defaultValue="DemoLastName"
            />
            <input
              placeholder="Email"
              name="Email"
              type="email"
              defaultValue="test@test.com"
            />
            <input
              placeholder="MobilePhone"
              name="MobilePhone"
              type="tel"
              defaultValue="+852 91234567"
            />
            <input
              placeholder="Birthdate"
              name="Birthdate"
              type="text"
              defaultValue="1/1/1999 12:00:00 AM"
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
