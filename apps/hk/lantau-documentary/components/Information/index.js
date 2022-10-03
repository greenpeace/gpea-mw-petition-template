import React, { useState } from 'react';
import { Box, Center } from '@chakra-ui/react';
import Card from './card';
import image01 from '../../images/information/tab1.jpeg';
import image02 from '../../images/information/tab2.jpeg';
import image03 from '../../images/information/tab3.jpeg';
import image04 from '../../images/information/tab4.jpeg';

import typea0 from '../../images/information/00.jpg';
// import typea1 from '../../images/information/typea1.png';
import typea2 from '../../images/information/typea2.jpg';
import typeb1 from '../../images/information/typeb1.jpg';
import typeb2 from '../../images/information/typeb2.jpg';
import typec1 from '../../images/information/typec1.jpg';
import typec2 from '../../images/information/typec2.jpg';
import typed1 from '../../images/information/typed1.jpg';
import typed2 from '../../images/information/typed2.jpg';

const CATEGORIES = [
	{ label: '河溪', value: '河溪', image: image02 },
	{ label: '濕地', value: '濕地', image: image01 },
	{ label: '潮間帶', value: '潮間帶', image: image03 },
	{ label: '海洋', value: '海洋', image: image04 }
];

const CARDS = [
	{
		image: typea0,
		title: '香港瘰螈',
		cate: '河溪',
		content:
			'香港瘰螈是兩棲類動物。在繁殖期間，牠們會溪流中積極找尋伴侶。成功受孕的瘰螈會在水中嘅石菖蒲葉片之間產卵'
	},
	{
		image: typea2,
		title: '廣東米蝦',
		cate: '河溪',
		content:
			'米蝦是溪流中嘅清潔隊伍，進食有機物與藻類。牠們會用有剛毛的細鉗，不斷尋找可食用的細碎有機物與藻類'
	},
	{
		image: typeb1,
		title: '水牛',
		cate: '濕地',
		content: '水牛在貝澳和水口的淡水濕地生活，平時會食草、打泥漿糊'
	},
	{
		image: typeb2,
		title: '長趾蛙',
		cate: '濕地',
		content: '長趾蛙背上有三條淡黃縱紋，身驅青褐色，會隱藏在草叢中'
	},
	{
		image: typec1,
		title: '翻石鷸',
		cate: '潮間帶',
		content:
			'翻石鷸遷徙途中會路徑香港。牠們會用鳥喙翻動石頭，尋找底下的蟹類為食'
	},
	{
		image: typec2,
		title: '馬蹄蟹',
		cate: '潮間帶',
		content: '馬蹄蟹是一種史前生物，在地球已存活了超過四億年，世代在潮間帶繁殖'
	},
	{
		image: typed1,
		title: '中華白海豚',
		cate: '海洋',
		content:
			'中華白海豚在香港最重要的棲息地是大嶼山西面、西南面一帶水域。但在2020年，牠們的數量較過去 17 年下跌近八成'
	},
	{
		image: typed2,
		title: '人為破壞',
		cate: '海洋',
		content: '大興土木、船隻超速航行等，均會破壞海洋生態，造成不可挽救的影響'
	}
];

function Information({ children }) {
	const [active, setActive] = useState('河溪');

	const menuStyle = {
		normal: 'flex-1 py-2',
		active: 'flex-1 py-2 bg-[#66cc00] font-bold text-[#FFF]'
	};

	return (
		<div className="container mx-auto px-[20px] py-[40px] lg:max-w-[1200px]">
			<div className="pb-[26px] md:pt-[80px] md:pb-[40px]">
				<h2 className="mb-2 text-center text-[24px] font-bold md:text-[28px]">
					細看大嶼
				</h2>
				<p className="md-[18px] text-center text-[16px]">
					一部紀錄片盡覽大嶼 20 種物種
				</p>
			</div>

			<div className="lg:hidden">
				<div className="flex flex-row bg-[#FFF]">
					{CATEGORIES.map((d) => (
						<button
							key={d.value}
							className={`rounded-full ${
								d.value === active ? menuStyle.active : menuStyle.normal
							}`}
							onClick={() => setActive(d.value)}
						>
							{d.label}
						</button>
					))}
				</div>

				<div className="py-[28px]">
					<div className="flex flex-col gap-8">
						{CARDS.filter((d) => d.cate === active).map((d) => (
							<Card
								image={d.image}
								title={d.title}
								content={d.content}
								key={d.title}
							/>
						))}
					</div>
				</div>
			</div>

			<div className="hidden lg:block">
				<div className="flex flex-row gap-[60px]">
					<div className="flex flex-col gap-[20px]">
						{CATEGORIES.map((d, i) => (
							<div
								className="relative h-[100px] w-[200px] overflow-hidden rounded-md"
								key={`${d.title}-${i}`}
							>
								<Box
									backgroundImage={d.image}
									backgroundPosition={'center'}
									backgroundRepeat="no-repeat"
									backgroundSize={'cover'}
									pos={'absolute'}
									top={0}
									bottom={0}
									h={'full'}
									w={'full'}
									cursor={'pointer'}
									onClick={() => setActive(d.value)}
								>
									<Center
										className={`backdrop-blur-sm ease-linear hover:backdrop-blur-none ${
											d.value == active
												? 'bg-black/0 backdrop-blur-none'
												: 'bg-black/30'
										}`}
										h={'full'}
										pos={'relative'}
										zIndex={2}
									>
										<p className="text-[20px] text-[#FFF] hover:font-bold">
											{d.label}
										</p>
									</Center>
								</Box>
							</div>
						))}
					</div>
					<div className="flex-1 pb-10">
						<div className="grid grid-cols-2 gap-8">
							{CARDS.filter((d) => d.cate === active).map((d, i) => (
								<div
									className="rounded-xl bg-[#FFF] shadow-lg"
									key={`${d.title}-${i}`}
								>
									<div className="relative h-[340px] overflow-hidden rounded-t-xl">
										<Box
											backgroundImage={d.image}
											backgroundPosition={'center center'}
											backgroundRepeat="no-repeat"
											backgroundSize={'cover'}
											pos={'absolute'}
											top={0}
											bottom={0}
											w={'full'}
											h={'full'}
										/>
									</div>
									<div className="rounded-b-[12px] bg-[#FFF] p-6">
										<p className="mb-2 text-[20px] leading-relaxed">
											{d.title}
										</p>
										<p
											className="mb-2 text-[16px] leading-relaxed"
											dangerouslySetInnerHTML={{ __html: d.content }}
										/>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Information;
