import React from 'react';
import { connect } from 'react-redux';
import {
	AspectRatio,
	Box,
	Heading,
	Image,
	Center,
	Divider
} from '@chakra-ui/react';
import {
	headingProps,
	paragraphProps
} from '@common/styles/components/contentStyle';
import * as statusActions from 'store/actions/action-types/status-actions';
import Step01 from '../../images/donate/step01.svg';
import Step02 from '../../images/donate/step02.svg';
import Step03 from '../../images/donate/step03.svg';
import Step04 from '../../images/donate/step04.svg';

const Content = ({ theme }) => {
	const themeInterests = theme.interests;
	return (
		<>
			<Heading {...headingProps} color={`theme.${themeInterests}`}>
				綠色和平《山海大嶼》大嶼山生態紀錄片
			</Heading>

			<Box {...paragraphProps} py="4">
				<AspectRatio w="100%" ratio={16 / 9}>
					<iframe
						src="https://www.youtube.com/embed/n1Tk6VHVfK0"
						allowFullScreen
					/>
				</AspectRatio>
			</Box>

			<Heading {...headingProps} color={`theme.${themeInterests}`}>
				如何收看
			</Heading>

			<Box {...paragraphProps}>
				<div className="flex flex-col py-6">
					{STEPS.map((d, i) => (
						<div key={`${d.content}-${i}`} className="flex flex-row">
							<div>
								<div className="flex flex-row items-center">
									<div className="mx-[10px] h-[70px] w-[70px] rounded-[50%] border-[1px] border-solid border-[#000]">
										<Center h={'100%'}>
											<Image src={d.icon} alt={''} />
										</Center>
									</div>
									<p className="flex-1">{d.content}</p>
								</div>
								{i + 1 !== STEPS.length && (
									<div className="mx-[10px] w-[70px]">
										<Center w={'100%'}>
											<Divider
												orientation="vertical"
												borderColor="#000"
												h={'50px'}
											/>
										</Center>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</Box>
		</>
	);
};

const STEPS = [
	{
		content: '填妥登記表格',
		icon: Step01
	},
	{
		content: '幾分鐘內，您將會收到確認電郵與短訊',
		icon: Step02
	},
	{
		content: '點開電郵或短訊中的收看連結，並輸入您的收看密碼',
		icon: Step03
	},
	{
		content: '準備好欣賞紀錄片吧！',
		icon: Step04
	}
];

const mapStateToProps = ({ status, theme }) => {
	return { status, theme: theme.data };
};

const mapDispatchToProps = (dispatch) => {
	return {
		setScrollToTarget: (data) => {
			dispatch({ type: statusActions.SET_SCROLL_TO_TARGET, data });
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
