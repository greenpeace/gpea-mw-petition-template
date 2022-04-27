import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import contentDonateBackground from '../../images/mobile/content_donate_background.jpeg';
import desktopContentDonateBackground from '../../images/content_donate_background.jpeg';

function Support() {
  return (
    <Box
      backgroundImage={desktopContentDonateBackground}
      backgroundSize={{base: 'cover', lg: 'contain'}}
      backgroundPosition={'center center'}
      pos={'relative'}
    >
      <div className="container mx-auto px-[30px] py-[36px] text-[#FFF] h-[515px] lg:h-[430px]">
        <div className="flex h-full items-center relative z-10 max-w-[840px] lg:text-center lg:mx-auto">
          <div>
            <h1 className="text-[24px] font-[700] leading-[36px] pb-[26px]">
              支持紀錄大嶼生態工作
            </h1>
            <p className="text-[16px] font-[500] leading-[24px] pb-[26px]">
              大嶼山蘊含珍貴生物多樣性，綠色和平一直進行各種守護大嶼項目工作，其中一項重要工作是紀錄大嶼，將自然美態呈現於大眾眼前，動員大家以行動支持守護我們的山海。
            </p>
            <p className="text-[16px] font-[500] leading-[24px] pb-[26px]">
              單次 $100
              捐款觀看紀錄片，為守護大嶼工作提供資源與力量，合力推動政府優先發展棕地，守護香港自然環境！
            </p>
            <Button
              color="white"
              bgColor={'orange.500'}
              _hover={{ bg: 'orange.300' }}
            >
              立即支持
            </Button>
          </div>
        </div>
      </div>
      <Box
        // bgGradient="linear(to-b, transparent 0%, transparent 50%, black 100%)"
        bg="rgba(0,0,0,0.3)"
        pos={'absolute'}
        top={0}
        bottom={0}
        zIndex={1}
        w="full"
      />
    </Box>
  );
}

export default Support;
