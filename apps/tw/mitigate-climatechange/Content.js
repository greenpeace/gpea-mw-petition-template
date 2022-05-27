import React from 'react';
import { connect } from 'react-redux';
import { Box, Heading, Text, Image, Icon, others, Accordion, AccordionItem, AccordionButton, Center, AccordionPanel, OrderedList, ListItem } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import contentA from './images/content-a.jpg';
import contentB from './images/content-b.jpg';
import contentC from './images/content-c.jpg';
import contentD from './images/content-d.jpg';
import contentE from './images/content-e.jpg';
import contentF from './images/content-f.jpg';
import contentG from './images/content-g.jpg';
import logo10x10 from './images/logo-10x10.png';
import iconGov from './images/icon-gov.png';
import iconIndustry from './images/icon-industry.png';


const themeInterests = 'climate'//theme.interests;

const subHeadingProps = {
  lineHeight: (40/30),
  letterSpacing: '.075em',
  mb: 6,
  fontWeight: 'bold',
  fontSize: { base: '20px' },
};

const advHeadingProps = {
  //...headingProps,
  letterSpacing: '.075em',
  fontSize: '24px',
  fontWeight: 'bold',
  lineHeight: 1.3,
  mb: 4
}

const baseTextColor = '#3f3f3f';
const coloredBoxAPorps = {
  backgroundColor: '#eee',
  color: baseTextColor,
  ml: -4,
  mr: -4,
  px: [6,8],
  py: 8
}

const coloredBoxBPorps = {
  ...coloredBoxAPorps,
  backgroundColor: '#FFEEBC'
}

const coloredBoxCPorps = {
  ...coloredBoxAPorps,
  backgroundColor: '#FFF'
}

const coloredBoxDPorps = {
  ...coloredBoxAPorps,
  backgroundColor: '#292F47'
}

const advParaProps = {
  ...paragraphProps,
  lineHeight: 1.5,
  mb: 4,
  fontWeight: 500
}

const contentCTAProps = {
  ...advHeadingProps,
  fontSize: "20px",
  display: 'inline-block',
  py: 2,
  px: 6,
  my: 0,
  color: 'white',
  bg: `theme.${themeInterests}`,
}

const IconText = ( props ) => {
  const { icon, ...other } = props;
  const style = {
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    lineHeight: 1.5
  }
  return (
    <Text as="p" {...props} {...advHeadingProps} {...style} >
      <Image src={icon} width={`1em`} display={'inline-block'} verticalAlign={'top'} mr={2} mt={1.5} />
      <strong style={{
        borderBottom: `4px solid ${baseTextColor}`
      }} >{props.children}</strong>
    </Text>
  )
}

const advAccProps = {
  py: 0,
  borderTop: `3px solid ${baseTextColor}`,
  // borderBottom: `2px solid ${baseTextColor}`,
  textAlign: 'center',
  _last: {
    borderBottom: `3px solid ${baseTextColor}`,
  }
}
const advAccButtonProps = {
  w: '100%',
  py: 4,
  color: 'brand.500',
  textAlign: 'center',
  justifyContent: 'center',
  _hover:{
    bg: 'inherit'
  }
}
const advAccPanelProps = {
  py: 0
}

const advOl = {
  styleType: 'none',
  margin: 0,
  sx: {
    'counter-reset': 'olcounter'
  }
}

const advLi = {
  ...advParaProps,
  mb: 0,
  display: 'flex',
  sx: {
    'counter-increment': 'olcounter',
  },
  _before: {
    display: 'block',
    content: `"0"counter(olcounter)`,
    fontWeight: 'bold',
    flex: '0 0 2em',
    w: '2em',
    mr: '.5em',
    borderRight: `2px solid ${baseTextColor}`
  }
}

