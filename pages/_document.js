import Document, { Html, Head, Main, NextScript } from 'next/document';

class NextDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="zh">
        <Head>
          <link
            rel="shortcut icon"
            type="image/png"
            href="https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/09/01aca3df-favicon-96x96-1.png"
          />
          {/* Load google fonts */}
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;700&display=swap"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/** MC_FORM_STARTS  */}
          <form method="post" id="mc-form" style={{ display: 'none' }}>
            {/* <input placeholder="FirstName" name="FirstName" type="text" value="Lok Hin"/>
            <input placeholder="LastName" name="LastName" type="text" value="Tang"/>
            <input placeholder="Email" name="Email" type="email" value="-____-@hotmail.com.hk"/>
            <input placeholder="MobilePhone" name="MobilePhone" type="tel" value="+852 60295660"/>
            <input placeholder="Birthdate" name="Birthdate" type="text" value="6/21/1993 12:00:00 AM"/> */}
            <input
              placeholder="FirstName"
              name="FirstName"
              type="text"
              defaultValue=""
            />
            <input
              placeholder="LastName"
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
              placeholder="MobileCountryCode"
              name="MobileCountryCode"
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
