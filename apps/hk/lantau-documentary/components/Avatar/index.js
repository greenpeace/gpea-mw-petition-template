import React from 'react';
import Team01 from '../../images/team01.svg';
import Team02 from '../../images/team02.svg';
import Team03 from '../../images/team03.svg';
import Team04 from '../../images/team04.svg';
import Team05 from '../../images/team05.svg';
import Item from './item';

const TEAMS = [
  { image: Team01, name: '馮漢城', role: '編輯', width: 85, height: 85 },
  { image: Team02, name: '黃遂心', role: '攝影師', width: 85, height: 85 },
  { image: Team03, name: '枼尚庭', role: '攝影師', width: 85, height: 85 },
  { image: Team04, name: '郭子祈', role: '攝影助手', width: 85, height: 85 },
  { image: Team05, name: '陳志雲', role: '旁白', width: 85, height: 85 },
];

function AvatarGroup() {
  return (
    <div className="container mx-auto px-[30px] md:px-0 py-[36px]">
      <h1 className="text-[20px] font-[700] leading-[36px] pb-[26px]">
        製作與配音團隊
      </h1>
      <div className="grid grid-cols-3 gap-x-8 gap-y-6 md:gap-2">
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
