import React from 'react';
import { connect } from 'react-redux';
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Box,
} from '@chakra-ui/react';

import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

const Thankyou = ({ theme, signup }) => {
  const themeInterests = theme.interests;
  const { FirstName } = signup;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        下一場行動者說明會資訊
      </Heading>

      <Text as="p" {...paragraphProps}>
        預計舉辦時間：5/7(六) 10:00-12:00
        <br />
        報名截止時間：4/22（如超過此時間報名，將納入下半年之行動者說明會）
        <br />
        說明會後將有基礎行動培訓，日期為：6/10-12
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        您的行動
        <br />
        將為地球帶來正向改變
      </Heading>

      <Text as="p" {...paragraphProps}>
        綠色和平自創立以來，堅守和平、非暴力原則，以創意的直接行動，阻止破壞環境的行為、讓更多公眾關注特定環境議題，進一步帶來改變。
      </Text>
      <Text as="p" {...paragraphProps}>
        我們的行動者團隊目前分為攀爬隊、水隊，在較難抵達的場域執行任務，表達環境訴求。
        <br />
        加入行動者行列後，將不定期舉辦訓練，並有機會參與各項淨山、倡議等行動。
      </Text>
      <Text as="p" {...paragraphProps}>
        再次感謝你為環境做出行動！
        <br />
        我們將在每年不定期招募行動者，並於舉辦基礎行動培訓（Basic Action
        Training）前，以信件方式邀請您參加行動者說明會。
      </Text>
    </>
  );
};

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Thankyou);
