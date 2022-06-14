import React from 'react';
import { Box } from '@chakra-ui/react';
import Card from './card';
import CardDesktop from './CardDesktop';

import image01 from '../../images/vision/01.jpeg';
import image02 from '../../images/vision/02.jpeg';
import image03 from '../../images/vision/03.jpg';
import contentCardBackground from '../../images/hd/ValueBg2X.jpg';
import transitionBG from '../../images/hd/ValueBg2X.jpg';

const CARDS = [
  {
    image: image01,
    title: '守護大嶼生態',
    content:
      '大嶼山有中華白海豚、江豚、鵰鴞、水牛等生物，可見其富有生態價值。我們以生態紀錄片將之傳揚，推動更多人堅守大嶼。',
  },
  {
    image: image02,
    title: '紀錄大嶼風景',
    content:
      '大嶼山擁有旖旎風光與豐富人文風情，故此綠色和平與本地得獎生態攝影團隊合作，多方面紀錄大嶼的各種美好風景，使香港人世代都能觀看。',
  },
  {
    image: image03,
    title: '要求撤回「明日大嶼」填海計劃',
    content:
      '「明日大嶼」不單嚴重破壞珍貴的生態環境，亦恐9年內挖空庫房，令港人付上沉重代價。',
  },
];

const VisionGroup = () => {
  return (
    <Box
      backgroundImage={transitionBG}
      backgroundPosition={'bottom center'}
      backgroundRepeat="no-repeat"
      backgroundSize={'100%'}
    >
      <div className="container mx-auto pt-[60px] pb-[160px] md:pb-[220px] md:pt-[120px] lg:pt-[160px]">
        <h2 className="text-[24px] md:text-[28px] font-bold text-center md:pt-[80px] pb-[30px] md:pb-[60px]">
          我們的理念
        </h2>

        <div className="lg:hidden">
          <div className="flex overflow-x-scroll px-6 pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap">
              {CARDS.map((d) => (
                <Card
                  key={d.title}
                  title={d.title}
                  content={d.content}
                  image={d.image}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hidden mx-auto lg:block lg:max-w-[1380px]">
          <div className="flex flex-row">
            {CARDS.map((d) => (
              <CardDesktop
                key={d.title}
                title={d.title}
                content={d.content}
                image={d.image}
              />
            ))}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default VisionGroup;
