import React from 'react';
import { Box } from '@chakra-ui/react';
import Card from './Card';
import contentCard from '../../images/content_card.jpeg';

const CARDS = [
  {
    image: contentCard,
    name: '馮漢城',
    role: '本片編導。',
    content:
      '「我覺得野生物種好似活生生嘅藝術品，因為佢哋有不同顏色、羽毛、行為，會同你交流，呢個就係接觸生態的有趣之處。」',
  },
];

const VisionGroup = () => {
  return (
    <Box>
      <div className="container mx-auto pt-[36px] lg:pb-[60px]">
        <div className="pb-[26px] md:pt-[126px] md:pb-[60px]">
          <h1 className="text-[24px] font-[700] leading-[36px] text-center pb-[12px]">
            大嶼有我
          </h1>

          <p className="text-[16px] font-[500] text-center">
            以行動守護大嶼的「保衛者們」介紹
          </p>
        </div>

        <div className="pl-4 lg:pl-0">
          <div>
            <div className="flex flex-col m-auto p-auto">
              <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
                <div className="flex flex-nowrap">
                  {CARDS.map((d) => (
                    <Card
                      key={d.name}
                      name={d.name}
                      role={d.role}
                      content={d.content}
                      image={d.image}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default VisionGroup;
