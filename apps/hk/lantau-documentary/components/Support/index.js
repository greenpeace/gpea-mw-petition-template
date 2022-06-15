import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import contentDonateBackground from '../../images/mobile/content_donate_background.jpeg';
import desktopContentDonateBackground from '../../images/content_donate_background.jpeg';

function Support() {
  const router = useRouter();
  return (
    <Box
      backgroundImage={desktopContentDonateBackground}
      backgroundSize={{ base: 'cover', lg: 'contain' }}
      backgroundPosition={'center center'}
      pos={'relative'}
    >
      <div className="container mx-auto text-[#FFF] h-[500px]">
        <div className="flex h-full items-center relative z-10 max-w-[680px] lg:text-center lg:mx-auto">
          <div className="p-6 flex flex-col gap-4 items-center">
            <h2 className="text-[24px] md:text-[28px] font-bold text-center mb-2">
              支持紀錄大嶼生態工作
            </h2>
            <p className="text-[16px]">
              大嶼山蘊含珍貴生物多樣性，綠色和平一直進行各種守護大嶼項目工作，其中一項重要工作是紀錄大嶼，將自然美態呈現於大眾眼前，動員大家以行動支持守護我們的山海。
            </p>
            <p className="text-[16px]">
              單次 $100
              捐款觀看紀錄片，為守護大嶼工作提供資源與力量，合力推動政府優先發展棕地，守護香港自然環境！
            </p>
            <Button
              mt="4"
              color="white"
              bgColor={'orange.500'}
              _hover={{ bg: 'orange.300' }}
              onClick={() => {
                router.push(
                  `/?p=donation`,
                  `${window.location.href.split('?')[0]}/?p=donation`,
                  {
                    shallow: true,
                  },
                );
              }}
            >
              立即支持
            </Button>
          </div>
        </div>
      </div>
      <Box
        bg="rgba(0,0,0,0.35)"
        pos={'absolute'}
        top={0}
        bottom={0}
        zIndex={1}
        w="100%"
        h="100%"
      />
    </Box>
  );
}

export default Support;
