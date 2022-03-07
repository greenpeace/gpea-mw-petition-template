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
        感謝你加入連署，推動氣候行動更進一步
      </Heading>

      <Text as="p" {...paragraphProps}>
        每一個偉大的成就，背後都有無數人前仆後繼的努力。
      </Text>
      <Text as="p" {...paragraphProps}>
        現在，恭喜你成為無數人之一，我們都是逆轉氣候危機的重要力量！
      </Text>
      <Text as="p" {...paragraphProps}>
        因為有你的連署支持，綠色和平才能出席國際會議，以全球支持者為後盾，要求各國政治領袖在
        2030 年前，必須奠定將氣候變遷幅度控制在攝氏 1.5
        度內的政策基礎，有了政策作為依歸，氣候危機才得以從根本性做出改變。
      </Text>
      <Text as="p" {...paragraphProps}>
        在 2030 年前，綠色和平將持續以下列方向努力
      </Text>

      <Box {...paragraphProps}>
        <OrderedList>
          <ListItem>
            要求地方政府提供完整的淨零轉型策略，包括中央及地方的法規，落實轉型的關鍵制度，包括與世界接軌的碳定價制度。
          </ListItem>
          <ListItem>
            落實減碳和適應氣候變遷的公共財政機制，回應不斷加劇的乾早、暴雨、野火、高溫、颱風等氣候災害。
          </ListItem>
          <ListItem>
            氣候法相關的修訂及地方自治條例的設立，持續進行倡議及施壓，特別是要求在全球也舉足輕重的臺灣製造業能夠減少碳排放，讓臺灣在淨零轉型上開闢出可供世界效仿的制度。
          </ListItem>
        </OrderedList>
      </Box>

      <Text as="p" {...paragraphProps}>
        能更進一步支持我們的行動嗎？你的捐款，將有助於推動這一切，請捐款資助我們做更有力的行動！
      </Text>
    </>
  );
};

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Thankyou);
