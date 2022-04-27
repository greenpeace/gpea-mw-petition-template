import React, { useState } from 'react';
import { Box, Center, Button } from '@chakra-ui/react';
import Card from './card';
import mobileHero from '../../images/mobile/hero.png';
import joinBackground from '../../images/mobile/join_background.jpeg';
import joinBackgroundDesktop from '../../images/join_background.jpeg';

const CATEGORIES = [
  { label: '河溪', value: '河溪' },
  { label: '濕地', value: '濕地' },
  { label: '潮間帶', value: '潮間帶' },
  { label: '海洋', value: '海洋' },
];

const CARDS = [
  {
    image: mobileHero,
    title: '中華白海豚',
    cate: '河溪',
    content:
      '中華白海豚在香港最重要的棲息地是大嶼山西面、西南面一帶水域。但在2020年，他們的數量較過去17 年下跌近八成。',
  },
  {
    image: mobileHero,
    title: '中華白海豚02',
    cate: '濕地',
    content:
      '中華白海豚在香港最重要的棲息地是大嶼山西面、西南面一帶水域。但在2020年，他們的數量較過去17 年下跌近八成。',
  },
];

function Information() {
  const [active, setActive] = useState('河溪');

  const menuStyle = {
    normal: 'flex-1 py-2',
    active: 'flex-1 py-2 bg-[#000] text-[#FFF] rounded-[20px]',
  };

  return (
    <Box
      backgroundImage={{ base: joinBackground, lg: joinBackgroundDesktop }}
      backgroundPosition={'bottom center'}
      backgroundSize={{ base: '100%'}}
      backgroundRepeat={'no-repeat'}
      w={'full'}
    >
      <div className="container mx-auto px-[30px] py-[36px] lg:max-w-[1180px] lg:px-0">
        <h1 className="text-[24px] font-[700] leading-[36px] text-center pb-[26px] md:pt-[126px]">
          細看大嶼
        </h1>

        <p className="text-[16px] font-[500] text-center pb-[26px] md:pb-[60px]">
          一部紀錄片盡覽大嶼 20 種本地珍貴物種
        </p>

        <div className="lg:hidden">
          <div className="flex flex-row rounded-[40px] p-2 border-2 shadow-md bg-[#FFF]">
            {CATEGORIES.map((d) => (
              <button
                key={d.value}
                className={`${
                  d.value === active ? menuStyle.active : menuStyle.normal
                }`}
                onClick={() => setActive(d.value)}
              >
                {d.label}
              </button>
            ))}
          </div>

          <div className="py-[28px]">
            <div className="flex flex-col gap-8">
              {CARDS.filter((d) => d.cate === active).map((d) => (
                <Card
                  image={d.image}
                  title={d.title}
                  content={d.content}
                  key={d.title}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="flex flex-row gap-[60px]">
            <div className="">
              <div className="flex flex-col gap-[36px]">
                {CATEGORIES.map((d) => (
                  <div
                    className="relative w-[200px] h-[80px] rounded-[20px] overflow-hidden"
                    key={d.key}
                  >
                    <Box
                      backgroundImage={mobileHero}
                      backgroundPosition={'top center'}
                      backgroundRepeat="no-repeat"
                      backgroundSize={'100%'}
                      pos={'absolute'}
                      top={0}
                      bottom={0}
                      w={'full'}
                    >
                      <Center h={'full'}>
                        <h2 className="text-[22px] text-[#FFF] font-[500] ">
                          {d.label}
                        </h2>
                      </Center>
                    </Box>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1 pb-10">
              <div class="grid grid-cols-2 gap-8">
                <div className="bg-[#FFF] shadow-lg rounded-xl">
                  <div className="relative overflow-hidden h-[310px] rounded-t-xl">
                    <Box
                      backgroundImage={mobileHero}
                      backgroundPosition={'top center'}
                      backgroundRepeat="no-repeat"
                      backgroundSize={'100%'}
                      pos={'absolute'}
                      top={0}
                      bottom={0}
                      w={'full'}
                    />
                  </div>
                  <div className="bg-[#FFF] rounded-b-xl">
                    <div className="p-6">
                      <h2 className="text-[20px] font-[500] pb-2">長趾蛙</h2>
                      <p className="text-[16px] font-[400]">
                        長趾蛙背上有三條淡黃縱紋，身驅青褐色，會隱藏在草叢中。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#FFF] shadow-lg rounded-xl">
                  <div className="relative overflow-hidden h-[310px] rounded-t-xl">
                    <Box
                      backgroundImage={mobileHero}
                      backgroundPosition={'top center'}
                      backgroundRepeat="no-repeat"
                      backgroundSize={'100%'}
                      pos={'absolute'}
                      top={0}
                      bottom={0}
                      w={'full'}
                    />
                  </div>
                  <div className="bg-[#FFF] rounded-b-xl">
                    <div className="p-6">
                      <h2 className="text-[20px] font-[500] pb-2">長趾蛙</h2>
                      <p className="text-[16px] font-[400]">
                        長趾蛙背上有三條淡黃縱紋，身驅青褐色，會隱藏在草叢中。
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#FFF] shadow-lg rounded-xl">
                  <div className="relative overflow-hidden h-[310px] rounded-t-xl">
                    <Box
                      backgroundImage={mobileHero}
                      backgroundPosition={'top center'}
                      backgroundRepeat="no-repeat"
                      backgroundSize={'100%'}
                      pos={'absolute'}
                      top={0}
                      bottom={0}
                      w={'full'}
                    />
                  </div>
                  <div className="bg-[#FFF] rounded-b-xl">
                    <div className="p-6">
                      <h2 className="text-[20px] font-[500] pb-2">長趾蛙</h2>
                      <p className="text-[16px] font-[400]">
                        長趾蛙背上有三條淡黃縱紋，身驅青褐色，會隱藏在草叢中。
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container max-w-[1180px] mx-auto px-[30px] py-[36px] min-h-[480px] lg:min-h-[600px]">
                  <div className="lg:ml-[60%]">
                  <h1 className="text-[24px] font-[700] leading-[36px] pb-[26px]">
          參與聯署
        </h1>
        <p className="text-[16px] font-[500] leading-[24px] pb-[26px]">
          你的聯署將有助推動政府撤回「明日大嶼」填海計劃，守護本地珍貴海洋生態，善用現存土地資源。
        </p>
        <Button
          color="white"
          bgColor={'orange.500'}
          _hover={{ bg: 'orange.300' }}
        >
          立即聯署
        </Button>
                  </div>
      </div>
    </Box>
  );
}

export default Information;
