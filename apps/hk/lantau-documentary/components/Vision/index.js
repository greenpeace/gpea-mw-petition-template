import React from 'react';
import { Box } from '@chakra-ui/react';
import Card from './card';
import CardDesktop from './CardDesktop';

import image01 from '../../images/vision/01.jpeg';
import image02 from '../../images/vision/02.jpeg';
import image03 from '../../images/vision/03.jpg';
import contentCardBackground from '../../images/hd/ValueBg2X.jpg';
import transitionBG from '../../images/hd/ValueBg2X.jpg';

const CARDS = [
	{
		image: image01,
		title: '守護大嶼生態',
		content:
			'大嶼山有中華白海豚、江豚、鵰鴞、水牛等生物，生態價值豐富。綠色和平冀透過紀錄片讓更多人認識大嶼之美，一起守護珍貴生態。'
	},
	{
		image: image02,
		title: '紀錄大嶼風景',
		content:
			'大嶼山擁有旖旎風光與豐富人文風情，我們多方面紀錄大嶼的各種美好風景，盼能代代傳承。'
	},
	{
		image: image03,
		title: '要求撤回「明日大嶼」填海計劃',
		content:
			'美好風光正受「明日大嶼」所威脅，工程亦恐5年內挖空庫房，我們促請當局懸崖勒馬，優先發展棕地。'
	}
];

const VisionGroup = () => {
	return (
		<Box
			backgroundImage={transitionBG}
			backgroundPosition={'bottom center'}
			backgroundRepeat="no-repeat"
			backgroundSize={'100%'}
		>
			<div className="container mx-auto pt-[60px] pb-[160px] md:pb-[220px] md:pt-[120px] lg:pt-[160px]">
				<h2 className="pb-[30px] text-center text-[24px] font-bold md:pt-[80px] md:pb-[60px] md:text-[28px]">
					我們的理念
				</h2>

				<div className="lg:hidden">
					<div className="hide-scroll-bar flex overflow-x-scroll px-6 pb-10">
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

				<div className="mx-auto hidden lg:block lg:max-w-[1380px]">
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
