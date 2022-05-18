import React from 'react';
import { Box, Text, Stack, Flex, Image } from '@chakra-ui/react';

import { connect } from 'react-redux';

import icon_notes from './images/session2-notes.png';
import icon_notification from './images/session2-notification.png';
import icon_lunchbox from './images/session2-lunchbox.png';
import icon_house from './images/session2-house.png';

const FlowChart = () => {
  const Feature = ({ icon, subtitle, text }) => {
    return (
      <Flex align={'center'}>
        <Box bgColor={`gray.0`} p={4} borderRadius={'8px'}>
          <Image src={icon} maxW={'80px'} margin={'0 auto'} />
        </Box>
        <Box ml={4}>
          <Text as={'h3'} fontWeight={700} fontSize={'2xl'}>
            {subtitle}
          </Text>
          <Text
            as={'p'}
            fontSize={'md'}
            dangerouslySetInnerHTML={{ __html: text }}
          ></Text>
        </Box>
      </Flex>
    );
  };

  return (
    <Box>
      <Stack spacing={4} direction={'column'}>
        <Feature
          icon={icon_notes}
          subtitle="登記參加活動"
          text="填妥資料<br>參加環保工作坊"
        />

        <Feature
          icon={icon_notification}
          subtitle="報名環保工作坊"
          text="查閱電郵<br>填妥工作坊報名表格"
        />

        <Feature
          icon={icon_lunchbox}
          subtitle="準備好裸買裝備"
          text="自備不同裸買容器<br>如玻璃樽、食物盒、食物袋並預先妥善清潔"
        />

        <Feature
          icon={icon_house}
          subtitle="免費出席活動"
          text="參加在6月4-5日的「惜簡生活節」<br>多項精彩活動讓你體驗環保、走塑、裸買的好生活方式"
        />
      </Stack>
    </Box>
  );
};

const mapStateToProps = ({ theme }) => {
  return { theme: theme.data };
};

export default connect(mapStateToProps)(FlowChart);
