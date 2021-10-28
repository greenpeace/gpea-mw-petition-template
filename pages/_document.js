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
            href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          {/** MC_FORM_STARTS  */}
          {/* <form
            method="post"
            action="https://cloud.greenhk.greenpeace.org/websign"
            id="mc-form"
            style={{ display: 'none' }}
          >
            <input type="hidden" name="numSignupTarget" defaultValue="12345" />
            <input type="hidden" name="numResponses" defaultValue="1234" />
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
              defaultValue="852"
            />
            <input
              placeholder="OptIn"
              name="OptIn"
              type="checkbox"
              defaultValue=""
            />
            <input type="hidden" name="req" defaultValue="post_data" />
            <input
              type="hidden"
              name="LeadSource"
              defaultValue="Petition - Plastics"
            />
            <input
              type="hidden"
              name="Petition_Interested_In_Arctic__c"
              defaultValue="false"
            />
            <input
              type="hidden"
              name="Petition_Interested_In_Climate__c"
              defaultValue="false"
            />
            <input
              type="hidden"
              name="Petition_Interested_In_Forest__c"
              defaultValue="false"
            />
            <input
              type="hidden"
              name="Petition_Interested_In_Health__c"
              defaultValue="false"
            />
            <input
              type="hidden"
              name="Petition_Interested_In_Oceans__c"
              defaultValue="false"
            />
            <input
              type="hidden"
              name="Petition_Interested_In_Plastics__c"
              defaultValue="true"
            />
            <input
              type="hidden"
              name="CampaignId"
              defaultValue="7012u000000P8kwAAC"
            />
            <input
              type="hidden"
              name="UtmMedium"
              id="UtmMedium"
              defaultValue=""
            />
            <input
              type="hidden"
              name="UtmSource"
              id="UtmSource"
              defaultValue=""
            />
            <input
              type="hidden"
              name="UtmCampaign"
              id="UtmCampaign"
              defaultValue=""
            />
            <input
              type="hidden"
              name="UtmContent"
              id="UtmContent"
              defaultValue=""
            />
            <input type="hidden" name="UtmTerm" id="UtmTerm" defaultValue="" />
            <input type="hidden" name="CampaignData1__c" defaultValue="" />
            <input type="hidden" name="CampaignData2__c" defaultValue="" />
            <input type="hidden" name="CampaignData3__c" defaultValue="" />
            <input type="hidden" name="CampaignData4__c" defaultValue="" />
            <input type="hidden" name="CampaignData5__c" defaultValue="" />
          </form> */}
          {/** MC_FORM_ENDS  */}
        </body>
      </Html>
    );
  }
}

export default NextDocument;
