import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import contentDonateBackground from '../../images/mobile/content_donate_background.jpeg';
import desktopContentDonateBackground from '../../images/content_donate_background.jpeg';

function Support() {
  return (
    <Box
      backgroundImage={desktopContentDonateBackground}
      backgroundSize={{ base: 'cover', lg: 'contain' }}
      backgroundPosition={'center center'}
      pos={'relative'}
    >
      <div className="container mx-auto px-[20px] py-[36px] text-[#FFF] h-[500px]">
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
              onClick={() =>
                router.push(`/?p=donation`, undefined, { shallow: true })
              }
            >
              捐款收看
            </Button>
          </div>
        </div>
      </div>
      <Box
        bg="rgba(0,0,0,0.4)"
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
