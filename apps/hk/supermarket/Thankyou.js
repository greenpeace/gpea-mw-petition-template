import React from 'react';
import { connect } from 'react-redux';
import { Heading, Text, Image } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

const Thankyou = ({ theme, signup }) => {
  const themeInterests = theme.interests;
  const { FirstName } = signup;
  return (
    <>
      <Heading {...headingProps}>感謝您加入聯署！</Heading>

      <Text as="p" {...paragraphProps}>
        全賴您的支持，三年來我們在走塑項目上，成功促使零售商淘汰微塑膠、揭示香港海域及河道的塑膠污染實況、並促使快餐業界如大家樂、大快活開始採取減塑措施！
      </Text>

      <Text as="p" {...paragraphProps}>
        此外，我們成功招募近400間餐廳加入「全城走塑」行列，提供走塑友善措施。您的長期捐助，將讓我們在2020年有足夠資源與學校合辦「走塑學堂」、延續「尋找走塑店鋪」活動，達成全港1,000間店鋪提供走塑友善措施的目標！
      </Text>
    </>
  );
};

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Thankyou);
