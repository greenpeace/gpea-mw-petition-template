import { Box, Text, Stack, Heading, Image } from '@chakra-ui/react';
import {
	headingProps,
	paragraphProps
} from '@common/styles/components/contentStyle';

import STEPS_LAPTOP from '../../images/202204_EarthDayPush_R3-活動流程_laptop.png';
import STEPS_MOBILE from '../../images/202204_EarthDayPush_R3-活動流程_mobile.png';

const Content = () => {
	return (
		<Box>
			<Heading as="h1" {...headingProps} color={'theme.climate'}>
				計劃描述
			</Heading>
			<Text as="p" {...paragraphProps}>
				推動環境工作，非一人能成就的事。今年世界地球日的主題是「
				<b>投資我們的星球</b>」，讓我們一起承諾愛護環境的同時，再
				<b>投資在地球</b>
				上，這是對人類未來最好的保障。身處香港，我們都可以出一分力，讓我們一起為地球作出小小的承諾，今天踏出第一步，減緩氣候危機！
			</Text>
			<Text as="p" {...paragraphProps}>
				<b>「惜碳承諾」</b>希望令我們每一位化身成為
				<b>「減碳達人」</b>
				，明白即使在香港這個彈丸之地，集眾人之力仍能為地球作出大大改變！讓我們檢視在日常生活中的碳足跡，珍惜寶貴的地球資源，為地球作出減碳承諾，遏止日益嚴重的環境問題。
			</Text>
			<Heading as="h1" {...headingProps} color={'theme.climate'}>
				請立即加入「惜碳承諾」行列:
			</Heading>
			<Text as="p" {...paragraphProps}>
				從今天承諾自己，在未來一星期，為地球作出減碳新嘗試！我們希望在 5
				月份招募 1000 位<b>「減碳達人」</b>
				，為地球減碳！若你能夠完成一星期承諾挑戰，更可以獲得一張電子
				<b>「惜碳證書」</b>，以表揚你的努力！
			</Text>
			<Text as="p" {...paragraphProps}>
				除承諾外，你更可分享一句減碳心得，與其他「減碳達人」互相支持！立即在今天許下你的承諾吧！
			</Text>
			<Box>
				<Image src={STEPS_MOBILE} />
			</Box>
		</Box>
	);
};

export default Content;
