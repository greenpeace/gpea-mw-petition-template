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
      <Image src={icon} height={`1em`} display={'inline-block'} verticalAlign={'top'} mr={2} mt={1.5} />
      <strong>{props.children}</strong>
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
  fontWeight: 'bold',
  _hover:{
    bg: 'inherit'
  },
  _focus:{
    
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
            ????????????<br/>?????????????????????????????????
          </Text>
        </Heading>
        <Box mx={4} my={4}>
          <IconText icon={ iconGov } >
            ??????
          </IconText>
          <Text as="p" {...advParaProps}>
            ??????????????????????????? 3 ????????????????????????<b>?????????????????????????????????????????????</b>
          </Text>
          <Box display={'block'} borderBottom={`2px solid var(--brand)`} mb={4} />
          <Text as="p" {...advParaProps}>
            ????????????????????????<b>????????????????????????</b>???????????????????????????????????????????????????????????????
          </Text>
          <IconText icon={ iconIndustry } mt={8}>
            ??????
          </IconText>
          <Text as="p" {...advParaProps}>
            ?????? 5400 ???????????????????????????????????????????????????????????????????????????<b>???????????????????????????????????????????????????????????????</b>
          </Text>
          <Box display={'block'} borderBottom={`2px solid var(--brand)`} mb={4} />
          <Text as="p" {...advParaProps}>
            ??????????????????<b>??????????????????????????????</b>????????????????????????????????????????????????????????????
          </Text>
        </Box>
        
        <Box maxW={'258px'} mx={`auto`} mt={10}>
          <Heading {...advHeadingProps} lineHeight={1.3}>
            <Text as="span" color={`theme.general`}>?????????????????????????????????????????????????????????<br/>??????????????????????????????</Text>
          </Heading>
        </Box>
        
      </Box>

      <Box {...coloredBoxBPorps}>
        <Heading {...advHeadingProps} textAlign={`center`}>
          <Text as="span" color={`${baseTextColor}!important`}>
          ???????????????????????????
          </Text>
        </Heading>
        <Image src={contentA} my={6} />
        <Box mx={4} my={4}>
          <Text as="p" {...advParaProps}>
            ?????????????????????????????????????????????<strong style={{borderBottom: `1px solid ${baseTextColor}`}}>??????????????? 0.4 ???</strong>????????????????????????????????? 1.5 ???????????????
          </Text>
        </Box>
        <Image src={contentB} my={6} />
        <Box mx={4} my={4}>
          <Text as="p" {...advParaProps}>
          ????????????????????????????????? 2700 ???????????????????????????????????????????????????<strong style={{borderBottom: `1px solid ${baseTextColor}`}}>?????????????????? 58 ?????????</strong>
          </Text>
        </Box>
        <Image src={contentC} my={6} />
        <Box mx={4} my={4}>
          <Text as="p" {...advParaProps}>
          ???????????????????????????????????????????????????????????????????????????<strong style={{borderBottom: `1px solid ${baseTextColor}`}}>?????? 4500 ??????????????????????????????</strong>
          </Text>
        </Box>
      </Box>

      <Box {...coloredBoxCPorps}>
        <Heading {...advHeadingProps} textAlign={`center`}>
          <Text as="span" color={`${baseTextColor}!important`}>
          ?????????????????????<br/>??????????????????????????????
          </Text>
        </Heading>
        <Image src={contentD} my={6} />
        <Box mx={4} my={4}>
          <Text as="p" {...advParaProps}>
          ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          <br/>
          <strong>?????????????????????????????????????????????????????????????????????</strong>
          </Text>
        </Box>
        <IconText icon={ iconGov } my={6}>
        ????????????
        </IconText>
        {/* <Text textAlign={'center'} my={6}>
          <Text as="span" {...contentCTAProps} >????????????</Text>
        </Text> */}
        <Heading {...advHeadingProps} textAlign={`center`}>
          <Text as="span" color={`${baseTextColor}!important`}>
          ?????????????????????????????????
          </Text>
        </Heading>
        <Box mx={4} my={4}>
          <Text as="p" {...advParaProps}>
          ???????????????????????????????????????????????????<strong>??????????????????????????????????????????????????????????????????</strong>
          </Text>
        </Box>
        <Image src={contentE} my={6} />
        
        <Accordion allowToggle={true}>
          <AccordionItem {...advAccProps}>
            <AccordionButton {...advAccButtonProps}>
              ????????????????????????
            </AccordionButton>
            <AccordionPanel {...advAccPanelProps}>
              <Text as="p" {...advParaProps}>
                ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
              </Text>
            </AccordionPanel>
          </AccordionItem>  
        </Accordion>

        <Box mx={4} mt={4}>
          <Text as="p" {...advParaProps}>
          ???????????????????????????????????????????????????<strong>??????????????????????????????????????????????????????????????????</strong>
          </Text>
          <OrderedList {...advOl}>
            <ListItem {...advLi}><span>??????????????????<strong>????????????????????? 300 ???</strong></span></ListItem>
            <ListItem {...advLi}><span>??????<strong>??????????????????</strong>??????????????????????????????????????????</span></ListItem>
            <ListItem {...advLi}><span>?????????????????????<strong>????????????</strong>???????????????????????????</span></ListItem>
          </OrderedList>
        </Box>

      </Box>

      <Box {...coloredBoxDPorps}>
        <Heading {...advHeadingProps} textAlign={`center`} mb={0} fontSize={'20px'}>
          <Text as="span" color={`white`}>
          ?????????????????????????????????<br/>???????????????????????????????????????
          </Text>
        </Heading>
      </Box>

      <Box {...coloredBoxCPorps}>
        <IconText icon={ iconIndustry } mb={6}>
        ????????????
        </IconText>
        {/* <Text textAlign={'center'} mb={6}>
          <Text as="span" {...contentCTAProps} >????????????</Text>
        </Text> */}
        <Heading {...advHeadingProps} textAlign={`center`}>
          <Text as="span" color={`${baseTextColor}!important`}>
          ????????????????????????????????????
          </Text>
        </Heading>
        <Box mx={4} my={4}>
          <Text as="p" {...advParaProps}>
          ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????
          </Text>
        </Box>
       
        <Image src={contentF} my={6} />
        <Box mx={4} mt={4}>
          <Text as="p" {...advParaProps}>
          ???????????????????????????????????????????????????
          </Text>
          <OrderedList {...advOl}>
            <ListItem {...advLi}><span>??????????????????????????????????????????</span></ListItem>
            <ListItem {...advLi}><span>?????????????????? RE10x10 ??????????????????????????????????????? / ????????????</span></ListItem>
          </OrderedList>
        </Box>
        <Box borderBottom={`2px solid var(--brand)`} my={6} />

        <Image src={logo10x10} mb={6} mt={8} w={'150px'} mx={'auto'} />
        <Box mx={4} my={4}>
          <Text as="p" {...advParaProps}>
          ??????????????? RE10x10 ?????????????????????2020?????????<strong>?????? 60 ?????????????????????????????? 2030 ???????????? 3 ?????????</strong>
          </Text>
        </Box>
        <Image src={contentG} my={6} />
        
      </Box>
      <Box {...coloredBoxDPorps}>
        <Heading {...advHeadingProps} textAlign={`center`} mb={0} fontSize={'20px'}>
          <Text as="span" color={`white`}>
          ??????????????????????????????<br/>????????????!????????????????????????????????????
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
