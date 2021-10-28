import React from 'react';
import Message from '@components/Footer/message';
import OtherInformation from '@components/Footer/otherInformation';
import SFFormat from '@components/Footer/sfFormat';

const MessageContent = {
  messageTitle: 'Do you have any questions, please call or mail us!',
  messageContact: [
    'Phone number: <a href="tel:+85228548318"><u>(+99) 012 345 678 900</u></a> | Email address: <a href="mailto:donor.services.hk@greenpeace.org"><u>info@greenpeace.org</u></a>',
  ],
};

const footerContent = [
  '綠色和平是獨立的國際環保組織，通過科學研究、政策倡議及和平行動，揭露全球環境問題並提出相應解決方案。 <br/>我們從不接受任何政府、企業或政治團體的資助，只接受個人的直接捐款，以維持公正獨立。',
  '此捐款頁面採用了 SSL 保安接層加密技術，可確保敏感資料在您的瀏覽器和我們伺服器之間傳送時獲得保密處理。<br/><br/>您的個人資料將絕對保密，僅用做捐款、會員服務及通訊等用途，請參考我們的隱私保護政策。',
  '捐款港幣$100以上可申請扣稅。我們於每年3月31日財政年度完結時準備年度收據，並於4月至5月發送給每月捐款會員。如捐款屬於單次捐款，而捐款者於捐款時能夠提供有效的電郵地址，將會即時收到電子收據；沒有提供有效電郵地址者，將於捐款後6星期內收到我們發送的單次捐款收據。<br/><br/>獲豁免繳稅慈善機構編號︰91/5418',
];

const PetitionFooter = ({ locale }) => {
  return (
    <>
      <Message content={MessageContent} />
      {/* <OtherInformation
        content={{
          footerContent: footerContent,
        }}
      /> */}
      <SFFormat locale={locale}></SFFormat>
    </>
  );
};

export default PetitionFooter;
