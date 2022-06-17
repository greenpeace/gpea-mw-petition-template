import React from 'react';
import { connect } from 'react-redux';
import { Box, Image, Heading, Text, Center, Divider } from '@chakra-ui/react';
import {
  headingProps,
  paragraphProps,
} from '@common/styles/components/contentStyle';

import Step01 from '../../images/donate/step01.svg';
import Step02 from '../../images/donate/step02.svg';
import Step03 from '../../images/donate/step03.svg';
import Step04 from '../../images/donate/step04.svg';

import Image01 from '../../images/donate/2.jpeg';

const Thankyou = ({ theme, signup }) => {
  const themeInterests = theme.interests;
  return (
    <>
      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        感謝您登記收看紀錄片，紀錄片收看連結與密碼將於3分鐘內以電郵寄送給您。
      </Heading>

      <Box {...paragraphProps}>
        <div className="flex flex-col py-6">
          {STEPS.map((d, i) => (
            <div key={`${d.content}-${i}`} className="flex flex-row">
              <div>
                <div className="flex flex-row items-center">
                  <div className="mx-[10px] rounded-[50%] border-[#000] border-solid border-[1px] w-[70px] h-[70px]">
                    <Center h={'100%'}>
                      <Image src={d.icon} alt={''} />
                    </Center>
                  </div>
                  <p className="flex-1">{d.content}</p>
                </div>
                {i + 1 !== STEPS.length && (
                  <div className="w-[70px] mx-[10px]">
                    <Center w={'100%'}>
                      <Divider
                        orientation="vertical"
                        borderColor="#000"
                        h={'50px'}
                      />
                    </Center>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Box>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        您願意進一步守護香港自然環境嗎？
      </Heading>

      <Text as="p" {...paragraphProps}>
        <b>每月捐款支持，攜手守護大嶼。</b>
      </Text>

      <Text as="p" {...paragraphProps}>
        您的每月捐款將直接資助綠色和平繼續以紮實研究，揭露真相，推動政府善用棕地，直接幫助守護大嶼與自然環境的目標！
      </Text>

      <Text as="p" {...paragraphProps}>
        東大嶼水域具有白腹海鵰、鮑氏雙足蜥、海筆等珍稀物種，距離填海範圍最近僅約十多公里，正是全港唯一綠海龜的產卵地—南丫島深灣，在如此敏感的生態區域大興土木，必然破壞珍貴的海洋生態，野生動物亦恐從此絕跡。
      </Text>

      <Text as="p" {...paragraphProps}>
        有您的每月捐助支持，綠色和平便能有更多資源與力量執行守護大嶼工作，推動政府優先發展棕地，守護香港自然環境。
      </Text>

      <Text as="p" {...paragraphProps}>
        <b>向香港自然環境伸出援手，捐助綠色和平守護大嶼工作。</b>
      </Text>

      <Heading {...headingProps} color={`theme.${themeInterests}`}>
        堅持發聲 行動帶來改變
      </Heading>

      <Text as="p" {...paragraphProps}>
        現以每月$200捐款支持堅守大嶼工作，即可獲得一面「堅守大嶼」旗幟及2次「環保手作工作坊」的機會。
      </Text>

      <Box {...paragraphProps}>
        <Image src={Image01} w={'full'} />
      </Box>
    </>
  );
};

const STEPS = [
  {
    content: '幾分鐘內，您會收到確認電郵與短訊',
    icon: Step02,
  },
  {
    content: '點開電郵或短訊中的收看連結，並輸入您的收看密碼',
    icon: Step03,
  },
  {
    content: '準備好欣賞紀錄片吧！',
    icon: Step04,
  },
];

const mapStateToProps = ({ status, theme, signup }) => {
  return { status, theme: theme.data, signup: signup.data };
};

export default connect(mapStateToProps)(Thankyou);
