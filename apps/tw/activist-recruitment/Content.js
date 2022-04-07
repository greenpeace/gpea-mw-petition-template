import React from 'react';
import { connect } from 'react-redux';
import {
  Heading,
  Image,
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
  captionProps,
} from '@common/styles/components/contentStyle';

import contentA from './images/content_css_pic1.jpg';
import contentB from './images/content_css_pic2.jpg';

const subHeadingProps = {
  lineHeight: 1.2,
  mb: 6,
  fontWeight: 'bold',
  fontSize: { base: '20px' },
};

const Content = ({ theme }) => {
  const themeInterests = theme.interests;
  console.log(themeInterests);
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        <Text as="span" color={`theme.${themeInterests}`}>
          只要你有滿滿愛地球的心、行動力
          <br />
          就能成為環境行動者
        </Text>
      </Heading>

      <Text as="p" {...paragraphProps}>
        非暴力行動，是環境倡議工作中，至關重要的一環。
        <br />
        而綠色和平自創辦以來，一直堅守著和平、非暴力的原則。
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentA} />
        <Text as="p" {...captionProps}>
          1971
          年，綠色和平開始第一場行動，阻止美國即將在安奇卡島周邊海底進行的核子試爆，雖未成功阻止這場試爆，卻吸引大量媒體報導，開始累積民間反核聲浪。
        </Text>
      </Box>

      <Text as="p" {...paragraphProps}>
        環境破壞日益嚴重，面對強權時，綠色和平透過和平、非暴力並具有創意性的直接行動，引起媒體及社會環境議題，進而達到環境倡議的目的。
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        <Text as="span" color={`theme.${themeInterests}`}>
          用專業技能，阻止環境破壞
          <br />
          用創意，讓社會重視環境問題
        </Text>
      </Heading>

      <Text as="p" {...paragraphProps}>
        環境議題需要更多人的關注，而綠色和平透過創意的直接行動，阻止破壞環境的行為、讓更多公眾關注特定環境議題，進一步帶來改變。
      </Text>

      <Box {...paragraphProps}>
        <Image src={contentB} />
      </Box>

      <Text as="p" {...paragraphProps}>
        我們曾在臺灣完成過這些任務：
      </Text>

      <Box {...paragraphProps}>
        <UnorderedList>
          <ListItem>
            打扮成白雪公主，因吃下殘留過多農藥的毒蘋果昏倒在超市，成功要求讓 6
            大超市承諾改善食品安全、設置履歷蔬菜櫃
          </ListItem>
          <ListItem>
            扮演櫥窗裡的人型模特兒，表達不願再穿著有毒有害物質殘留的服裝
          </ListItem>
          <ListItem>
            攀上造船廠並懸掛布條，揭露漁業署無視海洋資源枯竭危機，引起媒體與社會廣泛討論
          </ListItem>
          <ListItem>
            運用攀爬及駕駛小艇的技術進行吊掛行動，手持「撤回深澳」布條，以非暴力理性方式表達訴求，獲得廣大支持
          </ListItem>
          <ListItem>參與淨山與淨海活動</ListItem>
        </UnorderedList>
      </Box>

      <Text as="p" {...paragraphProps}>
        透過各式各樣的非暴力直接行動，達成揭露、企業及政府倡議、公眾溝通等目的，引起媒體及社會大眾注意環境問題，並成為守護環境重要的推進力。
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        <Text as="span" color={`theme.${themeInterests}`}>
          專業技能培訓 ， 提升倡議效果
          <br />
          並讓每次行動更加安全
        </Text>
      </Heading>

      <Text as="p" {...paragraphProps}>
        實際參與行動前，須先接受基礎行動培訓（Basic Action
        Training），培訓中認識綠色和平及其行動與非暴力原則，建立對綠色和平的信任與了解。
        <br />
        後續將有機會參與各項特殊技能訓練，以提升議題倡議之品質。
      </Text>

      <Text as="p" {...paragraphProps}>
        綠色和平各項行動中，我們將確保每位行動者遵守非暴力原則、維護所有之安全，使行動者們竭盡專業及特殊技能，以達到環境倡議之訴求。
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        <Text as="span" color={`theme.${themeInterests}`}>
          「非暴力直接行動力求創造危機和培養緊張，強迫那些不斷拒絕協商的團體面對問題。它讓問題變得戲劇化，好讓它不再被忽視。」－馬丁路德·金恩
        </Text>
      </Heading>

      <Text as="p" {...paragraphProps}>
        立即報名參與基礎行動培訓 ， 跨出成為環境行動者的第一步 ！
      </Text>

      <Text as="p" {...paragraphProps}>
        <b>
          *注意：綠色和平非暴力直接行動具一定程度之風險，行動者須為滿 20
          歲之法定成年人。
        </b>
      </Text>
    </>
  );
};

const mapStateToProps = ({ theme }) => {
  // theme.data.interests = 'climate';
  return { theme: theme.data };
};

export default connect(mapStateToProps)(Content);
