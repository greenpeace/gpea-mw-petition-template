import React from 'react';
import Team01 from '../../images/team01.png';
import Team02 from '../../images/team02.png';
import Team03 from '../../images/team03.png';
import Team04 from '../../images/team04.png';
import Team05 from '../../images/team05.png';
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
    <div className="grid grid-cols-3 gap-x-14 gap-y-6">
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
  );
}

export default AvatarGroup;
