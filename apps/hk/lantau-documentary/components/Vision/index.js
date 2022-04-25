import React from 'react';
import Card from './Card';
import contentCard from '../../images/content_card.jpeg';

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
    <div>
      <div className="flex flex-col m-auto p-auto">
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
    </div>
  );
};

export default VisionGroup;
