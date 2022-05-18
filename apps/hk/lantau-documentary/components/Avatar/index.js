import React from 'react';
import Team01 from '../../images/team01.png';
import Team02 from '../../images/team02.png';
import Team03 from '../../images/team03.png';
import Team04 from '../../images/team04.png';
import Team05 from '../../images/team05.png';
import Item from './item';

const TEAMS = [
  { image: Team01, name: '馮漢城', role: '編輯', width: 120, height: 120 },
  { image: Team02, name: '黃遂心', role: '攝影師', width: 120, height: 120 },
  { image: Team03, name: '葉尚庭', role: '攝影師', width: 120, height: 120 },
  { image: Team04, name: '郭子祈', role: '攝影助手', width: 120, height: 120 },
  { image: Team05, name: '陳志雲', role: '旁白', width: 120, height: 120 },
];

function AvatarGroup() {
  return (
    <div className="container mx-auto px-[20px] md:px-0 py-[36px]">
      <h2 className="text-[24px] md:text-[28px] font-[700] text-center md:text-left pt-[20px] pb-[40px]">
        製作與配音團隊
      </h2>
      <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:gap-2">
        {TEAMS.map((d) => (
          <Item
            image={d.image}
            name={d.name}
            role={d.role}
            width={d.width}
            height={d.height}
            key={d.name}
          />
        ))}
      </div>
    </div>
  );
}

export default AvatarGroup;
