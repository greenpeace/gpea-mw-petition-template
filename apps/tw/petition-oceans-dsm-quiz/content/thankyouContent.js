import React from 'react';
import { connect } from 'react-redux';
import {
	Heading,
	Button,
	Box,
	Text,
	Image,
	ListItem,
	OrderedList,
	UnorderedList
} from '@chakra-ui/react';
import {
	headingProps,
	paragraphProps
} from '@common/styles/components/contentStyle';
import contentImage1 from '../images/thanks-1.png';
import contentImage2 from '../images/thanks-2.jpg';

const Content = ({ theme, signup, type }) => {
	const themeInterests = theme.interests;
	const { FirstName } = signup;
	const HighlightText = ({ children }) => (
		<Text
			as="span"
			color={'white'}
			bgColor={`theme.${themeInterests}`}
			fontWeight={'bold'}
		>
			{children}
		</Text>
	);
	return (
		<Box px={4} color={`white`}>
			<Heading
				{...headingProps}
				color={`theme.${themeInterests}`}
				fontSize={{ base: '2xl', md: '3xl' }}
			>
				<span>您已成功連署支持阻止深海採礦！</span>
				<Text as="p" {...paragraphProps} color="white">
					也歡迎您邀請更多志同道合的夥伴一起加入
				</Text>
			</Heading>

			<Heading {...headingProps} color={`theme.${themeInterests}`}>
				感謝您關注全球海洋的未來
			</Heading>

			<Text as="p" {...paragraphProps}>
				每一個偉大的成就，背後都有無數人前仆後繼的努力。
				<br />
				現在，恭喜您成為全球海洋守護者之一，
				<br />
				我們都是守護脆弱海洋的重要力量！
			</Text>

			<Box {...paragraphProps}>
				<Image src={contentImage1} py={4} maxW={{ base: '100%' }} mx="auto" />
			</Box>

			<Heading {...headingProps} color={`theme.${themeInterests}`}>
				在這裡
				<br />
				也想邀您支持綠色和平的環境守護工作
			</Heading>

			<Text as="p" {...paragraphProps}>
				海洋正面臨前所未有的衝擊，氣候變遷、塑膠污染、破壞性捕撈和深海採礦，種種破壞都會對海洋帶來致命傷害，對獨特海洋生態造成嚴重威脅。而過去近
				20
				年，我們串連全球辦公室，以紮實的科學研究揭露海洋破壞真相，並提出劃設全球
				30% 海洋保護區的可行方案，
				<HighlightText>
					終於在 2023 年初成功讓聯合國通過《全球海洋公約》，為 2030 年保護至少
					30% 海洋奠定關鍵基礎！
				</HighlightText>
				<br />
				<br />
				距離 2030 年僅剩 7 年，未來全球每年必須建立 1,100 萬平方公里（相當於 304
				個臺灣面積）的海洋保護區，才能趕上海洋復甦進度。
				<br />
				<br />
				<HighlightText>
					您的支持對我們來說至關重要。
					<br />
					綠色和平為維持政治中立與財務獨立性，
					<br />
					不接受政府與企業贊助，僅接受一般民眾捐款。
				</HighlightText>
				<br />
				<br />
				無論捐款金額大小，您的貢獻都是保護地球的一份力量。
				<br />
				再次感謝您對綠色和平的支持，
				<br />
				期待著與您攜手，共同為保護海洋的未來而努力！
			</Text>

			<Box {...paragraphProps}>
				<Image src={contentImage2} py={4} maxW={{ base: '100%' }} mx="auto" />
			</Box>
		</Box>
	);
};

const mapStateToProps = ({ status, theme, signup }) => {
	return { status, signup: signup.data, theme: theme.data };
};

export default connect(mapStateToProps)(Content);