const Content = ({ theme }) => {
  
  //console.log(themeInterests);
  
  return (
    <>
      <Box {...coloredBoxAPorps} >
        <Heading {...advHeadingProps} textAlign={`center`}>
          <Text as="span" color={`${baseTextColor}!important`}>
            您的連署<br/>能改變消極的政府與敦促被動的企業
          </Text>
        </Heading>
        <Box mx={4} my={4}>
          <IconText icon={ iconGov } >
            政府
          </IconText>
          <Text as="p" {...advParaProps}>
            臺灣氣候法修法一拖 3 年，修法草案中，<b>碳費起徵價格更遠低於國際水準。</b>
          </Text>
          <Box display={'block'} borderBottom={`2px solid var(--brand)`} mb={4} />
          <Text as="p" {...advParaProps}>
            綠色和平要求政府<b>提高碳費起徵價格</b>，確保政策真正發揮減碳效益、解決氣候問題。
          </Text>
          <IconText icon={ iconIndustry } mt={8}>
            企業
          </IconText>
          <Text as="p" {...advParaProps}>
            臺灣 5400 家企業就用掉一半以上電力，產生大量碳排放，由此可見<b>「企業」是亟需進行綠能轉型的「減碳主力」。</b>
          </Text>
          <Box display={'block'} borderBottom={`2px solid var(--brand)`} mb={4} />
          <Text as="p" {...advParaProps}>
            綠色和平要求<b>企業承諾綠能轉型目標</b>，輔導企業採購／建置綠電並定期追蹤進度。
          </Text>
        </Box>
        
        <Box maxW={'258px'} mx={`auto`} mt={10}>
          <Heading {...advHeadingProps} lineHeight={1.3}>
          您的連署支持能對政府與企業形成更大壓力<br/>進一步改寫氣候未來！
          </Heading>
        </Box>
        
      </Box>

      <Box {...coloredBoxBPorps}>
        <Heading {...advHeadingProps} textAlign={`center`}>
          <Text as="span" color={`${baseTextColor}!important`}>
          氣候未來已岌岌可危
          </Text>
        </Heading>
        <Image src={contentA} my={6} />
        <Box mx={4} my={4}>
          <Text as="p" {...advParaProps}>
            由於全球減碳行動緩慢，地表均溫<strong style={{borderBottom: `1px solid ${baseTextColor}`}}>只要再上升 0.4 度</strong>，就會超過科學家建議的 1.5 度臨界點！
          </Text>
        </Box>
        <Image src={contentB} my={6} />
        <Box mx={4} my={4}>
          <Text as="p" {...advParaProps}>
          暖化使全球冰川每年消失 2700 億噸，倘若南極洲冰層全部融化將導致<strong style={{borderBottom: `1px solid ${baseTextColor}`}}>海平面上升近 58 公尺！</strong>
          </Text>
        </Box>
        <Image src={contentC} my={6} />
        <Box mx={4} my={4}>
          <Text as="p" {...advParaProps}>
          失序的氣候系統釀成乾旱、洪災嚴重衝擊全球糧食生產，<strong style={{borderBottom: `1px solid ${baseTextColor}`}}>超過 4500 萬人將面臨嚴重飢荒！</strong>
          </Text>
        </Box>
      </Box>

      <Box {...coloredBoxCPorps}>
        <Heading {...advHeadingProps} textAlign={`center`}>
          <Text as="span" color={`${baseTextColor}!important`}>
          您願意加入我們<br/>攜手改寫氣候未來嗎？
          </Text>
        </Heading>
        <Image src={contentD} my={6} />
        <Box mx={4} my={4}>
          <Text as="p" {...advParaProps}>
          綠色和平氣候專案小組長期以專業科學調查、媒體傳播、政治遊說與倡議、非暴力行動等方式，監督政府、敦促企業採取全面減碳行動，促進社會改變。
          <br/>
          <strong>目前，我們正在進行以下專案，需要您的連署支持。</strong>
          </Text>
        </Box>
        <Text textAlign={'center'} my={6}>
          <Text as="span" {...contentCTAProps} >改變政策</Text>
        </Text>
        <Heading {...advHeadingProps} textAlign={`center`}>
          <Text as="span" color={`${baseTextColor}!important`}>
          要求政府制定有效碳定價
          </Text>
        </Heading>
        <Box mx={4} my={4}>
          <Text as="p" {...advParaProps}>
          碳定價是國際重要的減碳政策工具，但<strong>臺灣政府擬收的碳費價格卻遠遠落後於國際水準。</strong>
          </Text>
        </Box>
        <Image src={contentE} my={6} />
        
        <Accordion allowToggle={true}>
          <AccordionItem {...advAccProps}>
            <AccordionButton {...advAccButtonProps}>
              ＋什麼是碳定價？
            </AccordionButton>
            <AccordionPanel {...advAccPanelProps}>
              <Text as="p" {...advParaProps}>
                碳定價即是為碳排放訂一個價格，使企業必須負擔排碳所造成的環境成本，進而造成企業的減碳壓力，如訂定價格過低，企業缺乏減碳的經濟誘因，容易「付錢了事」，無法發揮減碳效益。
              </Text>
            </AccordionPanel>
          </AccordionItem>  
        </Accordion>

        <Box mx={4} mt={4}>
          <Text as="p" {...advParaProps}>
          碳定價是國際重要的減碳政策工具，但<strong>臺灣政府擬收的碳費價格卻遠遠落後於國際水準。</strong>
          </Text>
          <OrderedList {...advOl}>
            <ListItem {...advLi}><span>明確規定碳費<strong>下限不低於每噸 300 元</strong></span></ListItem>
            <ListItem {...advLi}><span>設定<strong>逐年調升規則</strong>，使臺灣碳費早日符合國際水準</span></ListItem>
            <ListItem {...advLi}><span>設計具公信力的<strong>監管機制</strong>，防止減碳進度落後</span></ListItem>
          </OrderedList>
        </Box>

      </Box>

      <Box {...coloredBoxDPorps}>
        <Heading {...advHeadingProps} textAlign={`center`} mb={0} fontSize={'20px'}>
          <Text as="span" color={`white`}>
          民意，是政府最大的壓力<br/>連署改變政策、改寫氣候未來
          </Text>
        </Heading>
      </Box>

      <Box {...coloredBoxCPorps}>
        <Text textAlign={'center'} mb={6}>
          <Text as="span" {...contentCTAProps} >改變企業</Text>
        </Text>
        <Heading {...advHeadingProps} textAlign={`center`}>
          <Text as="span" color={`${baseTextColor}!important`}>
          要求碳排大戶展開綠能轉型
          </Text>
        </Heading>
        <Box mx={4} my={4}>
          <Text as="p" {...advParaProps}>
          「企業」是真正需要展開綠能轉型的「減碳主力」，只要企業改變，就能為減緩氣候變遷、減少空氣污染付出貢獻。
          </Text>
        </Box>
       
        <Image src={contentF} my={6} />
        <Box mx={4} mt={4}>
          <Text as="p" {...advParaProps}>
          綠色和平正大力遊說地方政府與企業：
          </Text>
          <OrderedList {...advOl}>
            <ListItem {...advLi}><span>制定自治條例嚴管轄區碳排大戶</span></ListItem>
            <ListItem {...advLi}><span>鼓勵企業加入 RE10x10 企業綠電倡議，輔導企業採購 / 建置綠電</span></ListItem>
          </OrderedList>
        </Box>
        <Box borderBottom={`2px solid var(--brand)`} my={6} />

        <Image src={logo10x10} mb={6} mt={8} w={'150px'} mx={'auto'} />
        <Box mx={4} my={4}>
          <Text as="p" {...advParaProps}>
          「綠色和平 RE10x10 企業綠電倡議，2020年迄今<strong>已有 60 家以上企業響應，預計 2030 年可減碳 3 萬噸。</strong>
          </Text>
        </Box>
        <Image src={contentG} my={6} />
        
      </Box>
      <Box {...coloredBoxDPorps}>
        <Heading {...advHeadingProps} textAlign={`center`} mb={0} fontSize={'20px'}>
          <Text as="span" color={`white`}>
          消費者，決定企業去留<br/>立即連署!鼓勵企業一起改寫氣候未來
          </Text>
        </Heading>
      </Box>
      


      

    </>
  );
};

const mapStateToProps = ({ theme }) => {
  // theme.data.interests = 'climate';
  return { theme: theme.data };
};

export default connect(mapStateToProps)(Content);
