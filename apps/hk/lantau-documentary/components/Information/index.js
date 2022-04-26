import React from 'react';
import { Box } from '@chakra-ui/react';
import Card from './card'
import mobileHero from '../../images/mobile/hero.png';

const CATEGORIES = [{label: '河溪', value: '河溪'}, {label: '濕地', value: '濕地'}, {label: '潮間帶', value: '潮間帶'}, {label: '海洋', value: '海洋'}]

const CARDS = [
  {
    image: mobileHero,
    title: '中華白海豚',
    content:
      '中華白海豚在香港最重要的棲息地是大嶼山西面、西南面一帶水域。但在2020年，他們的數量較過去17 年下跌近八成。',
  },
  {
    image: mobileHero,
    title: '中華白海豚02',
    content:
      '中華白海豚在香港最重要的棲息地是大嶼山西面、西南面一帶水域。但在2020年，他們的數量較過去17 年下跌近八成。',
  },
];

function Information() {
  return (
    <Box>
      <div className="container mx-auto px-[30px]  py-[36px]">
        <h1 className="text-[24px] font-[700] leading-[36px] text-center pb-[12px]">
          細看大嶼
        </h1>

        <p className="text-[16px] font-[500] text-center pb-[26px]">
          一部紀錄片盡覽大嶼 20 種本地珍貴物種
        </p>

        <div>
          <div>
            <div className="flex flex-row rounded-[40px] p-2 border-2 shadow-md">
            
              {CATEGORIES.map(d=> <button key={d.value} className="flex-1">{d.label}</button>)}

            </div>

            <div className="py-[28px]">
              <div className="flex flex-col gap-8">
                {CARDS.map(d=><Card image={d.image} title={d.title} content={d.content} key={d.title} />)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
}

export default Information;
