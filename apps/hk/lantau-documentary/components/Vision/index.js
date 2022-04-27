import React from 'react';
import { Box } from '@chakra-ui/react';
import Card from './card';
import CardDesktop from './CardDesktop';
import contentCard from '../../images/content_card.jpeg';
import contentCardBackground from '../../images/content_card_background.jpeg';

const CARDS = [
  {
    image: contentCard,
    title: '守護大嶼生態',
    content:
      '大嶼山有中華白海豚、江豚、鵰等珍貴生物，可見東大嶼水域富有生態價值。我們以生態紀錄片將之傳揚，推動更多人守護大嶼。',
  },
  {
    image: contentCard,
    title: '守護大嶼生態 02',
    content:
      '大嶼山有中華白海豚、江豚、鵰等珍貴生物，可見東大嶼水域富有生態價值。我們以生態紀錄片將之傳揚，推動更多人守護大嶼。',
  },
  {
    image: contentCard,
    title: '守護大嶼生態 03',
    content:
      '大嶼山有中華白海豚、江豚、鵰等珍貴生物，可見東大嶼水域富有生態價值。我們以生態紀錄片將之傳揚，推動更多人守護大嶼。',
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
      <div className="container mx-auto py-[36px]">
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
