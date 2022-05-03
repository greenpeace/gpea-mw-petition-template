import React from 'react';
import { Box } from '@chakra-ui/react';
import Card from './card';
import CardDesktop from './CardDesktop';
import contentCard from '../../images/content_card.jpeg';
import image01 from '../../images/vision/01.jpeg';
import image02 from '../../images/vision/02.jpeg';
import image03 from '../../images/vision/03.jpeg';
import contentCardBackground from '../../images/content_card_background.jpeg';

const CARDS = [
  {
    image: image01,
    title: '守護大嶼生態',
    content:
      '大嶼山有中華白海豚、江豚、鵰鴞、水牛等生物，可見其富有生態價值。我們以生態紀錄片將之傳揚，推動更多人堅守大嶼',
  },
  {
    image: image02,
    title: '紀錄大嶼風景',
    content: '大嶼山擁有旖旎風光與豐富人文風情，故此綠色和平與本地得獎生態攝影團隊合作，多方面紀錄大嶼的各種美好風景，使香港人世代都能觀看',
  },
  {
    image: image03,
    title: '要求撤回「明日大嶼」填海計劃',
    content:'「明日大嶼」是香港史上最龐大的填海工程，不單嚴重破壞珍貴的生態環境，亦恐9年內挖空庫房，危害財政穩健，故綠色和平致力堅守大嶼，從深入調查、發表報告等證明香港無須人工島，並已有地建屋，要求撤回「明日大嶼」',
  },
];

const VisionGroup = () => {
  return (
    <Box
      backgroundImage={contentCardBackground}
      backgroundPosition={'bottom center'}
      backgroundRepeat="no-repeat"
      backgroundSize={'100%'}
      minH={{ md: '850px' }}
    >
      <div className="container mx-auto py-[36px] md:pt-0">
        <h1 className="text-[24px] font-[700] leading-[36px] text-center pb-[26px] md:pt-[126px] md:pb-[60px]">
          我們的理念
        </h1>

        <div className="pl-4 lg:hidden">
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
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
