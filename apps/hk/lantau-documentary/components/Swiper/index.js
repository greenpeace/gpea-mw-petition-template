import React from 'react';
import Card from './Card';
import contentCard from '../../images/content_card.jpeg';

const CARDS = [
  {
    image: contentCard,
    name: '馮漢城',
    role: '本片編導。',
    content: '「我覺得野生物種好似活生生嘅藝術品，因為佢哋有不同顏色、羽毛、行為，會同你交流，呢個就係接觸生態的有趣之處。」'
  }
];

const VisionGroup = () => {
  return (
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
  );
};

export default VisionGroup;
