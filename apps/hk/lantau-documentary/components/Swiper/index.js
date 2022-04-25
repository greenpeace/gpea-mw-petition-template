import React from 'react';
import Card from './Card';
import contentCard from '../../images/content_card.jpeg';

const CARDS = [
  {
    image: contentCard,
    name: '馮漢城',
    role:
      '本片編導。',
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
