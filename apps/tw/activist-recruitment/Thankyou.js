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
        行動者招募資訊
      </Heading>

      <Text as="p" {...paragraphProps}>
        我們將在每年不定期招募行動者，並舉辦基礎行動培訓（Basic Action Training），通過培訓者即可加入行動者團隊。
        <br />
        在舉辦基礎行動培訓前將以電子郵件方式邀請您參加行動者團隊說明會。
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
        我們的行動者抱著與綠色和平共同理念投身倡議行動，亦依照行動任務需求出動專項隊伍合力完成。
        <br />
        加入行動者行列後，將不定期舉辦訓練，並有機會參與淨山、淨河、各項倡議等行動。
      </Text>
      <Text as="p" {...paragraphProps}>
        再次感謝你為環境做出行動！
      </Text>
    </>
  );
};

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Thankyou);
